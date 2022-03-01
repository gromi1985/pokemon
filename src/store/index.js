// import { createStore } from 'vuex';
import axios from 'axios';
import Vuex from 'vuex'

const store = new Vuex.Store({
  state: {
    info: [],//Array Vacio
    infoCurrent: [],//Array de unico Elemento Vacio
    page: 1,
    itemDetailsSelect: '',
    dataPerson:{},
    auth:false,
    username:''
  },
  mutations: {
    //auth: true si el usuario existe en el localstorage
    ADD_PAGE: (state) => {
      state.page += 10;
      console.log(state.page);
    },


    SET_LISTPOKE: function (state, payload) {
      state.info.push(payload);

    },

    SET_IEMCHARACTER: function (state, payload) {
      state.infoCurrent = Object.assign({}, payload)
    },


    SET_ITEMPROPERTY: function(state,property,value){
      Object.defineProperty(state.infoCurrent, property, value)
    },
    
    SET_USER:(state,dataUser)=>{state.dataPerson  = Object.assign({} , dataUser);},
   
    // SET_FLAG_AUTH:function(state,newValue){
    //   state.auth = newValue;
    // },
    doLogout(state) {
      state.auth = false;
      state.username = null;
    },
    doLogin(state, username) {
      state.auth = true;
      state.username = username;
    },
  },
  
  
  
  actions: {
    GET_LISTPOKES: (state) => {
      console.log('GET_LISTPOKES...')
      let patternRegex = '[^/]+/$';//Ultima parte de la url


      var id = '';

      axios
        .get(`https://pokeapi.co/api/v2/pokemon/?offset=${state.state.page}&limit=10`)
        .then(response => {
          if (response.status == 200) {
            //  state.commit("SET_LISTPOKE",response.data.results);
            state.commit("ADD_PAGE", state.state.page);
            console.log('state.state.page: ' + state.state.page)
            let urlInfo1 = response.data.results;
            console.log(urlInfo1);

            for (let e in urlInfo1) {

              id = urlInfo1[e].url.match(patternRegex)[0];
              //  itemPoke.name = urlInfo1[e].name;
              // console.log("1.- Iem:" + itemPoke.name);
              console.log(id);


              if (id) {
                axios
                  .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
                  .then(response => {
                    if (response.status == 200) {
                      console.log("2.-Iem:" + response.data);
                      let urlInfo2 = response.data;
                      console.log(urlInfo2);

                      const itemPoke = {
                        urlInitId: id,
                        name: urlInfo2.name,
                        imgUrl: urlInfo2.sprites.other.dream_world.front_default,
                        experience: urlInfo2.base_experience,
                        atack: urlInfo2.stats[1].base_stat,
                        defensa: urlInfo2.stats[2].base_stat,
                        especial: urlInfo2.stats[3].base_stat,
                      };


                      console.log('ItemPoke: ' + itemPoke)

                      state.commit("SET_LISTPOKE", itemPoke);
                    }
                  })
                  .catch(error => console.log(error));
              }
            }

          }
        })
        .catch(error => console.log(error));
       

      console.log("Salgo de GET_LISTPOKES ....")
    },
    GET_ITEMCHARACTER: (state, id) => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)

        .then(response => {
          if (response.status == 200) {
            //  let urlInfo2 = response.data;
            let urlInfo2Temp = JSON.stringify(response.data).replace(/"official-/g, '"official_');
            let urlInfo2 = JSON.parse(urlInfo2Temp)

            const itemPoke = {
              urlInitId: id,
              name: urlInfo2.forms[0].name,
              imgUrl2: urlInfo2.sprites.other.official_artwork.front_default,
              especie: urlInfo2.species.name,
              altura: urlInfo2.height,
              peso: urlInfo2.weight,
              habilidad: urlInfo2.abilities[0].ability.name,
              tipo: urlInfo2.types.map(item=>item.type.name)
            };


            state.commit("SET_IEMCHARACTER", itemPoke);
          }
        })
        .catch(error => console.log(error));
    },
   
    GET_ITEMSHIP: (state, id) => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)

        .then(response => {
          if (response.status == 200) {
            state.commit("SET_IEMSHIPINFO", response.data);
            let urlPilots = response.data.pilots;
            state.commit('INIT_ITEMSHIP_PILOTS');
            if (urlPilots.length) {
              state.commit('SET_FLAGPILOT', true);
              for (let urlPilot of urlPilots) {
                axios
                  .get(urlPilot)
                  .then(response => {
                    if (response.status == 200) {
                      let shipPilots = response.data;
                      state.commit("SET_ITEMSHIP_PILOTS", shipPilots);
                    }
                    else {
                      console.log("No funciono la llamada");
                      console.log(response.status);
                    }
                  })
                  .catch(error => console.log(error));
              }
            }
            else
              state.commit('SET_FLAGPILOT', false);

          }
        })
        .catch(error => console.log(error));
    },
    doLogin({ commit }, username) {
      commit("doLogin", username);
    },
    doLogout({ commit }) {
      commit("doLogout");
    },

    LOGIN_USER:function({commit,dispatch},dataUser){
    console.log("LOGIN_USER....");
    let userLocal='';
    if (localStorage.length > 0)
    {
       userLocal = localStorage.getItem('usuario');
       
       if(userLocal != null){
         console.log("Hay localstorage....")
        if((dataUser.email === JSON.parse(userLocal).email) &&
          (dataUser.password === JSON.parse(userLocal).password)){
            localStorage.setItem("usuario", JSON.stringify(dataUser));
            commit("SET_USER",dataUser);
            // commit("SET_FLAG_AUTH",true);
            dispatch('doLogin',dataUser.email);
            console.log('El usuario es correcto');
          }
          else {
            console.log("Usuario no registrado...");
            // commit("SET_FLAG_AUTH",false);
           // state.state.auth = false;
          }
       }
       else{  
        console.log('El usuario no registrado..');
        // commit("SET_FLAG_AUTH",false);

        // state.state.auth = false;
       }

     }
    
    },
    REGISTERUSER:function(state,dataUser){
    console.log('REGISTERUSER');
    let userLocal='';
    if (localStorage.length > 0)
    {
       userLocal = localStorage.getItem('usuario');
       if(userLocal != null){
          if((dataUser.email === JSON.parse(userLocal).email) &&
            (dataUser.password === JSON.parse(userLocal).password)){
              dataUser={};
              console.log('Usuario ya registrado');
              state.commit("SET_USER",dataUser);
            }
            else{
              console.log(dataUser);
              localStorage.setItem("usuario", JSON.stringify(dataUser));
              state.commit("SET_USER",dataUser);
            }
          }
        else{
            localStorage.setItem("usuario", JSON.stringify(dataUser));
            state.commit("SET_USER",dataUser);
        }
    }
    },




  },
  getters: {
    getItemCurrent: (state) => {
      return state.infoCurrent;
    },

    getUserCurrent: (state) => {
      return state.username;
    }
  }
})

export default store;