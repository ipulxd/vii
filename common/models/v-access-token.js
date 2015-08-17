module.exports = function(VAccessToken) {


  VAccessToken.observe('before save', function (ctx, next) {
    if (ctx.instance) ctx.instance.created = new Date();
    next();
  });
};
