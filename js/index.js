console.log("Js rodando");

$(document).ready(function () {
    console.log("jQuery on");

})




$(document).ready(function () {
    $('.botao-garanta-agora').click(function () {

        var msg = "";

        if ($('#nome').val() == ("")) {
            msg += "Nome é obrigatório\n";
        }
        if ($('#email').val() == ("")) {
            msg += "Email é obrigatório\n";
            if($('#email').val() != $('#email').val(""))
            {
                verificaEmail($('#email').val());
            }
        }
        if ($('#telefone').val() == ("")) {
            msg += "Telefone é obrigatório\n";
        }
        if ($('#msg').val() == ("")) {
            msg += "Mensagem é obrigatório\n";
            if($('#msg').val().length < 10)
            {
                alert("A mensagem deve conter mais de 10 caracteres");
            }
        }
        else {

            var nome = $('#nome').val();
            var email = $('#email').val();
            var telefone = $('#telefone').val();
            var mensagem = $('#msg').val();

            var conteudo = {
                nome: nome,
                email: email,
                telefone: telefone,
                mensagem: mensagem
            }

            $("form").submit(function (event) {
                event.preventDefault();
                $.ajax({
                    url: './Formulario.php',
                    data: { conteudo },
                    type: 'post',
                    dataType: 'json',
                    success: function (conteudo) {
                     
                    },
                });
            })
        }
        alert(msg);
    })
})


function verificaEmail(email){
if(email != "")
      {
         var filtro = /^([w-]+(?:.[w-]+)*)@((?:[w-]+.)*w[w-]{0,66}).([a-z]{2,6}(?:.[a-z]{2})?)$/i;
         if(filtro.test(email))
         {
	   alert("Este endereço de email é válido!");
	   return true;
         } else {
           alert("Este endereço de email não é válido!");
           return false;
         }
      } else {
	 alert('Digite um email!'); return false;
      }
    }

    $(document).ready(function(){
        $("#telefone").mask("(00) 0000-00009");
    })