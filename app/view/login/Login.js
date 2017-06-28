Ext.define('TrackIT.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',
    name: 'login',
    id: 'login',
    session: true,
    requires: [
        'TrackIT.view.login.LoginController',
        'Ext.form.Panel'
    ],

    controller: 'login',
    bodyPadding: 10,
    title: 'Sistema de Tickets - Login',
    closable: false,
    autoShow: true,

    items: {
        xtype: 'form',
        reference: 'form',
        items: [{
            xtype: 'textfield',
            name: 'username',
            id: 'username',
            fieldLabel: 'Email',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'password',
            id: 'password',
            inputType: 'password',
            fieldLabel: 'Password',
            allowBlank: false
        }, {
            xtype: 'displayfield',
            hideEmptyLabel: false,
            value: 'Por favor, autentique-se no sistema.'
        }],
        buttons: [{
            text: 'Login',
            formBind: true,
            handler: function(){

              var user = Ext.getCmp('username').getValue();
                var pass = Ext.getCmp('password').getValue();
                console.log(user);
                console.log(pass);
                Ext.Ajax.request({
                    url: 'app/view/login/LoginValidate.php',
                      params: {
                      user: Ext.getCmp('username').getValue(),
                      pass: Ext.getCmp('password').getValue()
                    },

                    method: 'POST',
                    success: function() {
		                    var cookiee = Ext.util.Cookies.get('password');
                        if(cookiee == 'true')
                        {
                        localStorage.setItem("TrackITLoggedIn", true);

                          // Remove Login Window
                          var wind = Ext.WindowManager.getActive();

    if(wind){
         wind.close();
    }

                          // Add the main view to the viewport
                          Ext.create({
                              xtype: 'app-main'
                          });
                          Ext.Msg.alert('Sucesso!', 'Autenticado!');
function hide_message() {
    Ext.defer(function() {
        Ext.MessageBox.hide();
    }, 1000);
}
hide_message();
                        }
                        else {
                          Ext.Msg.alert('Erro!', 'Dados incorrectos, verifique as suas credenciais.');
                          function hide_message() {
                              Ext.defer(function() {
                                  Ext.MessageBox.hide();
                              }, 2500);
                          }
                          hide_message();
                        }
		         },
             failure: function() {
               Ext.MessageBox.alert('Status!', 'Erro no servidor, tente mais tarde');
             }

                  });


            }


        }]
    }
});
