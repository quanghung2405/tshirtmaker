'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      var users = [
          {
              id: 1,
              firstName: 'Huynh',
              lastName: 'An',
              email: 'huynhan@gmail.com',
              password: '$2a$08$hguFhdL8y.Me101EzFcFNOVrO73udXEpSCdxjDUYbjO5w8/yICYHi',
			  role: 'user',
			  gender: 'male',
			  phoneNumber: '0123456789',
			  country: 'Vietnam',
			  city: 'Ho Chi Minh',
			  address: '123 Nguyen Thi Minh Khai'
          },
		  {
              id: 2,
              firstName: 'Huynh',
              lastName: 'Duy',
              email: 'huynhduy@gmail.com',
              password: '$2a$08$hguFhdL8y.Me101EzFcFNOVrO73udXEpSCdxjDUYbjO5w8/yICYHi',
			  role: 'admin',
			  gender: 'male',
			  phoneNumber: '0123456789',
			  country: 'Vietnam',
			  city: 'Ho Chi Minh',
			  address: '123 Nguyen Thi Minh Khai'
          },
		  {
              id: 3,
              firstName: 'Quang',
              lastName: 'Hung',
              email: 'quanghung@gmail.com',
              password: '$2a$08$hguFhdL8y.Me101EzFcFNOVrO73udXEpSCdxjDUYbjO5w8/yICYHi',
			  role: 'user',
			  gender: 'male',
			  phoneNumber: '01233332333',
			  country: 'Vietnam',
			  city: 'Ho Chi Minh',
			  address: '33 Dinh Tien Hoang'
          }
      ];
       return queryInterface.bulkInsert('Users', users, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
