flattenJson = function(d) {
  var r = {};

  function rec(c, p) {
    if (Object(c) !== c) {
      r[p] = c;
    } else if (Array.isArray(c)) {
      for (var i = 0, l = c.length; i < l; i++)
        rec(c[i], p ? p + "." + i : "" + i);
      if (l == 0)
        r[p] = [];
    } else {
      var ie = true;
      for (var i in c) {
        ie = false;
        rec(c[i], p ? p + "." + i : i);
      }
      if (ie)
        r[p] = {};
    }
  }
  rec(d, "");
  return r;
};