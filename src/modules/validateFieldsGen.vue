
emailValidatePattern(emailField)
    {
         console.log('emailValidatePattern');

         let tuEmail = emailField.toString()
         const patron = /^[\w]+@{1}[\w]+\.+[a-z]{2,3}$/
         let respuesta = patron.test(tuEmail)
         return respuesta;
    }

<script>
export default validateFieldsGen({
  emailValidatePattern(emailField)
})
</script>

  export default{
  }