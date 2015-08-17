module.exports = function(VRole) {

  VRole.observe('before save', function (ctx, next) {
    if (ctx.instance)
      ctx.instance.created = new Date();
    else
      ctx.instance.modified = new Date();
    next();
  });

};
