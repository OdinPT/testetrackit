
Ext.define('TrackIT.view.main.recuperados.respostas.MostraRespostaRecuperada', {
    extend: 'Ext.form.Panel',
    xtype: 'fieldrespostarecuperada',
    controller: 'respostacontrecuperada',
    requires: [
      'TrackIT.store.respostas.RespostaSeleccionada',
      'TrackIT.view.main.recuperados.respostas.RespostaControllerRecuperada'
    ],
    id: 'staticPageForm',
    frame: true,
    title: 'Resposta',
    width: 1080,
    height: 450,
    bodyPadding: 10,
    layout: {
            type: 'form',
            align: 'stretch'
        },
        defaults: {
            layout: 'form',
            margin: 20
        },

    config:{stores: ['respostaseleccionadarecuperada']},

    items: [{
        xtype: 'textfield',
        fieldLabel: 'ID:',
        id: 'ide'
    },
    {
        xtype: 'textfield',
        fieldLabel: 'Assunto:',
        id: 'subjecte'
    },
    {
        xtype: 'textareafield',
        fieldLabel: 'Resposta:',
        id: 'answere'
    },
    {
        xtype: 'textfield',
        fieldLabel: 'IDTicket:',
        id: 'IDtickete'
    }
  ],
  dockedItems: {
      dock: 'bottom',
      xtype: 'toolbar',
      items: [
      {
        text: 'Carregar Resposta',
        glyph: 43,
        listeners: {
           click: 'onClickObterResposta'
        }

      },
      {
        text: 'Apagar Resposta',
        glyph: 43,
        listeners: {
          click: 'onClickApagarResposta'
        }

      }
    ]
  }
  });
