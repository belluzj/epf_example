App.PhoneNumberController = Ember.ObjectController.extend({
  isEmergencyNumber: function () {
    console.log('parentController', this.get('parentController'));
    console.log('parentController.emergencyPhoneNumber', this.get('parentController.emergencyPhoneNumber'));
    console.log(this.get('model'));
    return this.get('parentController.emergencyPhoneNumber') == this.get('model');
  }.property('parentController.emergencyPhoneNumber', 'model'),
});
