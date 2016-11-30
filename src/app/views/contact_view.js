import $ from 'jquery';

const ContactView = Backbone.View.extend({
  initialize: function(options) {
    // this.model = options.contact;
    this.contactTemplate = options.contactTemplate;
    this.modalTemplate = options.modalTemplate;
    // this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    this.delegateEvents();
    var html = this.contactTemplate(this.model.toJSON());
    this.$el.html(html);

    return this;
  },

  events: {
    'click .contact-card': 'showModal',
    'click document': 'hideModal'
  },

  showModal: function() {
    var html = this.modalTemplate(this.model.toJSON());
    $('#contact-details').html(html).show();
  },


  hideModal: function() {
    console.log("hide");
    if ($('#contact-details').is(':visible')) {
      $('#contact-details').hide();
    }
  }

}); // end ContactView

export default ContactView;
