module.exports = function(Person) {

  var loopback = require('loopback');

  Person.observe('before save', function (ctx, next) {
    if (ctx.instance)
      ctx.instance.created = new Date();
    //else
    //  ctx.instance.lastUpdated = new Date();
    next();
  });

// TODO: Update password is not working as expected: user cant login with new password
  Person.updatePassword = function (id, password, cb) {
    //var newPass = Person.hashPassword(password);
    Person.findById(id, function (err, user) {
      user.updateAttribute('password', password, function (err, result) {
        cb(null, result);
      });
    });
  };

  Person.remoteMethod('updatePassword', {
      description: 'Update user password',
      accepts: [
        {arg: 'id', type: 'string', required: true},
        {arg: 'password', type: 'string', required: true, http: {source: 'body'}}
      ],
      returns: {arg: 'updated', type: 'boolean'},
      http: {path: '/:id/updatePassword', verb: 'post'}
    }
  );

  Person.isAllowed = function (model, modelId, method, cb) {
    var ctx = loopback.getCurrentContext();
    var accessToken = ctx.get('accessToken');
    var ACL = Person.app.models.VACL;

    ACL.checkAccessForToken(accessToken, model, modelId, method, function (err, allowed) {
      cb(null, allowed);
    });
  };

  Person.remoteMethod('isAllowed', {
      description: 'Check if user allowed',
      accepts: [
        {arg: 'model', type: 'string', required: true, http: {source: 'query'}},
        {arg: 'modelId', type: 'string', required: true, http: {source: 'query'}},
        {arg: 'method', type: 'string', required: true, http: {source: 'query'}}
      ],
      returns: {arg: 'allowed', type: 'boolean'},
      http: {path: '/isAllowed', verb: 'get'}
    }
  );

  Person.myRole = function (cb) {
    var ctx = loopback.getCurrentContext();
    var accessToken = ctx.get('accessToken'); // userId = accessToken.userId
    var RoleMapping = Person.app.models.VRoleMapping;

    RoleMapping.findOne({
      include: 'role',
      where: {
        and: [
          {principalType: RoleMapping.USER},
          {principalId: accessToken.userId}
        ]
      }
    }, function (err, rm) {
      var role = rm.toJSON().role.name;
      cb(null, role);
    });

  };

  Person.remoteMethod('myRole', {
      description: 'Get role of logged in user',
      returns: {arg: 'role', type: 'string'},
      http: {path: '/myRole', verb: 'get'}
    }
  );

};
