unflattenJson = function(d) {
  "use strict";
  if (Object(d) !== d || Array.isArray(d))
    return d;
  var r = {},
    c, p, id, l, t;
  for (var i in d) {
    c = r, p = "", l = 0;
    do {
      id = i.indexOf(".", l);
      t = i.substring(l, id !== -1 ? id : undefined);
      c = c[p] || (c[p] = (!isNaN(parseInt(t)) ? [] : {}));
      p = t;
      l = id + 1;
    } while (id >= 0);
    c[p] = d[p];
  }
  return result[""];
};