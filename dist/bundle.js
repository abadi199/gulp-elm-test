!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in p||(p[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==v.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=p[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(v.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=p[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return x[e]||(x[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},r.name);t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=p[s],v=x[s];v?l=v.exports:c&&!c.declarative?l=c.esModule:c?(d(c),v=c.module,l=v.exports):l=f(s),v&&v.importers?(v.importers.push(t),t.dependencies.push(v)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=p[e];if(t)t.declarative?c(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=f(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=p[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){if(r===e)return r;var t={};if("object"==typeof r||"function"==typeof r)if(g){var n;for(var o in r)(n=Object.getOwnPropertyDescriptor(r,o))&&h(t,o,n)}else{var a=r&&r.hasOwnProperty;for(var o in r)(!a||r.hasOwnProperty(o))&&(t[o]=r[o])}return t["default"]=r,h(t,"__useDefault",{value:!0}),t}function c(r,t){var n=p[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==v.call(t,u)&&(p[u]?c(u,t):f(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function f(e){if(D[e])return D[e];if("@node/"==e.substr(0,6))return y(e.substr(6));var r=p[e];if(!r)throw"Module "+e+" not present.";return a(e),c(e,[]),p[e]=void 0,r.declarative&&h(r.module.exports,"__esModule",{value:!0}),D[e]=r.declarative?r.module.exports:r.esModule}var p={},v=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},g=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(m){g=!1}var h;!function(){try{Object.defineProperty({},"a",{})&&(h=Object.defineProperty)}catch(e){h=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var x={},y="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,D={"@empty":{}};return function(e,n,o){return function(a){a(function(a){for(var u={_nodeRequire:y,register:r,registerDynamic:t,get:f,set:function(e,r){D[e]=r},newModule:function(e){return e}},d=0;d<n.length;d++)(function(e,r){r&&r.__esModule?D[e]=r:D[e]=s(r)})(n[d],arguments[d]);o(u);var i=f(e[0]);if(e.length>1)for(var d=1;d<e.length;d++)f(e[d]);return i.__useDefault?i["default"]:i})}}}("undefined"!=typeof self?self:global)

(["1","1"], [], function($__System) {

$__System.registerDynamic("2", ["3"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(Buffer) {
    var clone = (function() {
      'use strict';
      function clone(parent, circular, depth, prototype) {
        var filter;
        if (typeof circular === 'object') {
          depth = circular.depth;
          prototype = circular.prototype;
          filter = circular.filter;
          circular = circular.circular;
        }
        var allParents = [];
        var allChildren = [];
        var useBuffer = typeof Buffer != 'undefined';
        if (typeof circular == 'undefined')
          circular = true;
        if (typeof depth == 'undefined')
          depth = Infinity;
        function _clone(parent, depth) {
          if (parent === null)
            return null;
          if (depth == 0)
            return parent;
          var child;
          var proto;
          if (typeof parent != 'object') {
            return parent;
          }
          if (clone.__isArray(parent)) {
            child = [];
          } else if (clone.__isRegExp(parent)) {
            child = new RegExp(parent.source, __getRegExpFlags(parent));
            if (parent.lastIndex)
              child.lastIndex = parent.lastIndex;
          } else if (clone.__isDate(parent)) {
            child = new Date(parent.getTime());
          } else if (useBuffer && Buffer.isBuffer(parent)) {
            child = new Buffer(parent.length);
            parent.copy(child);
            return child;
          } else {
            if (typeof prototype == 'undefined') {
              proto = Object.getPrototypeOf(parent);
              child = Object.create(proto);
            } else {
              child = Object.create(prototype);
              proto = prototype;
            }
          }
          if (circular) {
            var index = allParents.indexOf(parent);
            if (index != -1) {
              return allChildren[index];
            }
            allParents.push(parent);
            allChildren.push(child);
          }
          for (var i in parent) {
            var attrs;
            if (proto) {
              attrs = Object.getOwnPropertyDescriptor(proto, i);
            }
            if (attrs && attrs.set == null) {
              continue;
            }
            child[i] = _clone(parent[i], depth - 1);
          }
          return child;
        }
        return _clone(parent, depth);
      }
      clone.clonePrototype = function clonePrototype(parent) {
        if (parent === null)
          return null;
        var c = function() {};
        c.prototype = parent;
        return new c();
      };
      function __objToStr(o) {
        return Object.prototype.toString.call(o);
      }
      ;
      clone.__objToStr = __objToStr;
      function __isDate(o) {
        return typeof o === 'object' && __objToStr(o) === '[object Date]';
      }
      ;
      clone.__isDate = __isDate;
      function __isArray(o) {
        return typeof o === 'object' && __objToStr(o) === '[object Array]';
      }
      ;
      clone.__isArray = __isArray;
      function __isRegExp(o) {
        return typeof o === 'object' && __objToStr(o) === '[object RegExp]';
      }
      ;
      clone.__isRegExp = __isRegExp;
      function __getRegExpFlags(re) {
        var flags = '';
        if (re.global)
          flags += 'g';
        if (re.ignoreCase)
          flags += 'i';
        if (re.multiline)
          flags += 'm';
        return flags;
      }
      ;
      clone.__getRegExpFlags = __getRegExpFlags;
      return clone;
    })();
    if (typeof module === 'object' && module.exports) {
      module.exports = clone;
    }
  })($__require('3').Buffer);
  return module.exports;
});

$__System.registerDynamic("4", ["2"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('2');
  return module.exports;
});

$__System.registerDynamic("5", ["6"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Stat = $__require('6').Stats;
  module.exports = cloneStats;
  function cloneStats(stats) {
    var replacement = new Stat;
    Object.keys(stats).forEach(function(key) {
      replacement[key] = stats[key];
    });
    return replacement;
  }
  return module.exports;
});

$__System.registerDynamic("7", ["5"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('5');
  return module.exports;
});

$__System.registerDynamic("8", ["3"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(Buffer) {
    var Buffer = $__require('3').Buffer;
    module.exports = function(buf) {
      var out = new Buffer(buf.length);
      buf.copy(out);
      return out;
    };
  })($__require('3').Buffer);
  return module.exports;
});

$__System.registerDynamic("9", ["3"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('3').Buffer.isBuffer;
  return module.exports;
});

$__System.registerDynamic("a", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(v) {
    return v === null;
  };
  return module.exports;
});

$__System.registerDynamic("b", ["c"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Stream = $__require('c').Stream;
  module.exports = function(o) {
    return !!o && o instanceof Stream;
  };
  return module.exports;
});

$__System.registerDynamic("d", ["b"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isStream = $__require('b');
  module.exports = function(stream) {
    if (!isStream(stream))
      return;
    var streamType = stream.constructor.name;
    if (streamType === 'Stream')
      streamType = '';
    return '<' + streamType + 'Stream>';
  };
  return module.exports;
});

$__System.registerDynamic("e", ["f", "4", "7", "8", "9", "b", "a", "d", "c", "10", "3", "11"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(Buffer, process) {
    var path = $__require('f');
    var clone = $__require('4');
    var cloneStats = $__require('7');
    var cloneBuffer = $__require('8');
    var isBuffer = $__require('9');
    var isStream = $__require('b');
    var isNull = $__require('a');
    var inspectStream = $__require('d');
    var Stream = $__require('c');
    var replaceExt = $__require('10');
    function File(file) {
      if (!file)
        file = {};
      var history = file.path ? [file.path] : file.history;
      this.history = history || [];
      this.cwd = file.cwd || process.cwd();
      this.base = file.base || this.cwd;
      this.stat = file.stat || null;
      this.contents = file.contents || null;
      this._isVinyl = true;
    }
    File.prototype.isBuffer = function() {
      return isBuffer(this.contents);
    };
    File.prototype.isStream = function() {
      return isStream(this.contents);
    };
    File.prototype.isNull = function() {
      return isNull(this.contents);
    };
    File.prototype.isDirectory = function() {
      return this.isNull() && this.stat && this.stat.isDirectory();
    };
    File.prototype.clone = function(opt) {
      if (typeof opt === 'boolean') {
        opt = {
          deep: opt,
          contents: true
        };
      } else if (!opt) {
        opt = {
          deep: true,
          contents: true
        };
      } else {
        opt.deep = opt.deep === true;
        opt.contents = opt.contents !== false;
      }
      var contents;
      if (this.isStream()) {
        contents = this.contents.pipe(new Stream.PassThrough());
        this.contents = this.contents.pipe(new Stream.PassThrough());
      } else if (this.isBuffer()) {
        contents = opt.contents ? cloneBuffer(this.contents) : this.contents;
      }
      var file = new File({
        cwd: this.cwd,
        base: this.base,
        stat: (this.stat ? cloneStats(this.stat) : null),
        history: this.history.slice(),
        contents: contents
      });
      Object.keys(this).forEach(function(key) {
        if (key === '_contents' || key === 'stat' || key === 'history' || key === 'path' || key === 'base' || key === 'cwd') {
          return;
        }
        file[key] = opt.deep ? clone(this[key], true) : this[key];
      }, this);
      return file;
    };
    File.prototype.pipe = function(stream, opt) {
      if (!opt)
        opt = {};
      if (typeof opt.end === 'undefined')
        opt.end = true;
      if (this.isStream()) {
        return this.contents.pipe(stream, opt);
      }
      if (this.isBuffer()) {
        if (opt.end) {
          stream.end(this.contents);
        } else {
          stream.write(this.contents);
        }
        return stream;
      }
      if (opt.end)
        stream.end();
      return stream;
    };
    File.prototype.inspect = function() {
      var inspect = [];
      var filePath = (this.base && this.path) ? this.relative : this.path;
      if (filePath) {
        inspect.push('"' + filePath + '"');
      }
      if (this.isBuffer()) {
        inspect.push(this.contents.inspect());
      }
      if (this.isStream()) {
        inspect.push(inspectStream(this.contents));
      }
      return '<File ' + inspect.join(' ') + '>';
    };
    File.isVinyl = function(file) {
      return file && file._isVinyl === true;
    };
    Object.defineProperty(File.prototype, 'contents', {
      get: function() {
        return this._contents;
      },
      set: function(val) {
        if (!isBuffer(val) && !isStream(val) && !isNull(val)) {
          throw new Error('File.contents can only be a Buffer, a Stream, or null.');
        }
        this._contents = val;
      }
    });
    Object.defineProperty(File.prototype, 'relative', {
      get: function() {
        if (!this.base)
          throw new Error('No base specified! Can not get relative.');
        if (!this.path)
          throw new Error('No path specified! Can not get relative.');
        return path.relative(this.base, this.path);
      },
      set: function() {
        throw new Error('File.relative is generated from the base and path attributes. Do not modify it.');
      }
    });
    Object.defineProperty(File.prototype, 'dirname', {
      get: function() {
        if (!this.path)
          throw new Error('No path specified! Can not get dirname.');
        return path.dirname(this.path);
      },
      set: function(dirname) {
        if (!this.path)
          throw new Error('No path specified! Can not set dirname.');
        this.path = path.join(dirname, path.basename(this.path));
      }
    });
    Object.defineProperty(File.prototype, 'basename', {
      get: function() {
        if (!this.path)
          throw new Error('No path specified! Can not get basename.');
        return path.basename(this.path);
      },
      set: function(basename) {
        if (!this.path)
          throw new Error('No path specified! Can not set basename.');
        this.path = path.join(path.dirname(this.path), basename);
      }
    });
    Object.defineProperty(File.prototype, 'extname', {
      get: function() {
        if (!this.path)
          throw new Error('No path specified! Can not get extname.');
        return path.extname(this.path);
      },
      set: function(extname) {
        if (!this.path)
          throw new Error('No path specified! Can not set extname.');
        this.path = replaceExt(this.path, extname);
      }
    });
    Object.defineProperty(File.prototype, 'path', {
      get: function() {
        return this.history[this.history.length - 1];
      },
      set: function(path) {
        if (typeof path !== 'string')
          throw new Error('path should be string');
        if (path && path !== this.path) {
          this.history.push(path);
        }
      }
    });
    module.exports = File;
  })($__require('3').Buffer, $__require('11'));
  return module.exports;
});

$__System.registerDynamic("12", ["e"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('e');
  return module.exports;
});

$__System.registerDynamic("13", ["f"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var path = $__require('f');
  module.exports = function(npath, ext) {
    if (typeof npath !== 'string')
      return npath;
    if (npath.length === 0)
      return npath;
    var nFileName = path.basename(npath, path.extname(npath)) + ext;
    return path.join(path.dirname(npath), nFileName);
  };
  return module.exports;
});

$__System.registerDynamic("10", ["13"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('13');
  return module.exports;
});

$__System.registerDynamic("14", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  "format cjs";
  (function(global) {
    'use strict';
    var dateFormat = (function() {
      var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|'[^']*'|'[^']*'/g;
      var timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g;
      var timezoneClip = /[^-+\dA-Z]/g;
      return function(date, mask, utc, gmt) {
        if (arguments.length === 1 && kindOf(date) === 'string' && !/\d/.test(date)) {
          mask = date;
          date = undefined;
        }
        date = date || new Date;
        if (!(date instanceof Date)) {
          date = new Date(date);
        }
        if (isNaN(date)) {
          throw TypeError('Invalid date');
        }
        mask = String(dateFormat.masks[mask] || mask || dateFormat.masks['default']);
        var maskSlice = mask.slice(0, 4);
        if (maskSlice === 'UTC:' || maskSlice === 'GMT:') {
          mask = mask.slice(4);
          utc = true;
          if (maskSlice === 'GMT:') {
            gmt = true;
          }
        }
        var _ = utc ? 'getUTC' : 'get';
        var d = date[_ + 'Date']();
        var D = date[_ + 'Day']();
        var m = date[_ + 'Month']();
        var y = date[_ + 'FullYear']();
        var H = date[_ + 'Hours']();
        var M = date[_ + 'Minutes']();
        var s = date[_ + 'Seconds']();
        var L = date[_ + 'Milliseconds']();
        var o = utc ? 0 : date.getTimezoneOffset();
        var W = getWeek(date);
        var N = getDayOfWeek(date);
        var flags = {
          d: d,
          dd: pad(d),
          ddd: dateFormat.i18n.dayNames[D],
          dddd: dateFormat.i18n.dayNames[D + 7],
          m: m + 1,
          mm: pad(m + 1),
          mmm: dateFormat.i18n.monthNames[m],
          mmmm: dateFormat.i18n.monthNames[m + 12],
          yy: String(y).slice(2),
          yyyy: y,
          h: H % 12 || 12,
          hh: pad(H % 12 || 12),
          H: H,
          HH: pad(H),
          M: M,
          MM: pad(M),
          s: s,
          ss: pad(s),
          l: pad(L, 3),
          L: pad(Math.round(L / 10)),
          t: H < 12 ? 'a' : 'p',
          tt: H < 12 ? 'am' : 'pm',
          T: H < 12 ? 'A' : 'P',
          TT: H < 12 ? 'AM' : 'PM',
          Z: gmt ? 'GMT' : utc ? 'UTC' : (String(date).match(timezone) || ['']).pop().replace(timezoneClip, ''),
          o: (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
          S: ['th', 'st', 'nd', 'rd'][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10],
          W: W,
          N: N
        };
        return mask.replace(token, function(match) {
          if (match in flags) {
            return flags[match];
          }
          return match.slice(1, match.length - 1);
        });
      };
    })();
    dateFormat.masks = {
      'default': 'ddd mmm dd yyyy HH:MM:ss',
      'shortDate': 'm/d/yy',
      'mediumDate': 'mmm d, yyyy',
      'longDate': 'mmmm d, yyyy',
      'fullDate': 'dddd, mmmm d, yyyy',
      'shortTime': 'h:MM TT',
      'mediumTime': 'h:MM:ss TT',
      'longTime': 'h:MM:ss TT Z',
      'isoDate': 'yyyy-mm-dd',
      'isoTime': 'HH:MM:ss',
      'isoDateTime': 'yyyy-mm-dd\'T\'HH:MM:sso',
      'isoUtcDateTime': 'UTC:yyyy-mm-dd\'T\'HH:MM:ss\'Z\'',
      'expiresHeaderFormat': 'ddd, dd mmm yyyy HH:MM:ss Z'
    };
    dateFormat.i18n = {
      dayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      monthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    };
    function pad(val, len) {
      val = String(val);
      len = len || 2;
      while (val.length < len) {
        val = '0' + val;
      }
      return val;
    }
    function getWeek(date) {
      var targetThursday = new Date(date.getFullYear(), date.getMonth(), date.getDate());
      targetThursday.setDate(targetThursday.getDate() - ((targetThursday.getDay() + 6) % 7) + 3);
      var firstThursday = new Date(targetThursday.getFullYear(), 0, 4);
      firstThursday.setDate(firstThursday.getDate() - ((firstThursday.getDay() + 6) % 7) + 3);
      var ds = targetThursday.getTimezoneOffset() - firstThursday.getTimezoneOffset();
      targetThursday.setHours(targetThursday.getHours() - ds);
      var weekDiff = (targetThursday - firstThursday) / (86400000 * 7);
      return 1 + Math.floor(weekDiff);
    }
    function getDayOfWeek(date) {
      var dow = date.getDay();
      if (dow === 0) {
        dow = 7;
      }
      return dow;
    }
    function kindOf(val) {
      if (val === null) {
        return 'null';
      }
      if (val === undefined) {
        return 'undefined';
      }
      if (typeof val !== 'object') {
        return typeof val;
      }
      if (Array.isArray(val)) {
        return 'array';
      }
      return {}.toString.call(val).slice(8, -1).toLowerCase();
    }
    ;
    if (typeof define === 'function' && define.amd) {
      define(function() {
        return dateFormat;
      });
    } else if (typeof exports === 'object') {
      module.exports = dateFormat;
    } else {
      global.dateFormat = dateFormat;
    }
  })(this);
  return module.exports;
});

$__System.registerDynamic("15", ["14"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('14');
  return module.exports;
});

$__System.registerDynamic("16", ["17"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var sparkles = $__require('17');
  function hasGulplog() {
    return sparkles.exists('gulplog');
  }
  module.exports = hasGulplog;
  return module.exports;
});

$__System.registerDynamic("18", ["16"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('16');
  return module.exports;
});

$__System.registerDynamic("19", ["1a"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var EventEmitter = $__require('1a').EventEmitter;
  var sparklesNamespace = 'store@sparkles';
  var defaultNamespace = 'default';
  function getStore() {
    var store = global[sparklesNamespace];
    if (!store) {
      store = global[sparklesNamespace] = {};
    }
    return store;
  }
  function getEmitter(namespace) {
    var store = getStore();
    namespace = namespace || defaultNamespace;
    var ee = store[namespace];
    if (!ee) {
      ee = store[namespace] = new EventEmitter();
      ee.setMaxListeners(0);
      ee.remove = function remove() {
        ee.removeAllListeners();
        delete store[namespace];
      };
    }
    return ee;
  }
  function exists(namespace) {
    var store = getStore();
    return !!(store[namespace]);
  }
  module.exports = getEmitter;
  module.exports.exists = exists;
  return module.exports;
});

$__System.registerDynamic("17", ["19"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('19');
  return module.exports;
});

$__System.registerDynamic("1b", ["1c", "17"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var format = $__require('1c').format;
  var sparkles = $__require('17');
  var levels = ['debug', 'info', 'warn', 'error'];
  function getLogger(namespace) {
    var logger = sparkles(namespace);
    levels.forEach(function(level) {
      logger[level] = makeLogLevel(level);
    });
    return logger;
  }
  function makeLogLevel(level) {
    return function(msg) {
      if (typeof msg === 'string') {
        msg = format.apply(null, arguments);
      }
      this.emit(level, msg);
    };
  }
  module.exports = getLogger;
  return module.exports;
});

$__System.registerDynamic("1d", ["1b"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('1b');
  return module.exports;
});

$__System.registerDynamic("1e", ["1d"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var getLogger = $__require('1d');
  var logger = getLogger('gulplog');
  module.exports = logger;
  return module.exports;
});

$__System.registerDynamic("1f", ["1e"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('1e');
  return module.exports;
});

$__System.registerDynamic("20", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function timestamp(pattern, date) {
    if (typeof pattern !== 'string') {
      date = pattern;
      pattern = 'YYYY:MM:DD';
    }
    date = date || new Date();
    return pattern.replace(/([YMDHms]{2,4})(:\/)?/g, function(_, key, sep) {
      var increment = method(key);
      if (!increment)
        return _;
      sep = sep || '';
      var res = '00' + String(date[increment[0]]() + (increment[2] || 0));
      return res.slice(-increment[1]) + sep;
    });
  };
  function method(key) {
    return ({
      YYYY: ['getFullYear', 4],
      YY: ['getFullYear', 2],
      MM: ['getMonth', 2, 1],
      DD: ['getDate', 2],
      HH: ['getHours', 2],
      mm: ['getMinutes', 2],
      ss: ['getSeconds', 2],
      ms: ['getMilliseconds', 3]
    })[key];
  }
  return module.exports;
});

$__System.registerDynamic("21", ["20"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('20');
  return module.exports;
});

$__System.registerDynamic("22", ["23", "21", "11"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var chalk = $__require('23');
    var timestamp = $__require('21');
    function getTimestamp() {
      return '[' + chalk.grey(timestamp('HH:mm:ss')) + ']';
    }
    function log() {
      var time = getTimestamp();
      process.stdout.write(time + ' ');
      console.log.apply(console, arguments);
      return this;
    }
    function error() {
      var time = getTimestamp();
      process.stderr.write(time + ' ');
      console.error.apply(console, arguments);
      return this;
    }
    module.exports = log;
    module.exports.error = error;
  })($__require('11'));
  return module.exports;
});

$__System.registerDynamic("24", ["22"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('22');
  return module.exports;
});

$__System.registerDynamic("25", ["18", "1f", "24"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var hasGulplog = $__require('18');
  module.exports = function() {
    if (hasGulplog()) {
      var gulplog = $__require('1f');
      gulplog.info.apply(gulplog, arguments);
    } else {
      var fancylog = $__require('24');
      fancylog.apply(null, arguments);
    }
    return this;
  };
  return module.exports;
});

$__System.registerDynamic("26", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  function baseCopy(source, props, object) {
    object || (object = {});
    var index = -1,
        length = props.length;
    while (++index < length) {
      var key = props[index];
      object[key] = source[key];
    }
    return object;
  }
  module.exports = baseCopy;
  return module.exports;
});

$__System.registerDynamic("27", ["26"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('26');
  return module.exports;
});

$__System.registerDynamic("28", ["11"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    function baseToString(value) {
      return value == null ? '' : (value + '');
    }
    module.exports = baseToString;
  })($__require('11'));
  return module.exports;
});

$__System.registerDynamic("29", ["28"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('28');
  return module.exports;
});

$__System.registerDynamic("2a", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  function baseValues(object, props) {
    var index = -1,
        length = props.length,
        result = Array(length);
    while (++index < length) {
      result[index] = object[props[index]];
    }
    return result;
  }
  module.exports = baseValues;
  return module.exports;
});

$__System.registerDynamic("2b", ["2a"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('2a');
  return module.exports;
});

$__System.registerDynamic("2c", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var reIsUint = /^\d+$/;
  var MAX_SAFE_INTEGER = 9007199254740991;
  function baseProperty(key) {
    return function(object) {
      return object == null ? undefined : object[key];
    };
  }
  var getLength = baseProperty('length');
  function isArrayLike(value) {
    return value != null && isLength(getLength(value));
  }
  function isIndex(value, length) {
    value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
    length = length == null ? MAX_SAFE_INTEGER : length;
    return value > -1 && value % 1 == 0 && value < length;
  }
  function isIterateeCall(value, index, object) {
    if (!isObject(object)) {
      return false;
    }
    var type = typeof index;
    if (type == 'number' ? (isArrayLike(object) && isIndex(index, object.length)) : (type == 'string' && index in object)) {
      var other = object[index];
      return value === value ? (value === other) : (other !== other);
    }
    return false;
  }
  function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
  }
  module.exports = isIterateeCall;
  return module.exports;
});

$__System.registerDynamic("2d", ["2c"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('2c');
  return module.exports;
});

$__System.registerDynamic("2e", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var funcTag = '[object Function]';
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  function isObjectLike(value) {
    return !!value && typeof value == 'object';
  }
  var objectProto = Object.prototype;
  var fnToString = Function.prototype.toString;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var objToString = objectProto.toString;
  var reIsNative = RegExp('^' + fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
  function getNative(object, key) {
    var value = object == null ? undefined : object[key];
    return isNative(value) ? value : undefined;
  }
  function isFunction(value) {
    return isObject(value) && objToString.call(value) == funcTag;
  }
  function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
  }
  function isNative(value) {
    if (value == null) {
      return false;
    }
    if (isFunction(value)) {
      return reIsNative.test(fnToString.call(value));
    }
    return isObjectLike(value) && reIsHostCtor.test(value);
  }
  module.exports = getNative;
  return module.exports;
});

$__System.registerDynamic("2f", ["2e"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('2e');
  return module.exports;
});

$__System.registerDynamic("30", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var MAX_SAFE_INTEGER = 9007199254740991;
  var argsTag = '[object Arguments]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]';
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var objectToString = objectProto.toString;
  var propertyIsEnumerable = objectProto.propertyIsEnumerable;
  function baseProperty(key) {
    return function(object) {
      return object == null ? undefined : object[key];
    };
  }
  var getLength = baseProperty('length');
  function isArguments(value) {
    return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
  }
  function isArrayLike(value) {
    return value != null && isLength(getLength(value)) && !isFunction(value);
  }
  function isArrayLikeObject(value) {
    return isObjectLike(value) && isArrayLike(value);
  }
  function isFunction(value) {
    var tag = isObject(value) ? objectToString.call(value) : '';
    return tag == funcTag || tag == genTag;
  }
  function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
  }
  function isObjectLike(value) {
    return !!value && typeof value == 'object';
  }
  module.exports = isArguments;
  return module.exports;
});

$__System.registerDynamic("31", ["30"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('30');
  return module.exports;
});

$__System.registerDynamic("32", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var arrayTag = '[object Array]',
      funcTag = '[object Function]';
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  function isObjectLike(value) {
    return !!value && typeof value == 'object';
  }
  var objectProto = Object.prototype;
  var fnToString = Function.prototype.toString;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var objToString = objectProto.toString;
  var reIsNative = RegExp('^' + fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
  var nativeIsArray = getNative(Array, 'isArray');
  var MAX_SAFE_INTEGER = 9007199254740991;
  function getNative(object, key) {
    var value = object == null ? undefined : object[key];
    return isNative(value) ? value : undefined;
  }
  function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  var isArray = nativeIsArray || function(value) {
    return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
  };
  function isFunction(value) {
    return isObject(value) && objToString.call(value) == funcTag;
  }
  function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
  }
  function isNative(value) {
    if (value == null) {
      return false;
    }
    if (isFunction(value)) {
      return reIsNative.test(fnToString.call(value));
    }
    return isObjectLike(value) && reIsHostCtor.test(value);
  }
  module.exports = isArray;
  return module.exports;
});

$__System.registerDynamic("33", ["32"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('32');
  return module.exports;
});

$__System.registerDynamic("34", ["2f", "31", "33"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var getNative = $__require('2f'),
      isArguments = $__require('31'),
      isArray = $__require('33');
  var reIsUint = /^\d+$/;
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var nativeKeys = getNative(Object, 'keys');
  var MAX_SAFE_INTEGER = 9007199254740991;
  function baseProperty(key) {
    return function(object) {
      return object == null ? undefined : object[key];
    };
  }
  var getLength = baseProperty('length');
  function isArrayLike(value) {
    return value != null && isLength(getLength(value));
  }
  function isIndex(value, length) {
    value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
    length = length == null ? MAX_SAFE_INTEGER : length;
    return value > -1 && value % 1 == 0 && value < length;
  }
  function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  function shimKeys(object) {
    var props = keysIn(object),
        propsLength = props.length,
        length = propsLength && object.length;
    var allowIndexes = !!length && isLength(length) && (isArray(object) || isArguments(object));
    var index = -1,
        result = [];
    while (++index < propsLength) {
      var key = props[index];
      if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
        result.push(key);
      }
    }
    return result;
  }
  function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
  }
  var keys = !nativeKeys ? shimKeys : function(object) {
    var Ctor = object == null ? undefined : object.constructor;
    if ((typeof Ctor == 'function' && Ctor.prototype === object) || (typeof object != 'function' && isArrayLike(object))) {
      return shimKeys(object);
    }
    return isObject(object) ? nativeKeys(object) : [];
  };
  function keysIn(object) {
    if (object == null) {
      return [];
    }
    if (!isObject(object)) {
      object = Object(object);
    }
    var length = object.length;
    length = (length && isLength(length) && (isArray(object) || isArguments(object)) && length) || 0;
    var Ctor = object.constructor,
        index = -1,
        isProto = typeof Ctor == 'function' && Ctor.prototype === object,
        result = Array(length),
        skipIndexes = length > 0;
    while (++index < length) {
      result[index] = (index + '');
    }
    for (var key in object) {
      if (!(skipIndexes && isIndex(key, length)) && !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
        result.push(key);
      }
    }
    return result;
  }
  module.exports = keys;
  return module.exports;
});

$__System.registerDynamic("35", ["34"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('34');
  return module.exports;
});

$__System.registerDynamic("36", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var FUNC_ERROR_TEXT = 'Expected a function';
  var nativeMax = Math.max;
  function restParam(func, start) {
    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
    return function() {
      var args = arguments,
          index = -1,
          length = nativeMax(args.length - start, 0),
          rest = Array(length);
      while (++index < length) {
        rest[index] = args[start + index];
      }
      switch (start) {
        case 0:
          return func.call(this, rest);
        case 1:
          return func.call(this, args[0], rest);
        case 2:
          return func.call(this, args[0], args[1], rest);
      }
      var otherArgs = Array(start + 1);
      index = -1;
      while (++index < start) {
        otherArgs[index] = args[index];
      }
      otherArgs[start] = rest;
      return func.apply(this, otherArgs);
    };
  }
  module.exports = restParam;
  return module.exports;
});

$__System.registerDynamic("37", ["36"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('36');
  return module.exports;
});

$__System.registerDynamic("38", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var objectTypes = {
    'function': true,
    'object': true
  };
  var freeExports = (objectTypes[typeof exports] && exports && !exports.nodeType) ? exports : undefined;
  var freeModule = (objectTypes[typeof module] && module && !module.nodeType) ? module : undefined;
  var freeGlobal = checkGlobal(freeExports && freeModule && typeof global == 'object' && global);
  var freeSelf = checkGlobal(objectTypes[typeof self] && self);
  var freeWindow = checkGlobal(objectTypes[typeof window] && window);
  var thisGlobal = checkGlobal(objectTypes[typeof this] && this);
  var root = freeGlobal || ((freeWindow !== (thisGlobal && thisGlobal.window)) && freeWindow) || freeSelf || thisGlobal || Function('return this')();
  function checkGlobal(value) {
    return (value && value.Object === Object) ? value : null;
  }
  module.exports = root;
  return module.exports;
});

$__System.registerDynamic("39", ["38"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('38');
  return module.exports;
});

$__System.registerDynamic("3a", ["39", "11"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    var root = $__require('39');
    var INFINITY = 1 / 0;
    var symbolTag = '[object Symbol]';
    var reUnescapedHtml = /[&<>"'`]/g,
        reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
    var htmlEscapes = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
      '`': '&#96;'
    };
    function escapeHtmlChar(chr) {
      return htmlEscapes[chr];
    }
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    var Symbol = root.Symbol;
    var symbolProto = Symbol ? Symbol.prototype : undefined,
        symbolToString = Symbol ? symbolProto.toString : undefined;
    function isObjectLike(value) {
      return !!value && typeof value == 'object';
    }
    function isSymbol(value) {
      return typeof value == 'symbol' || (isObjectLike(value) && objectToString.call(value) == symbolTag);
    }
    function toString(value) {
      if (typeof value == 'string') {
        return value;
      }
      if (value == null) {
        return '';
      }
      if (isSymbol(value)) {
        return Symbol ? symbolToString.call(value) : '';
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
    }
    function escape(string) {
      string = toString(string);
      return (string && reHasUnescapedHtml.test(string)) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
    }
    module.exports = escape;
  })($__require('11'));
  return module.exports;
});

$__System.registerDynamic("3b", ["3a"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('3a');
  return module.exports;
});

$__System.registerDynamic("3c", ["3b", "3d"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var escape = $__require('3b'),
      reInterpolate = $__require('3d');
  var reEscape = /<%-([\s\S]+?)%>/g,
      reEvaluate = /<%([\s\S]+?)%>/g;
  var templateSettings = {
    'escape': reEscape,
    'evaluate': reEvaluate,
    'interpolate': reInterpolate,
    'variable': '',
    'imports': {'_': {'escape': escape}}
  };
  module.exports = templateSettings;
  return module.exports;
});

$__System.registerDynamic("3e", ["3c"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('3c');
  return module.exports;
});

$__System.registerDynamic("3f", ["27", "29", "2b", "2d", "3d", "35", "37", "3e"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var baseCopy = $__require('27'),
      baseToString = $__require('29'),
      baseValues = $__require('2b'),
      isIterateeCall = $__require('2d'),
      reInterpolate = $__require('3d'),
      keys = $__require('35'),
      restParam = $__require('37'),
      templateSettings = $__require('3e');
  var errorTag = '[object Error]';
  var reEmptyStringLeading = /\b__p \+= '';/g,
      reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
      reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
  var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
  var reNoMatch = /($^)/;
  var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
  var stringEscapes = {
    '\\': '\\',
    "'": "'",
    '\n': 'n',
    '\r': 'r',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };
  function escapeStringChar(chr) {
    return '\\' + stringEscapes[chr];
  }
  function isObjectLike(value) {
    return !!value && typeof value == 'object';
  }
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var objToString = objectProto.toString;
  function assignOwnDefaults(objectValue, sourceValue, key, object) {
    return (objectValue === undefined || !hasOwnProperty.call(object, key)) ? sourceValue : objectValue;
  }
  function assignWith(object, source, customizer) {
    var index = -1,
        props = keys(source),
        length = props.length;
    while (++index < length) {
      var key = props[index],
          value = object[key],
          result = customizer(value, source[key], key, object, source);
      if ((result === result ? (result !== value) : (value === value)) || (value === undefined && !(key in object))) {
        object[key] = result;
      }
    }
    return object;
  }
  function baseAssign(object, source) {
    return source == null ? object : baseCopy(source, keys(source), object);
  }
  function isError(value) {
    return isObjectLike(value) && typeof value.message == 'string' && objToString.call(value) == errorTag;
  }
  function template(string, options, otherOptions) {
    var settings = templateSettings.imports._.templateSettings || templateSettings;
    if (otherOptions && isIterateeCall(string, options, otherOptions)) {
      options = otherOptions = undefined;
    }
    string = baseToString(string);
    options = assignWith(baseAssign({}, otherOptions || options), settings, assignOwnDefaults);
    var imports = assignWith(baseAssign({}, options.imports), settings.imports, assignOwnDefaults),
        importsKeys = keys(imports),
        importsValues = baseValues(imports, importsKeys);
    var isEscaping,
        isEvaluating,
        index = 0,
        interpolate = options.interpolate || reNoMatch,
        source = "__p += '";
    var reDelimiters = RegExp((options.escape || reNoMatch).source + '|' + interpolate.source + '|' + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' + (options.evaluate || reNoMatch).source + '|$', 'g');
    var sourceURL = 'sourceURL' in options ? '//# sourceURL=' + options.sourceURL + '\n' : '';
    string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
      interpolateValue || (interpolateValue = esTemplateValue);
      source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
      if (escapeValue) {
        isEscaping = true;
        source += "' +\n__e(" + escapeValue + ") +\n'";
      }
      if (evaluateValue) {
        isEvaluating = true;
        source += "';\n" + evaluateValue + ";\n__p += '";
      }
      if (interpolateValue) {
        source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
      }
      index = offset + match.length;
      return match;
    });
    source += "';\n";
    var variable = options.variable;
    if (!variable) {
      source = 'with (obj) {\n' + source + '\n}\n';
    }
    source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source).replace(reEmptyStringMiddle, '$1').replace(reEmptyStringTrailing, '$1;');
    source = 'function(' + (variable || 'obj') + ') {\n' + (variable ? '' : 'obj || (obj = {});\n') + "var __t, __p = ''" + (isEscaping ? ', __e = _.escape' : '') + (isEvaluating ? ', __j = Array.prototype.join;\n' + "function print() { __p += __j.call(arguments, '') }\n" : ';\n') + source + 'return __p\n}';
    var result = attempt(function() {
      return Function(importsKeys, sourceURL + 'return ' + source).apply(undefined, importsValues);
    });
    result.source = source;
    if (isError(result)) {
      throw result;
    }
    return result;
  }
  var attempt = restParam(function(func, args) {
    try {
      return func.apply(undefined, args);
    } catch (e) {
      return isError(e) ? e : new Error(e);
    }
  });
  module.exports = template;
  return module.exports;
});

$__System.registerDynamic("40", ["3f"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('3f');
  return module.exports;
});

$__System.registerDynamic("41", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var reEscape = /<%-([\s\S]+?)%>/g;
  module.exports = reEscape;
  return module.exports;
});

$__System.registerDynamic("42", ["41"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('41');
  return module.exports;
});

$__System.registerDynamic("43", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var reEvaluate = /<%([\s\S]+?)%>/g;
  module.exports = reEvaluate;
  return module.exports;
});

$__System.registerDynamic("44", ["43"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('43');
  return module.exports;
});

$__System.registerDynamic("45", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var reInterpolate = /<%=([\s\S]+?)%>/g;
  module.exports = reInterpolate;
  return module.exports;
});

$__System.registerDynamic("3d", ["45"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('45');
  return module.exports;
});

$__System.registerDynamic("46", ["40", "42", "44", "3d"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var template = $__require('40');
  var reEscape = $__require('42');
  var reEvaluate = $__require('44');
  var reInterpolate = $__require('3d');
  var forcedSettings = {
    escape: reEscape,
    evaluate: reEvaluate,
    interpolate: reInterpolate
  };
  module.exports = function(tmpl, data) {
    var fn = template(tmpl, forcedSettings);
    var wrapped = function(o) {
      if (typeof o === 'undefined' || typeof o.file === 'undefined') {
        throw new Error('Failed to provide the current file as "file" to the template');
      }
      return fn(o);
    };
    return (data ? wrapped(data) : wrapped);
  };
  return module.exports;
});

$__System.registerDynamic("47", ["48", "11"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    var parseArgs = $__require('48');
    var argv = parseArgs(process.argv.slice(2));
    module.exports = argv;
  })($__require('11'));
  return module.exports;
});

$__System.registerDynamic("49", ["11"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var BEEP_DELAY = 500;
    if (!process.stdout.isTTY || process.argv.indexOf('--no-beep') !== -1 || process.argv.indexOf('--beep=false') !== -1) {
      module.exports = function() {};
      return;
    }
    function beep() {
      process.stdout.write('\u0007');
    }
    function melodicalBeep(val, cb) {
      if (val.length === 0) {
        cb();
        return;
      }
      setTimeout(function() {
        if (val.shift() === '*') {
          beep();
        }
        melodicalBeep(val, cb);
      }, BEEP_DELAY);
    }
    module.exports = function(val, cb) {
      cb = cb || function() {};
      if (val === parseInt(val)) {
        if (val < 0) {
          throw new TypeError('Negative numbers are not accepted');
        }
        if (val === 0) {
          cb();
          return;
        }
        for (var i = 0; i < val; i++) {
          setTimeout(function(i) {
            beep();
            if (i === val - 1) {
              cb();
            }
          }, BEEP_DELAY * i, i);
        }
      } else if (!val) {
        beep();
        cb();
      } else if (typeof val === 'string') {
        melodicalBeep(val.split(''), cb);
      } else {
        throw new TypeError('Not an accepted type');
      }
    };
  })($__require('11'));
  return module.exports;
});

$__System.registerDynamic("4a", ["49"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('49');
  return module.exports;
});

$__System.registerDynamic("4b", ["4c"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var through = $__require('4c');
  module.exports = function() {
    return through.obj();
  };
  return module.exports;
});

$__System.registerDynamic("4d", ["c"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Stream = $__require('c').Stream;
  module.exports = function(o) {
    return !!o && o instanceof Stream;
  };
  return module.exports;
});

$__System.registerDynamic("4e", ["3"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(Buffer) {
    var buf = $__require('3');
    var Buffer = buf.Buffer;
    module.exports = function(o) {
      return typeof o === 'object' && o instanceof Buffer;
    };
  })($__require('3').Buffer);
  return module.exports;
});

$__System.registerDynamic("4f", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(v) {
    return v === null;
  };
  return module.exports;
});

$__System.registerDynamic("50", ["51"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('51');
  return module.exports;
});

$__System.registerDynamic("52", ["50"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var stream = $__require('50');
  var duplex2 = module.exports = function duplex2(options, writable, readable) {
    return new DuplexWrapper(options, writable, readable);
  };
  var DuplexWrapper = exports.DuplexWrapper = function DuplexWrapper(options, writable, readable) {
    if (typeof readable === "undefined") {
      readable = writable;
      writable = options;
      options = null;
    }
    options = options || {};
    options.objectMode = true;
    stream.Duplex.call(this, options);
    this._bubbleErrors = (typeof options.bubbleErrors === "undefined") || !!options.bubbleErrors;
    this._writable = writable;
    this._readable = readable;
    var self = this;
    writable.once("finish", function() {
      self.end();
    });
    this.once("finish", function() {
      writable.end();
    });
    readable.on("data", function(e) {
      if (!self.push(e)) {
        readable.pause();
      }
    });
    readable.once("end", function() {
      return self.push(null);
    });
    if (this._bubbleErrors) {
      writable.on("error", function(err) {
        return self.emit("error", err);
      });
      readable.on("error", function(err) {
        return self.emit("error", err);
      });
    }
  };
  DuplexWrapper.prototype = Object.create(stream.Duplex.prototype, {constructor: {value: DuplexWrapper}});
  DuplexWrapper.prototype._write = function _write(input, encoding, done) {
    this._writable.write(input, encoding, done);
  };
  DuplexWrapper.prototype._read = function _read(n) {
    this._readable.resume();
  };
  return module.exports;
});

$__System.registerDynamic("53", ["52"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('52');
  return module.exports;
});

$__System.registerDynamic("51", ["54", "59", "55", "56", "57", "58"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  exports = module.exports = $__require('54');
  exports.Stream = $__require('59');
  exports.Readable = exports;
  exports.Writable = $__require('55');
  exports.Duplex = $__require('56');
  exports.Transform = $__require('57');
  exports.PassThrough = $__require('58');
  return module.exports;
});

$__System.registerDynamic("5a", ["55"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('55');
  return module.exports;
});

$__System.registerDynamic("5b", ["56"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('56');
  return module.exports;
});

$__System.registerDynamic("5c", ["57"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('57');
  return module.exports;
});

$__System.registerDynamic("5d", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = Array.isArray || function(arr) {
    return Object.prototype.toString.call(arr) == '[object Array]';
  };
  return module.exports;
});

$__System.registerDynamic("5e", ["5d"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('5d');
  return module.exports;
});

$__System.registerDynamic("54", ["5e", "3", "1a", "59", "5f", "60", "@empty", "56", "61", "11"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(Buffer, process) {
    module.exports = Readable;
    var isArray = $__require('5e');
    var Buffer = $__require('3').Buffer;
    Readable.ReadableState = ReadableState;
    var EE = $__require('1a').EventEmitter;
    if (!EE.listenerCount)
      EE.listenerCount = function(emitter, type) {
        return emitter.listeners(type).length;
      };
    var Stream = $__require('59');
    var util = $__require('5f');
    util.inherits = $__require('60');
    var StringDecoder;
    var debug = $__require('@empty');
    if (debug && debug.debuglog) {
      debug = debug.debuglog('stream');
    } else {
      debug = function() {};
    }
    util.inherits(Readable, Stream);
    function ReadableState(options, stream) {
      var Duplex = $__require('56');
      options = options || {};
      var hwm = options.highWaterMark;
      var defaultHwm = options.objectMode ? 16 : 16 * 1024;
      this.highWaterMark = (hwm || hwm === 0) ? hwm : defaultHwm;
      this.highWaterMark = ~~this.highWaterMark;
      this.buffer = [];
      this.length = 0;
      this.pipes = null;
      this.pipesCount = 0;
      this.flowing = null;
      this.ended = false;
      this.endEmitted = false;
      this.reading = false;
      this.sync = true;
      this.needReadable = false;
      this.emittedReadable = false;
      this.readableListening = false;
      this.objectMode = !!options.objectMode;
      if (stream instanceof Duplex)
        this.objectMode = this.objectMode || !!options.readableObjectMode;
      this.defaultEncoding = options.defaultEncoding || 'utf8';
      this.ranOut = false;
      this.awaitDrain = 0;
      this.readingMore = false;
      this.decoder = null;
      this.encoding = null;
      if (options.encoding) {
        if (!StringDecoder)
          StringDecoder = $__require('61').StringDecoder;
        this.decoder = new StringDecoder(options.encoding);
        this.encoding = options.encoding;
      }
    }
    function Readable(options) {
      var Duplex = $__require('56');
      if (!(this instanceof Readable))
        return new Readable(options);
      this._readableState = new ReadableState(options, this);
      this.readable = true;
      Stream.call(this);
    }
    Readable.prototype.push = function(chunk, encoding) {
      var state = this._readableState;
      if (util.isString(chunk) && !state.objectMode) {
        encoding = encoding || state.defaultEncoding;
        if (encoding !== state.encoding) {
          chunk = new Buffer(chunk, encoding);
          encoding = '';
        }
      }
      return readableAddChunk(this, state, chunk, encoding, false);
    };
    Readable.prototype.unshift = function(chunk) {
      var state = this._readableState;
      return readableAddChunk(this, state, chunk, '', true);
    };
    function readableAddChunk(stream, state, chunk, encoding, addToFront) {
      var er = chunkInvalid(state, chunk);
      if (er) {
        stream.emit('error', er);
      } else if (util.isNullOrUndefined(chunk)) {
        state.reading = false;
        if (!state.ended)
          onEofChunk(stream, state);
      } else if (state.objectMode || chunk && chunk.length > 0) {
        if (state.ended && !addToFront) {
          var e = new Error('stream.push() after EOF');
          stream.emit('error', e);
        } else if (state.endEmitted && addToFront) {
          var e = new Error('stream.unshift() after end event');
          stream.emit('error', e);
        } else {
          if (state.decoder && !addToFront && !encoding)
            chunk = state.decoder.write(chunk);
          if (!addToFront)
            state.reading = false;
          if (state.flowing && state.length === 0 && !state.sync) {
            stream.emit('data', chunk);
            stream.read(0);
          } else {
            state.length += state.objectMode ? 1 : chunk.length;
            if (addToFront)
              state.buffer.unshift(chunk);
            else
              state.buffer.push(chunk);
            if (state.needReadable)
              emitReadable(stream);
          }
          maybeReadMore(stream, state);
        }
      } else if (!addToFront) {
        state.reading = false;
      }
      return needMoreData(state);
    }
    function needMoreData(state) {
      return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
    }
    Readable.prototype.setEncoding = function(enc) {
      if (!StringDecoder)
        StringDecoder = $__require('61').StringDecoder;
      this._readableState.decoder = new StringDecoder(enc);
      this._readableState.encoding = enc;
      return this;
    };
    var MAX_HWM = 0x800000;
    function roundUpToNextPowerOf2(n) {
      if (n >= MAX_HWM) {
        n = MAX_HWM;
      } else {
        n--;
        for (var p = 1; p < 32; p <<= 1)
          n |= n >> p;
        n++;
      }
      return n;
    }
    function howMuchToRead(n, state) {
      if (state.length === 0 && state.ended)
        return 0;
      if (state.objectMode)
        return n === 0 ? 0 : 1;
      if (isNaN(n) || util.isNull(n)) {
        if (state.flowing && state.buffer.length)
          return state.buffer[0].length;
        else
          return state.length;
      }
      if (n <= 0)
        return 0;
      if (n > state.highWaterMark)
        state.highWaterMark = roundUpToNextPowerOf2(n);
      if (n > state.length) {
        if (!state.ended) {
          state.needReadable = true;
          return 0;
        } else
          return state.length;
      }
      return n;
    }
    Readable.prototype.read = function(n) {
      debug('read', n);
      var state = this._readableState;
      var nOrig = n;
      if (!util.isNumber(n) || n > 0)
        state.emittedReadable = false;
      if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
        debug('read: emitReadable', state.length, state.ended);
        if (state.length === 0 && state.ended)
          endReadable(this);
        else
          emitReadable(this);
        return null;
      }
      n = howMuchToRead(n, state);
      if (n === 0 && state.ended) {
        if (state.length === 0)
          endReadable(this);
        return null;
      }
      var doRead = state.needReadable;
      debug('need readable', doRead);
      if (state.length === 0 || state.length - n < state.highWaterMark) {
        doRead = true;
        debug('length less than watermark', doRead);
      }
      if (state.ended || state.reading) {
        doRead = false;
        debug('reading or ended', doRead);
      }
      if (doRead) {
        debug('do read');
        state.reading = true;
        state.sync = true;
        if (state.length === 0)
          state.needReadable = true;
        this._read(state.highWaterMark);
        state.sync = false;
      }
      if (doRead && !state.reading)
        n = howMuchToRead(nOrig, state);
      var ret;
      if (n > 0)
        ret = fromList(n, state);
      else
        ret = null;
      if (util.isNull(ret)) {
        state.needReadable = true;
        n = 0;
      }
      state.length -= n;
      if (state.length === 0 && !state.ended)
        state.needReadable = true;
      if (nOrig !== n && state.ended && state.length === 0)
        endReadable(this);
      if (!util.isNull(ret))
        this.emit('data', ret);
      return ret;
    };
    function chunkInvalid(state, chunk) {
      var er = null;
      if (!util.isBuffer(chunk) && !util.isString(chunk) && !util.isNullOrUndefined(chunk) && !state.objectMode) {
        er = new TypeError('Invalid non-string/buffer chunk');
      }
      return er;
    }
    function onEofChunk(stream, state) {
      if (state.decoder && !state.ended) {
        var chunk = state.decoder.end();
        if (chunk && chunk.length) {
          state.buffer.push(chunk);
          state.length += state.objectMode ? 1 : chunk.length;
        }
      }
      state.ended = true;
      emitReadable(stream);
    }
    function emitReadable(stream) {
      var state = stream._readableState;
      state.needReadable = false;
      if (!state.emittedReadable) {
        debug('emitReadable', state.flowing);
        state.emittedReadable = true;
        if (state.sync)
          process.nextTick(function() {
            emitReadable_(stream);
          });
        else
          emitReadable_(stream);
      }
    }
    function emitReadable_(stream) {
      debug('emit readable');
      stream.emit('readable');
      flow(stream);
    }
    function maybeReadMore(stream, state) {
      if (!state.readingMore) {
        state.readingMore = true;
        process.nextTick(function() {
          maybeReadMore_(stream, state);
        });
      }
    }
    function maybeReadMore_(stream, state) {
      var len = state.length;
      while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
        debug('maybeReadMore read 0');
        stream.read(0);
        if (len === state.length)
          break;
        else
          len = state.length;
      }
      state.readingMore = false;
    }
    Readable.prototype._read = function(n) {
      this.emit('error', new Error('not implemented'));
    };
    Readable.prototype.pipe = function(dest, pipeOpts) {
      var src = this;
      var state = this._readableState;
      switch (state.pipesCount) {
        case 0:
          state.pipes = dest;
          break;
        case 1:
          state.pipes = [state.pipes, dest];
          break;
        default:
          state.pipes.push(dest);
          break;
      }
      state.pipesCount += 1;
      debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);
      var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
      var endFn = doEnd ? onend : cleanup;
      if (state.endEmitted)
        process.nextTick(endFn);
      else
        src.once('end', endFn);
      dest.on('unpipe', onunpipe);
      function onunpipe(readable) {
        debug('onunpipe');
        if (readable === src) {
          cleanup();
        }
      }
      function onend() {
        debug('onend');
        dest.end();
      }
      var ondrain = pipeOnDrain(src);
      dest.on('drain', ondrain);
      function cleanup() {
        debug('cleanup');
        dest.removeListener('close', onclose);
        dest.removeListener('finish', onfinish);
        dest.removeListener('drain', ondrain);
        dest.removeListener('error', onerror);
        dest.removeListener('unpipe', onunpipe);
        src.removeListener('end', onend);
        src.removeListener('end', cleanup);
        src.removeListener('data', ondata);
        if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain))
          ondrain();
      }
      src.on('data', ondata);
      function ondata(chunk) {
        debug('ondata');
        var ret = dest.write(chunk);
        if (false === ret) {
          debug('false write response, pause', src._readableState.awaitDrain);
          src._readableState.awaitDrain++;
          src.pause();
        }
      }
      function onerror(er) {
        debug('onerror', er);
        unpipe();
        dest.removeListener('error', onerror);
        if (EE.listenerCount(dest, 'error') === 0)
          dest.emit('error', er);
      }
      if (!dest._events || !dest._events.error)
        dest.on('error', onerror);
      else if (isArray(dest._events.error))
        dest._events.error.unshift(onerror);
      else
        dest._events.error = [onerror, dest._events.error];
      function onclose() {
        dest.removeListener('finish', onfinish);
        unpipe();
      }
      dest.once('close', onclose);
      function onfinish() {
        debug('onfinish');
        dest.removeListener('close', onclose);
        unpipe();
      }
      dest.once('finish', onfinish);
      function unpipe() {
        debug('unpipe');
        src.unpipe(dest);
      }
      dest.emit('pipe', src);
      if (!state.flowing) {
        debug('pipe resume');
        src.resume();
      }
      return dest;
    };
    function pipeOnDrain(src) {
      return function() {
        var state = src._readableState;
        debug('pipeOnDrain', state.awaitDrain);
        if (state.awaitDrain)
          state.awaitDrain--;
        if (state.awaitDrain === 0 && EE.listenerCount(src, 'data')) {
          state.flowing = true;
          flow(src);
        }
      };
    }
    Readable.prototype.unpipe = function(dest) {
      var state = this._readableState;
      if (state.pipesCount === 0)
        return this;
      if (state.pipesCount === 1) {
        if (dest && dest !== state.pipes)
          return this;
        if (!dest)
          dest = state.pipes;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        if (dest)
          dest.emit('unpipe', this);
        return this;
      }
      if (!dest) {
        var dests = state.pipes;
        var len = state.pipesCount;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        for (var i = 0; i < len; i++)
          dests[i].emit('unpipe', this);
        return this;
      }
      var i = indexOf(state.pipes, dest);
      if (i === -1)
        return this;
      state.pipes.splice(i, 1);
      state.pipesCount -= 1;
      if (state.pipesCount === 1)
        state.pipes = state.pipes[0];
      dest.emit('unpipe', this);
      return this;
    };
    Readable.prototype.on = function(ev, fn) {
      var res = Stream.prototype.on.call(this, ev, fn);
      if (ev === 'data' && false !== this._readableState.flowing) {
        this.resume();
      }
      if (ev === 'readable' && this.readable) {
        var state = this._readableState;
        if (!state.readableListening) {
          state.readableListening = true;
          state.emittedReadable = false;
          state.needReadable = true;
          if (!state.reading) {
            var self = this;
            process.nextTick(function() {
              debug('readable nexttick read 0');
              self.read(0);
            });
          } else if (state.length) {
            emitReadable(this, state);
          }
        }
      }
      return res;
    };
    Readable.prototype.addListener = Readable.prototype.on;
    Readable.prototype.resume = function() {
      var state = this._readableState;
      if (!state.flowing) {
        debug('resume');
        state.flowing = true;
        if (!state.reading) {
          debug('resume read 0');
          this.read(0);
        }
        resume(this, state);
      }
      return this;
    };
    function resume(stream, state) {
      if (!state.resumeScheduled) {
        state.resumeScheduled = true;
        process.nextTick(function() {
          resume_(stream, state);
        });
      }
    }
    function resume_(stream, state) {
      state.resumeScheduled = false;
      stream.emit('resume');
      flow(stream);
      if (state.flowing && !state.reading)
        stream.read(0);
    }
    Readable.prototype.pause = function() {
      debug('call pause flowing=%j', this._readableState.flowing);
      if (false !== this._readableState.flowing) {
        debug('pause');
        this._readableState.flowing = false;
        this.emit('pause');
      }
      return this;
    };
    function flow(stream) {
      var state = stream._readableState;
      debug('flow', state.flowing);
      if (state.flowing) {
        do {
          var chunk = stream.read();
        } while (null !== chunk && state.flowing);
      }
    }
    Readable.prototype.wrap = function(stream) {
      var state = this._readableState;
      var paused = false;
      var self = this;
      stream.on('end', function() {
        debug('wrapped end');
        if (state.decoder && !state.ended) {
          var chunk = state.decoder.end();
          if (chunk && chunk.length)
            self.push(chunk);
        }
        self.push(null);
      });
      stream.on('data', function(chunk) {
        debug('wrapped data');
        if (state.decoder)
          chunk = state.decoder.write(chunk);
        if (!chunk || !state.objectMode && !chunk.length)
          return;
        var ret = self.push(chunk);
        if (!ret) {
          paused = true;
          stream.pause();
        }
      });
      for (var i in stream) {
        if (util.isFunction(stream[i]) && util.isUndefined(this[i])) {
          this[i] = function(method) {
            return function() {
              return stream[method].apply(stream, arguments);
            };
          }(i);
        }
      }
      var events = ['error', 'close', 'destroy', 'pause', 'resume'];
      forEach(events, function(ev) {
        stream.on(ev, self.emit.bind(self, ev));
      });
      self._read = function(n) {
        debug('wrapped _read', n);
        if (paused) {
          paused = false;
          stream.resume();
        }
      };
      return self;
    };
    Readable._fromList = fromList;
    function fromList(n, state) {
      var list = state.buffer;
      var length = state.length;
      var stringMode = !!state.decoder;
      var objectMode = !!state.objectMode;
      var ret;
      if (list.length === 0)
        return null;
      if (length === 0)
        ret = null;
      else if (objectMode)
        ret = list.shift();
      else if (!n || n >= length) {
        if (stringMode)
          ret = list.join('');
        else
          ret = Buffer.concat(list, length);
        list.length = 0;
      } else {
        if (n < list[0].length) {
          var buf = list[0];
          ret = buf.slice(0, n);
          list[0] = buf.slice(n);
        } else if (n === list[0].length) {
          ret = list.shift();
        } else {
          if (stringMode)
            ret = '';
          else
            ret = new Buffer(n);
          var c = 0;
          for (var i = 0,
              l = list.length; i < l && c < n; i++) {
            var buf = list[0];
            var cpy = Math.min(n - c, buf.length);
            if (stringMode)
              ret += buf.slice(0, cpy);
            else
              buf.copy(ret, c, 0, cpy);
            if (cpy < buf.length)
              list[0] = buf.slice(cpy);
            else
              list.shift();
            c += cpy;
          }
        }
      }
      return ret;
    }
    function endReadable(stream) {
      var state = stream._readableState;
      if (state.length > 0)
        throw new Error('endReadable called on non-empty stream');
      if (!state.endEmitted) {
        state.ended = true;
        process.nextTick(function() {
          if (!state.endEmitted && state.length === 0) {
            state.endEmitted = true;
            stream.readable = false;
            stream.emit('end');
          }
        });
      }
    }
    function forEach(xs, f) {
      for (var i = 0,
          l = xs.length; i < l; i++) {
        f(xs[i], i);
      }
    }
    function indexOf(xs, x) {
      for (var i = 0,
          l = xs.length; i < l; i++) {
        if (xs[i] === x)
          return i;
      }
      return -1;
    }
  })($__require('3').Buffer, $__require('11'));
  return module.exports;
});

$__System.registerDynamic("55", ["3", "5f", "60", "59", "56", "11"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(Buffer, process) {
    module.exports = Writable;
    var Buffer = $__require('3').Buffer;
    Writable.WritableState = WritableState;
    var util = $__require('5f');
    util.inherits = $__require('60');
    var Stream = $__require('59');
    util.inherits(Writable, Stream);
    function WriteReq(chunk, encoding, cb) {
      this.chunk = chunk;
      this.encoding = encoding;
      this.callback = cb;
    }
    function WritableState(options, stream) {
      var Duplex = $__require('56');
      options = options || {};
      var hwm = options.highWaterMark;
      var defaultHwm = options.objectMode ? 16 : 16 * 1024;
      this.highWaterMark = (hwm || hwm === 0) ? hwm : defaultHwm;
      this.objectMode = !!options.objectMode;
      if (stream instanceof Duplex)
        this.objectMode = this.objectMode || !!options.writableObjectMode;
      this.highWaterMark = ~~this.highWaterMark;
      this.needDrain = false;
      this.ending = false;
      this.ended = false;
      this.finished = false;
      var noDecode = options.decodeStrings === false;
      this.decodeStrings = !noDecode;
      this.defaultEncoding = options.defaultEncoding || 'utf8';
      this.length = 0;
      this.writing = false;
      this.corked = 0;
      this.sync = true;
      this.bufferProcessing = false;
      this.onwrite = function(er) {
        onwrite(stream, er);
      };
      this.writecb = null;
      this.writelen = 0;
      this.buffer = [];
      this.pendingcb = 0;
      this.prefinished = false;
      this.errorEmitted = false;
    }
    function Writable(options) {
      var Duplex = $__require('56');
      if (!(this instanceof Writable) && !(this instanceof Duplex))
        return new Writable(options);
      this._writableState = new WritableState(options, this);
      this.writable = true;
      Stream.call(this);
    }
    Writable.prototype.pipe = function() {
      this.emit('error', new Error('Cannot pipe. Not readable.'));
    };
    function writeAfterEnd(stream, state, cb) {
      var er = new Error('write after end');
      stream.emit('error', er);
      process.nextTick(function() {
        cb(er);
      });
    }
    function validChunk(stream, state, chunk, cb) {
      var valid = true;
      if (!util.isBuffer(chunk) && !util.isString(chunk) && !util.isNullOrUndefined(chunk) && !state.objectMode) {
        var er = new TypeError('Invalid non-string/buffer chunk');
        stream.emit('error', er);
        process.nextTick(function() {
          cb(er);
        });
        valid = false;
      }
      return valid;
    }
    Writable.prototype.write = function(chunk, encoding, cb) {
      var state = this._writableState;
      var ret = false;
      if (util.isFunction(encoding)) {
        cb = encoding;
        encoding = null;
      }
      if (util.isBuffer(chunk))
        encoding = 'buffer';
      else if (!encoding)
        encoding = state.defaultEncoding;
      if (!util.isFunction(cb))
        cb = function() {};
      if (state.ended)
        writeAfterEnd(this, state, cb);
      else if (validChunk(this, state, chunk, cb)) {
        state.pendingcb++;
        ret = writeOrBuffer(this, state, chunk, encoding, cb);
      }
      return ret;
    };
    Writable.prototype.cork = function() {
      var state = this._writableState;
      state.corked++;
    };
    Writable.prototype.uncork = function() {
      var state = this._writableState;
      if (state.corked) {
        state.corked--;
        if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.buffer.length)
          clearBuffer(this, state);
      }
    };
    function decodeChunk(state, chunk, encoding) {
      if (!state.objectMode && state.decodeStrings !== false && util.isString(chunk)) {
        chunk = new Buffer(chunk, encoding);
      }
      return chunk;
    }
    function writeOrBuffer(stream, state, chunk, encoding, cb) {
      chunk = decodeChunk(state, chunk, encoding);
      if (util.isBuffer(chunk))
        encoding = 'buffer';
      var len = state.objectMode ? 1 : chunk.length;
      state.length += len;
      var ret = state.length < state.highWaterMark;
      if (!ret)
        state.needDrain = true;
      if (state.writing || state.corked)
        state.buffer.push(new WriteReq(chunk, encoding, cb));
      else
        doWrite(stream, state, false, len, chunk, encoding, cb);
      return ret;
    }
    function doWrite(stream, state, writev, len, chunk, encoding, cb) {
      state.writelen = len;
      state.writecb = cb;
      state.writing = true;
      state.sync = true;
      if (writev)
        stream._writev(chunk, state.onwrite);
      else
        stream._write(chunk, encoding, state.onwrite);
      state.sync = false;
    }
    function onwriteError(stream, state, sync, er, cb) {
      if (sync)
        process.nextTick(function() {
          state.pendingcb--;
          cb(er);
        });
      else {
        state.pendingcb--;
        cb(er);
      }
      stream._writableState.errorEmitted = true;
      stream.emit('error', er);
    }
    function onwriteStateUpdate(state) {
      state.writing = false;
      state.writecb = null;
      state.length -= state.writelen;
      state.writelen = 0;
    }
    function onwrite(stream, er) {
      var state = stream._writableState;
      var sync = state.sync;
      var cb = state.writecb;
      onwriteStateUpdate(state);
      if (er)
        onwriteError(stream, state, sync, er, cb);
      else {
        var finished = needFinish(stream, state);
        if (!finished && !state.corked && !state.bufferProcessing && state.buffer.length) {
          clearBuffer(stream, state);
        }
        if (sync) {
          process.nextTick(function() {
            afterWrite(stream, state, finished, cb);
          });
        } else {
          afterWrite(stream, state, finished, cb);
        }
      }
    }
    function afterWrite(stream, state, finished, cb) {
      if (!finished)
        onwriteDrain(stream, state);
      state.pendingcb--;
      cb();
      finishMaybe(stream, state);
    }
    function onwriteDrain(stream, state) {
      if (state.length === 0 && state.needDrain) {
        state.needDrain = false;
        stream.emit('drain');
      }
    }
    function clearBuffer(stream, state) {
      state.bufferProcessing = true;
      if (stream._writev && state.buffer.length > 1) {
        var cbs = [];
        for (var c = 0; c < state.buffer.length; c++)
          cbs.push(state.buffer[c].callback);
        state.pendingcb++;
        doWrite(stream, state, true, state.length, state.buffer, '', function(err) {
          for (var i = 0; i < cbs.length; i++) {
            state.pendingcb--;
            cbs[i](err);
          }
        });
        state.buffer = [];
      } else {
        for (var c = 0; c < state.buffer.length; c++) {
          var entry = state.buffer[c];
          var chunk = entry.chunk;
          var encoding = entry.encoding;
          var cb = entry.callback;
          var len = state.objectMode ? 1 : chunk.length;
          doWrite(stream, state, false, len, chunk, encoding, cb);
          if (state.writing) {
            c++;
            break;
          }
        }
        if (c < state.buffer.length)
          state.buffer = state.buffer.slice(c);
        else
          state.buffer.length = 0;
      }
      state.bufferProcessing = false;
    }
    Writable.prototype._write = function(chunk, encoding, cb) {
      cb(new Error('not implemented'));
    };
    Writable.prototype._writev = null;
    Writable.prototype.end = function(chunk, encoding, cb) {
      var state = this._writableState;
      if (util.isFunction(chunk)) {
        cb = chunk;
        chunk = null;
        encoding = null;
      } else if (util.isFunction(encoding)) {
        cb = encoding;
        encoding = null;
      }
      if (!util.isNullOrUndefined(chunk))
        this.write(chunk, encoding);
      if (state.corked) {
        state.corked = 1;
        this.uncork();
      }
      if (!state.ending && !state.finished)
        endWritable(this, state, cb);
    };
    function needFinish(stream, state) {
      return (state.ending && state.length === 0 && !state.finished && !state.writing);
    }
    function prefinish(stream, state) {
      if (!state.prefinished) {
        state.prefinished = true;
        stream.emit('prefinish');
      }
    }
    function finishMaybe(stream, state) {
      var need = needFinish(stream, state);
      if (need) {
        if (state.pendingcb === 0) {
          prefinish(stream, state);
          state.finished = true;
          stream.emit('finish');
        } else
          prefinish(stream, state);
      }
      return need;
    }
    function endWritable(stream, state, cb) {
      state.ending = true;
      finishMaybe(stream, state);
      if (cb) {
        if (state.finished)
          process.nextTick(cb);
        else
          stream.once('finish', cb);
      }
      state.ended = true;
    }
  })($__require('3').Buffer, $__require('11'));
  return module.exports;
});

$__System.registerDynamic("56", ["5f", "60", "54", "55", "11"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    module.exports = Duplex;
    var objectKeys = Object.keys || function(obj) {
      var keys = [];
      for (var key in obj)
        keys.push(key);
      return keys;
    };
    var util = $__require('5f');
    util.inherits = $__require('60');
    var Readable = $__require('54');
    var Writable = $__require('55');
    util.inherits(Duplex, Readable);
    forEach(objectKeys(Writable.prototype), function(method) {
      if (!Duplex.prototype[method])
        Duplex.prototype[method] = Writable.prototype[method];
    });
    function Duplex(options) {
      if (!(this instanceof Duplex))
        return new Duplex(options);
      Readable.call(this, options);
      Writable.call(this, options);
      if (options && options.readable === false)
        this.readable = false;
      if (options && options.writable === false)
        this.writable = false;
      this.allowHalfOpen = true;
      if (options && options.allowHalfOpen === false)
        this.allowHalfOpen = false;
      this.once('end', onend);
    }
    function onend() {
      if (this.allowHalfOpen || this._writableState.ended)
        return;
      process.nextTick(this.end.bind(this));
    }
    function forEach(xs, f) {
      for (var i = 0,
          l = xs.length; i < l; i++) {
        f(xs[i], i);
      }
    }
  })($__require('11'));
  return module.exports;
});

$__System.registerDynamic("57", ["56", "5f", "60", "11"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    module.exports = Transform;
    var Duplex = $__require('56');
    var util = $__require('5f');
    util.inherits = $__require('60');
    util.inherits(Transform, Duplex);
    function TransformState(options, stream) {
      this.afterTransform = function(er, data) {
        return afterTransform(stream, er, data);
      };
      this.needTransform = false;
      this.transforming = false;
      this.writecb = null;
      this.writechunk = null;
    }
    function afterTransform(stream, er, data) {
      var ts = stream._transformState;
      ts.transforming = false;
      var cb = ts.writecb;
      if (!cb)
        return stream.emit('error', new Error('no writecb in Transform class'));
      ts.writechunk = null;
      ts.writecb = null;
      if (!util.isNullOrUndefined(data))
        stream.push(data);
      if (cb)
        cb(er);
      var rs = stream._readableState;
      rs.reading = false;
      if (rs.needReadable || rs.length < rs.highWaterMark) {
        stream._read(rs.highWaterMark);
      }
    }
    function Transform(options) {
      if (!(this instanceof Transform))
        return new Transform(options);
      Duplex.call(this, options);
      this._transformState = new TransformState(options, this);
      var stream = this;
      this._readableState.needReadable = true;
      this._readableState.sync = false;
      this.once('prefinish', function() {
        if (util.isFunction(this._flush))
          this._flush(function(er) {
            done(stream, er);
          });
        else
          done(stream);
      });
    }
    Transform.prototype.push = function(chunk, encoding) {
      this._transformState.needTransform = false;
      return Duplex.prototype.push.call(this, chunk, encoding);
    };
    Transform.prototype._transform = function(chunk, encoding, cb) {
      throw new Error('not implemented');
    };
    Transform.prototype._write = function(chunk, encoding, cb) {
      var ts = this._transformState;
      ts.writecb = cb;
      ts.writechunk = chunk;
      ts.writeencoding = encoding;
      if (!ts.transforming) {
        var rs = this._readableState;
        if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark)
          this._read(rs.highWaterMark);
      }
    };
    Transform.prototype._read = function(n) {
      var ts = this._transformState;
      if (!util.isNull(ts.writechunk) && ts.writecb && !ts.transforming) {
        ts.transforming = true;
        this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
      } else {
        ts.needTransform = true;
      }
    };
    function done(stream, er) {
      if (er)
        return stream.emit('error', er);
      var ws = stream._writableState;
      var ts = stream._transformState;
      if (ws.length)
        throw new Error('calling transform done when ws.length != 0');
      if (ts.transforming)
        throw new Error('calling transform done when still transforming');
      return stream.push(null);
    }
  })($__require('11'));
  return module.exports;
});

$__System.registerDynamic("58", ["57", "5f", "60"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = PassThrough;
  var Transform = $__require('57');
  var util = $__require('5f');
  util.inherits = $__require('60');
  util.inherits(PassThrough, Transform);
  function PassThrough(options) {
    if (!(this instanceof PassThrough))
      return new PassThrough(options);
    Transform.call(this, options);
  }
  PassThrough.prototype._transform = function(chunk, encoding, cb) {
    cb(null, chunk);
  };
  return module.exports;
});

$__System.registerDynamic("62", ["58"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('58');
  return module.exports;
});

$__System.registerDynamic("59", ["1a", "60", "51", "5a", "5b", "5c", "62"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = Stream;
  var EE = $__require('1a').EventEmitter;
  var inherits = $__require('60');
  inherits(Stream, EE);
  Stream.Readable = $__require('51');
  Stream.Writable = $__require('5a');
  Stream.Duplex = $__require('5b');
  Stream.Transform = $__require('5c');
  Stream.PassThrough = $__require('62');
  Stream.Stream = Stream;
  function Stream() {
    EE.call(this);
  }
  Stream.prototype.pipe = function(dest, options) {
    var source = this;
    function ondata(chunk) {
      if (dest.writable) {
        if (false === dest.write(chunk) && source.pause) {
          source.pause();
        }
      }
    }
    source.on('data', ondata);
    function ondrain() {
      if (source.readable && source.resume) {
        source.resume();
      }
    }
    dest.on('drain', ondrain);
    if (!dest._isStdio && (!options || options.end !== false)) {
      source.on('end', onend);
      source.on('close', onclose);
    }
    var didOnEnd = false;
    function onend() {
      if (didOnEnd)
        return;
      didOnEnd = true;
      dest.end();
    }
    function onclose() {
      if (didOnEnd)
        return;
      didOnEnd = true;
      if (typeof dest.destroy === 'function')
        dest.destroy();
    }
    function onerror(er) {
      cleanup();
      if (EE.listenerCount(this, 'error') === 0) {
        throw er;
      }
    }
    source.on('error', onerror);
    dest.on('error', onerror);
    function cleanup() {
      source.removeListener('data', ondata);
      dest.removeListener('drain', ondrain);
      source.removeListener('end', onend);
      source.removeListener('close', onclose);
      source.removeListener('error', onerror);
      dest.removeListener('error', onerror);
      source.removeListener('end', cleanup);
      source.removeListener('close', cleanup);
      dest.removeListener('close', cleanup);
    }
    source.on('end', cleanup);
    source.on('close', cleanup);
    dest.on('close', cleanup);
    dest.emit('pipe', source);
    return dest;
  };
  return module.exports;
});

$__System.registerDynamic("63", ["59"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('59');
  return module.exports;
});

$__System.registerDynamic("64", ["63"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__System._nodeRequire ? $__System._nodeRequire('stream') : $__require('63');
  return module.exports;
});

$__System.registerDynamic("c", ["64"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('64');
  return module.exports;
});

$__System.registerDynamic("65", ["53", "c"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var duplexer = $__require('53');
  var Stream = $__require('c');
  var slice = [].slice;
  var opts = {bubbleErrors: false};
  module.exports = pipe;
  function pipe() {
    if (arguments.length == 1)
      return arguments[0];
    var streams = slice.call(arguments);
    var cb;
    if ('function' == typeof streams[streams.length - 1]) {
      cb = streams.splice(-1)[0];
    }
    var first = streams[0];
    var last = streams[streams.length - 1];
    var ret;
    if (first.writable && last.readable)
      ret = duplexer(opts, first, last);
    else if (first.writable)
      ret = first;
    else if (last.readable)
      ret = last;
    else
      ret = new Stream;
    streams.forEach(function(stream, i) {
      var next = streams[i + 1];
      if (next)
        stream.pipe(next);
      if (stream != ret)
        stream.on('error', ret.emit.bind(ret, 'error'));
    });
    if (cb) {
      var ended = false;
      ret.on('error', end);
      last.on('finish', end);
      function end(err) {
        if (ended)
          return;
        ended = true;
        cb(err);
      }
    }
    return ret;
  }
  return module.exports;
});

$__System.registerDynamic("66", ["65"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('65');
  return module.exports;
});

$__System.registerDynamic("67", ["66"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var pipeline = $__require('66');
  module.exports = function() {
    var args = arguments;
    if (args.length === 1 && Array.isArray(args[0])) {
      args = args[0];
    }
    return function() {
      return pipeline.apply(pipeline, args);
    };
  };
  return module.exports;
});

$__System.registerDynamic("68", ["4c"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var through = $__require('4c');
  module.exports = function(fn) {
    var buf = [];
    var end = function(cb) {
      this.push(buf);
      cb();
      if (fn)
        fn(null, buf);
    };
    var push = function(data, enc, cb) {
      buf.push(data);
      cb();
    };
    return through.obj(push, end);
  };
  return module.exports;
});

$__System.registerDynamic("69", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(arr) {
    var rest = [].concat.apply([], [].slice.call(arguments, 1));
    return arr.filter(function(el) {
      return rest.indexOf(el) === -1;
    });
  };
  return module.exports;
});

$__System.registerDynamic("6a", ["69"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('69');
  return module.exports;
});

$__System.registerDynamic("6b", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  function uniqNoSet(arr) {
    var ret = [];
    for (var i = 0; i < arr.length; i++) {
      if (ret.indexOf(arr[i]) === -1) {
        ret.push(arr[i]);
      }
    }
    return ret;
  }
  function uniqSet(arr) {
    var seen = new Set();
    return arr.filter(function(el) {
      if (!seen.has(el)) {
        seen.add(el);
        return true;
      }
    });
  }
  function uniqSetWithForEach(arr) {
    var ret = [];
    (new Set(arr)).forEach(function(el) {
      ret.push(el);
    });
    return ret;
  }
  function doesForEachActuallyWork() {
    var ret = false;
    (new Set([true])).forEach(function(el) {
      ret = el;
    });
    return ret === true;
  }
  if ('Set' in global) {
    if (typeof Set.prototype.forEach === 'function' && doesForEachActuallyWork()) {
      module.exports = uniqSetWithForEach;
    } else {
      module.exports = uniqSet;
    }
  } else {
    module.exports = uniqNoSet;
  }
  return module.exports;
});

$__System.registerDynamic("6c", ["6b"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('6b');
  return module.exports;
});

$__System.registerDynamic("6d", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;
  module.exports = function(str) {
    if (typeof str !== 'string') {
      throw new TypeError('Expected a string');
    }
    return str.replace(matchOperatorsRe, '\\$&');
  };
  return module.exports;
});

$__System.registerDynamic("6e", ["6d"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('6d');
  return module.exports;
});

$__System.registerDynamic("6f", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 134, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 250, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 221],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [112, 128, 144],
    slategrey: [112, 128, 144],
    snow: [255, 250, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 50]
  };
  return module.exports;
});

$__System.registerDynamic("70", ["6f"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var cssKeywords = $__require('6f');
  var reverseKeywords = {};
  for (var key in cssKeywords) {
    if (cssKeywords.hasOwnProperty(key)) {
      reverseKeywords[cssKeywords[key].join()] = key;
    }
  }
  var convert = module.exports = {
    rgb: {},
    hsl: {},
    hsv: {},
    hwb: {},
    cmyk: {},
    xyz: {},
    lab: {},
    lch: {},
    hex: {},
    keyword: {},
    ansi16: {},
    ansi256: {}
  };
  convert.rgb.hsl = function(rgb) {
    var r = rgb[0] / 255;
    var g = rgb[1] / 255;
    var b = rgb[2] / 255;
    var min = Math.min(r, g, b);
    var max = Math.max(r, g, b);
    var delta = max - min;
    var h;
    var s;
    var l;
    if (max === min) {
      h = 0;
    } else if (r === max) {
      h = (g - b) / delta;
    } else if (g === max) {
      h = 2 + (b - r) / delta;
    } else if (b === max) {
      h = 4 + (r - g) / delta;
    }
    h = Math.min(h * 60, 360);
    if (h < 0) {
      h += 360;
    }
    l = (min + max) / 2;
    if (max === min) {
      s = 0;
    } else if (l <= 0.5) {
      s = delta / (max + min);
    } else {
      s = delta / (2 - max - min);
    }
    return [h, s * 100, l * 100];
  };
  convert.rgb.hsv = function(rgb) {
    var r = rgb[0];
    var g = rgb[1];
    var b = rgb[2];
    var min = Math.min(r, g, b);
    var max = Math.max(r, g, b);
    var delta = max - min;
    var h;
    var s;
    var v;
    if (max === 0) {
      s = 0;
    } else {
      s = (delta / max * 1000) / 10;
    }
    if (max === min) {
      h = 0;
    } else if (r === max) {
      h = (g - b) / delta;
    } else if (g === max) {
      h = 2 + (b - r) / delta;
    } else if (b === max) {
      h = 4 + (r - g) / delta;
    }
    h = Math.min(h * 60, 360);
    if (h < 0) {
      h += 360;
    }
    v = ((max / 255) * 1000) / 10;
    return [h, s, v];
  };
  convert.rgb.hwb = function(rgb) {
    var r = rgb[0];
    var g = rgb[1];
    var b = rgb[2];
    var h = convert.rgb.hsl(rgb)[0];
    var w = 1 / 255 * Math.min(r, Math.min(g, b));
    b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
    return [h, w * 100, b * 100];
  };
  convert.rgb.cmyk = function(rgb) {
    var r = rgb[0] / 255;
    var g = rgb[1] / 255;
    var b = rgb[2] / 255;
    var c;
    var m;
    var y;
    var k;
    k = Math.min(1 - r, 1 - g, 1 - b);
    c = (1 - r - k) / (1 - k) || 0;
    m = (1 - g - k) / (1 - k) || 0;
    y = (1 - b - k) / (1 - k) || 0;
    return [c * 100, m * 100, y * 100, k * 100];
  };
  convert.rgb.keyword = function(rgb) {
    return reverseKeywords[rgb.join()];
  };
  convert.keyword.rgb = function(keyword) {
    return cssKeywords[keyword];
  };
  convert.rgb.xyz = function(rgb) {
    var r = rgb[0] / 255;
    var g = rgb[1] / 255;
    var b = rgb[2] / 255;
    r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
    g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
    b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);
    var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
    var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
    var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);
    return [x * 100, y * 100, z * 100];
  };
  convert.rgb.lab = function(rgb) {
    var xyz = convert.rgb.xyz(rgb);
    var x = xyz[0];
    var y = xyz[1];
    var z = xyz[2];
    var l;
    var a;
    var b;
    x /= 95.047;
    y /= 100;
    z /= 108.883;
    x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
    y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
    z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);
    l = (116 * y) - 16;
    a = 500 * (x - y);
    b = 200 * (y - z);
    return [l, a, b];
  };
  convert.hsl.rgb = function(hsl) {
    var h = hsl[0] / 360;
    var s = hsl[1] / 100;
    var l = hsl[2] / 100;
    var t1;
    var t2;
    var t3;
    var rgb;
    var val;
    if (s === 0) {
      val = l * 255;
      return [val, val, val];
    }
    if (l < 0.5) {
      t2 = l * (1 + s);
    } else {
      t2 = l + s - l * s;
    }
    t1 = 2 * l - t2;
    rgb = [0, 0, 0];
    for (var i = 0; i < 3; i++) {
      t3 = h + 1 / 3 * -(i - 1);
      if (t3 < 0) {
        t3++;
      }
      if (t3 > 1) {
        t3--;
      }
      if (6 * t3 < 1) {
        val = t1 + (t2 - t1) * 6 * t3;
      } else if (2 * t3 < 1) {
        val = t2;
      } else if (3 * t3 < 2) {
        val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
      } else {
        val = t1;
      }
      rgb[i] = val * 255;
    }
    return rgb;
  };
  convert.hsl.hsv = function(hsl) {
    var h = hsl[0];
    var s = hsl[1] / 100;
    var l = hsl[2] / 100;
    var sv;
    var v;
    if (l === 0) {
      return [0, 0, 0];
    }
    l *= 2;
    s *= (l <= 1) ? l : 2 - l;
    v = (l + s) / 2;
    sv = (2 * s) / (l + s);
    return [h, sv * 100, v * 100];
  };
  convert.hsv.rgb = function(hsv) {
    var h = hsv[0] / 60;
    var s = hsv[1] / 100;
    var v = hsv[2] / 100;
    var hi = Math.floor(h) % 6;
    var f = h - Math.floor(h);
    var p = 255 * v * (1 - s);
    var q = 255 * v * (1 - (s * f));
    var t = 255 * v * (1 - (s * (1 - f)));
    v *= 255;
    switch (hi) {
      case 0:
        return [v, t, p];
      case 1:
        return [q, v, p];
      case 2:
        return [p, v, t];
      case 3:
        return [p, q, v];
      case 4:
        return [t, p, v];
      case 5:
        return [v, p, q];
    }
  };
  convert.hsv.hsl = function(hsv) {
    var h = hsv[0];
    var s = hsv[1] / 100;
    var v = hsv[2] / 100;
    var sl;
    var l;
    l = (2 - s) * v;
    sl = s * v;
    sl /= (l <= 1) ? l : 2 - l;
    sl = sl || 0;
    l /= 2;
    return [h, sl * 100, l * 100];
  };
  convert.hwb.rgb = function(hwb) {
    var h = hwb[0] / 360;
    var wh = hwb[1] / 100;
    var bl = hwb[2] / 100;
    var ratio = wh + bl;
    var i;
    var v;
    var f;
    var n;
    if (ratio > 1) {
      wh /= ratio;
      bl /= ratio;
    }
    i = Math.floor(6 * h);
    v = 1 - bl;
    f = 6 * h - i;
    if ((i & 0x01) !== 0) {
      f = 1 - f;
    }
    n = wh + f * (v - wh);
    var r;
    var g;
    var b;
    switch (i) {
      default:
      case 6:
      case 0:
        r = v;
        g = n;
        b = wh;
        break;
      case 1:
        r = n;
        g = v;
        b = wh;
        break;
      case 2:
        r = wh;
        g = v;
        b = n;
        break;
      case 3:
        r = wh;
        g = n;
        b = v;
        break;
      case 4:
        r = n;
        g = wh;
        b = v;
        break;
      case 5:
        r = v;
        g = wh;
        b = n;
        break;
    }
    return [r * 255, g * 255, b * 255];
  };
  convert.cmyk.rgb = function(cmyk) {
    var c = cmyk[0] / 100;
    var m = cmyk[1] / 100;
    var y = cmyk[2] / 100;
    var k = cmyk[3] / 100;
    var r;
    var g;
    var b;
    r = 1 - Math.min(1, c * (1 - k) + k);
    g = 1 - Math.min(1, m * (1 - k) + k);
    b = 1 - Math.min(1, y * (1 - k) + k);
    return [r * 255, g * 255, b * 255];
  };
  convert.xyz.rgb = function(xyz) {
    var x = xyz[0] / 100;
    var y = xyz[1] / 100;
    var z = xyz[2] / 100;
    var r;
    var g;
    var b;
    r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
    g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
    b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);
    r = r > 0.0031308 ? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055) : r *= 12.92;
    g = g > 0.0031308 ? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055) : g *= 12.92;
    b = b > 0.0031308 ? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055) : b *= 12.92;
    r = Math.min(Math.max(0, r), 1);
    g = Math.min(Math.max(0, g), 1);
    b = Math.min(Math.max(0, b), 1);
    return [r * 255, g * 255, b * 255];
  };
  convert.xyz.lab = function(xyz) {
    var x = xyz[0];
    var y = xyz[1];
    var z = xyz[2];
    var l;
    var a;
    var b;
    x /= 95.047;
    y /= 100;
    z /= 108.883;
    x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
    y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
    z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);
    l = (116 * y) - 16;
    a = 500 * (x - y);
    b = 200 * (y - z);
    return [l, a, b];
  };
  convert.lab.xyz = function(lab) {
    var l = lab[0];
    var a = lab[1];
    var b = lab[2];
    var x;
    var y;
    var z;
    var y2;
    if (l <= 8) {
      y = (l * 100) / 903.3;
      y2 = (7.787 * (y / 100)) + (16 / 116);
    } else {
      y = 100 * Math.pow((l + 16) / 116, 3);
      y2 = Math.pow(y / 100, 1 / 3);
    }
    x = x / 95.047 <= 0.008856 ? x = (95.047 * ((a / 500) + y2 - (16 / 116))) / 7.787 : 95.047 * Math.pow((a / 500) + y2, 3);
    z = z / 108.883 <= 0.008859 ? z = (108.883 * (y2 - (b / 200) - (16 / 116))) / 7.787 : 108.883 * Math.pow(y2 - (b / 200), 3);
    return [x, y, z];
  };
  convert.lab.lch = function(lab) {
    var l = lab[0];
    var a = lab[1];
    var b = lab[2];
    var hr;
    var h;
    var c;
    hr = Math.atan2(b, a);
    h = hr * 360 / 2 / Math.PI;
    if (h < 0) {
      h += 360;
    }
    c = Math.sqrt(a * a + b * b);
    return [l, c, h];
  };
  convert.lch.lab = function(lch) {
    var l = lch[0];
    var c = lch[1];
    var h = lch[2];
    var a;
    var b;
    var hr;
    hr = h / 360 * 2 * Math.PI;
    a = c * Math.cos(hr);
    b = c * Math.sin(hr);
    return [l, a, b];
  };
  convert.rgb.ansi16 = function(args) {
    var r = args[0];
    var g = args[1];
    var b = args[2];
    var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2];
    value = Math.round(value / 50);
    if (value === 0) {
      return 30;
    }
    var ansi = 30 + ((Math.round(b / 255) << 2) | (Math.round(g / 255) << 1) | Math.round(r / 255));
    if (value === 2) {
      ansi += 60;
    }
    return ansi;
  };
  convert.hsv.ansi16 = function(args) {
    return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
  };
  convert.rgb.ansi256 = function(args) {
    var r = args[0];
    var g = args[1];
    var b = args[2];
    if (r === g && g === b) {
      if (r < 8) {
        return 16;
      }
      if (r > 248) {
        return 231;
      }
      return Math.round(((r - 8) / 247) * 24) + 232;
    }
    var ansi = 16 + (36 * Math.round(r / 255 * 5)) + (6 * Math.round(g / 255 * 5)) + Math.round(b / 255 * 5);
    return ansi;
  };
  convert.ansi16.rgb = function(args) {
    var color = args % 10;
    if (color === 0 || color === 7) {
      if (args > 50) {
        color += 3.5;
      }
      color = color / 10.5 * 255;
      return [color, color, color];
    }
    var mult = (~~(args > 50) + 1) * 0.5;
    var r = ((color & 1) * mult) * 255;
    var g = (((color >> 1) & 1) * mult) * 255;
    var b = (((color >> 2) & 1) * mult) * 255;
    return [r, g, b];
  };
  convert.ansi256.rgb = function(args) {
    if (args >= 232) {
      var c = (args - 232) * 10 + 8;
      return [c, c, c];
    }
    args -= 16;
    var rem;
    var r = Math.floor(args / 36) / 5 * 255;
    var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
    var b = (rem % 6) / 5 * 255;
    return [r, g, b];
  };
  convert.rgb.hex = function(args) {
    var integer = ((Math.round(args[0]) & 0xFF) << 16) + ((Math.round(args[1]) & 0xFF) << 8) + (Math.round(args[2]) & 0xFF);
    var string = integer.toString(16).toUpperCase();
    return '000000'.substring(string.length) + string;
  };
  convert.hex.rgb = function(args) {
    var match = args.toString(16).match(/[a-f0-9]{6}/i);
    if (!match) {
      return [0, 0, 0];
    }
    var integer = parseInt(match[0], 16);
    var r = (integer >> 16) & 0xFF;
    var g = (integer >> 8) & 0xFF;
    var b = integer & 0xFF;
    return [r, g, b];
  };
  return module.exports;
});

$__System.registerDynamic("71", ["70"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var conversions = $__require('70');
  var models = Object.keys(conversions);
  function buildGraph() {
    var graph = {};
    for (var len = models.length,
        i = 0; i < len; i++) {
      graph[models[i]] = {
        distance: -1,
        parent: null
      };
    }
    return graph;
  }
  function deriveBFS(fromModel) {
    var graph = buildGraph();
    var queue = [fromModel];
    graph[fromModel].distance = 0;
    while (queue.length) {
      var current = queue.pop();
      var adjacents = Object.keys(conversions[current]);
      for (var len = adjacents.length,
          i = 0; i < len; i++) {
        var adjacent = adjacents[i];
        var node = graph[adjacent];
        if (node.distance === -1) {
          node.distance = graph[current].distance + 1;
          node.parent = current;
          queue.unshift(adjacent);
        }
      }
    }
    return graph;
  }
  function link(from, to) {
    return function(args) {
      return to(from(args));
    };
  }
  function wrapConversion(toModel, graph) {
    var path = [graph[toModel].parent, toModel];
    var fn = conversions[graph[toModel].parent][toModel];
    var cur = graph[toModel].parent;
    while (graph[cur].parent) {
      path.unshift(graph[cur].parent);
      fn = link(conversions[graph[cur].parent][cur], fn);
      cur = graph[cur].parent;
    }
    fn.conversion = path;
    return fn;
  }
  module.exports = function(fromModel) {
    var graph = deriveBFS(fromModel);
    var conversion = {};
    var models = Object.keys(graph);
    for (var len = models.length,
        i = 0; i < len; i++) {
      var toModel = models[i];
      var node = graph[toModel];
      if (node.parent === null) {
        continue;
      }
      conversion[toModel] = wrapConversion(toModel, graph);
    }
    return conversion;
  };
  return module.exports;
});

$__System.registerDynamic("72", ["70", "71"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var conversions = $__require('70');
  var route = $__require('71');
  var convert = {};
  var models = Object.keys(conversions);
  function wrapRaw(fn) {
    var wrappedFn = function(args) {
      if (args === undefined || args === null) {
        return args;
      }
      if (arguments.length > 1) {
        args = Array.prototype.slice.call(arguments);
      }
      return fn(args);
    };
    if ('conversion' in fn) {
      wrappedFn.conversion = fn.conversion;
    }
    return wrappedFn;
  }
  function wrapRounded(fn) {
    var wrappedFn = function(args) {
      if (args === undefined || args === null) {
        return args;
      }
      if (arguments.length > 1) {
        args = Array.prototype.slice.call(arguments);
      }
      var result = fn(args);
      if (typeof result === 'object') {
        for (var len = result.length,
            i = 0; i < len; i++) {
          result[i] = Math.round(result[i]);
        }
      }
      return result;
    };
    if ('conversion' in fn) {
      wrappedFn.conversion = fn.conversion;
    }
    return wrappedFn;
  }
  models.forEach(function(fromModel) {
    convert[fromModel] = {};
    var routes = route(fromModel);
    var routeModels = Object.keys(routes);
    routeModels.forEach(function(toModel) {
      var fn = routes[toModel];
      convert[fromModel][toModel] = wrapRounded(fn);
      convert[fromModel][toModel].raw = wrapRaw(fn);
    });
  });
  module.exports = convert;
  return module.exports;
});

$__System.registerDynamic("73", ["72"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('72');
  return module.exports;
});

$__System.registerDynamic("74", ["73"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var colorConvert = $__require('73');
  function wrapAnsi16(fn, offset) {
    return function() {
      var code = fn.apply(colorConvert, arguments);
      return '\u001b[' + (code + offset) + 'm';
    };
  }
  function wrapAnsi256(fn, offset) {
    return function() {
      var code = fn.apply(colorConvert, arguments);
      return '\u001b[' + (38 + offset) + ';5;' + code + 'm';
    };
  }
  function wrapAnsi16m(fn, offset) {
    return function() {
      var rgb = fn.apply(colorConvert, arguments);
      return '\u001b[' + (38 + offset) + ';2;' + rgb[0] + ';' + rgb[1] + ';' + rgb[2] + 'm';
    };
  }
  function assembleStyles() {
    var styles = {
      modifier: {
        reset: [0, 0],
        bold: [1, 22],
        dim: [2, 22],
        italic: [3, 23],
        underline: [4, 24],
        inverse: [7, 27],
        hidden: [8, 28],
        strikethrough: [9, 29]
      },
      color: {
        black: [30, 39],
        red: [31, 39],
        green: [32, 39],
        yellow: [33, 39],
        blue: [34, 39],
        magenta: [35, 39],
        cyan: [36, 39],
        white: [37, 39],
        gray: [90, 39]
      },
      bgColor: {
        bgBlack: [40, 49],
        bgRed: [41, 49],
        bgGreen: [42, 49],
        bgYellow: [43, 49],
        bgBlue: [44, 49],
        bgMagenta: [45, 49],
        bgCyan: [46, 49],
        bgWhite: [47, 49]
      }
    };
    styles.color.grey = styles.color.gray;
    Object.keys(styles).forEach(function(groupName) {
      var group = styles[groupName];
      Object.keys(group).forEach(function(styleName) {
        var style = group[styleName];
        styles[styleName] = group[styleName] = {
          open: '\u001b[' + style[0] + 'm',
          close: '\u001b[' + style[1] + 'm'
        };
      });
      Object.defineProperty(styles, groupName, {
        value: group,
        enumerable: false
      });
    });
    function rgb2rgb(r, g, b) {
      return [r, g, b];
    }
    styles.color.close = '\u001b[39m';
    styles.bgColor.close = '\u001b[49m';
    styles.color.ansi = {};
    styles.color.ansi256 = {};
    styles.color.ansi16m = {rgb: wrapAnsi16m(rgb2rgb, 0)};
    styles.bgColor.ansi = {};
    styles.bgColor.ansi256 = {};
    styles.bgColor.ansi16m = {rgb: wrapAnsi16m(rgb2rgb, 10)};
    for (var key in colorConvert) {
      if (!colorConvert.hasOwnProperty(key) || typeof colorConvert[key] !== 'object') {
        continue;
      }
      var suite = colorConvert[key];
      if ('ansi16' in suite) {
        styles.color.ansi[key] = wrapAnsi16(suite.ansi16, 0);
        styles.bgColor.ansi[key] = wrapAnsi16(suite.ansi16, 10);
      }
      if ('ansi256' in suite) {
        styles.color.ansi256[key] = wrapAnsi256(suite.ansi256, 0);
        styles.bgColor.ansi256[key] = wrapAnsi256(suite.ansi256, 10);
      }
      if ('rgb' in suite) {
        styles.color.ansi16m[key] = wrapAnsi16m(suite.rgb, 0);
        styles.bgColor.ansi16m[key] = wrapAnsi16m(suite.rgb, 10);
      }
    }
    return styles;
  }
  Object.defineProperty(module, 'exports', {
    enumerable: true,
    get: assembleStyles
  });
  return module.exports;
});

$__System.registerDynamic("75", ["74"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('74');
  return module.exports;
});

$__System.registerDynamic("76", ["77"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ansiRegex = $__require('77')();
  module.exports = function(str) {
    return typeof str === 'string' ? str.replace(ansiRegex, '') : str;
  };
  return module.exports;
});

$__System.registerDynamic("78", ["76"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('76');
  return module.exports;
});

$__System.registerDynamic("79", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function() {
    return /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g;
  };
  return module.exports;
});

$__System.registerDynamic("77", ["79"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('79');
  return module.exports;
});

$__System.registerDynamic("7a", ["77"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ansiRegex = $__require('77');
  var re = new RegExp(ansiRegex().source);
  module.exports = re.test.bind(re);
  return module.exports;
});

$__System.registerDynamic("7b", ["7a"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('7a');
  return module.exports;
});

$__System.registerDynamic("7c", ["11"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var argv = process.argv;
    var terminator = argv.indexOf('--');
    var hasFlag = function(flag) {
      flag = '--' + flag;
      var pos = argv.indexOf(flag);
      return pos !== -1 && (terminator !== -1 ? pos < terminator : true);
    };
    module.exports = (function() {
      if ('FORCE_COLOR' in process.env) {
        return true;
      }
      if (hasFlag('no-color') || hasFlag('no-colors') || hasFlag('color=false')) {
        return false;
      }
      if (hasFlag('color') || hasFlag('colors') || hasFlag('color=true') || hasFlag('color=always')) {
        return true;
      }
      if (process.stdout && !process.stdout.isTTY) {
        return false;
      }
      if (process.platform === 'win32') {
        return true;
      }
      if ('COLORTERM' in process.env) {
        return true;
      }
      if (process.env.TERM === 'dumb') {
        return false;
      }
      if (/^screen|^xterm|^vt100|color|ansi|cygwin|linux/i.test(process.env.TERM)) {
        return true;
      }
      return false;
    })();
  })($__require('11'));
  return module.exports;
});

$__System.registerDynamic("7d", ["7c"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('7c');
  return module.exports;
});

$__System.registerDynamic("7e", ["6e", "75", "78", "7b", "7d", "11"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var escapeStringRegexp = $__require('6e');
    var ansiStyles = $__require('75');
    var stripAnsi = $__require('78');
    var hasAnsi = $__require('7b');
    var supportsColor = $__require('7d');
    var defineProps = Object.defineProperties;
    var isSimpleWindowsTerm = process.platform === 'win32' && !/^xterm/i.test(process.env.TERM);
    function Chalk(options) {
      this.enabled = !options || options.enabled === undefined ? supportsColor : options.enabled;
    }
    if (isSimpleWindowsTerm) {
      ansiStyles.blue.open = '\u001b[94m';
    }
    var styles = (function() {
      var ret = {};
      Object.keys(ansiStyles).forEach(function(key) {
        ansiStyles[key].closeRe = new RegExp(escapeStringRegexp(ansiStyles[key].close), 'g');
        ret[key] = {get: function() {
            return build.call(this, this._styles.concat(key));
          }};
      });
      return ret;
    })();
    var proto = defineProps(function chalk() {}, styles);
    function build(_styles) {
      var builder = function() {
        return applyStyle.apply(builder, arguments);
      };
      builder._styles = _styles;
      builder.enabled = this.enabled;
      builder.__proto__ = proto;
      return builder;
    }
    function applyStyle() {
      var args = arguments;
      var argsLen = args.length;
      var str = argsLen !== 0 && String(arguments[0]);
      if (argsLen > 1) {
        for (var a = 1; a < argsLen; a++) {
          str += ' ' + args[a];
        }
      }
      if (!this.enabled || !str) {
        return str;
      }
      var nestedStyles = this._styles;
      var i = nestedStyles.length;
      var originalDim = ansiStyles.dim.open;
      if (isSimpleWindowsTerm && (nestedStyles.indexOf('gray') !== -1 || nestedStyles.indexOf('grey') !== -1)) {
        ansiStyles.dim.open = '';
      }
      while (i--) {
        var code = ansiStyles[nestedStyles[i]];
        str = code.open + str.replace(code.closeRe, code.open) + code.close;
      }
      ansiStyles.dim.open = originalDim;
      return str;
    }
    function init() {
      var ret = {};
      Object.keys(styles).forEach(function(name) {
        ret[name] = {get: function() {
            return build.call(this, [name]);
          }};
      });
      return ret;
    }
    defineProps(Chalk.prototype, init());
    module.exports = new Chalk();
    module.exports.styles = ansiStyles;
    module.exports.hasColor = hasAnsi;
    module.exports.stripColor = stripAnsi;
    module.exports.supportsColor = supportsColor;
  })($__require('11'));
  return module.exports;
});

$__System.registerDynamic("23", ["7e"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('7e');
  return module.exports;
});

$__System.registerDynamic("7f", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;
  function ToObject(val) {
    if (val == null) {
      throw new TypeError('Object.assign cannot be called with null or undefined');
    }
    return Object(val);
  }
  function ownEnumerableKeys(obj) {
    var keys = Object.getOwnPropertyNames(obj);
    if (Object.getOwnPropertySymbols) {
      keys = keys.concat(Object.getOwnPropertySymbols(obj));
    }
    return keys.filter(function(key) {
      return propIsEnumerable.call(obj, key);
    });
  }
  module.exports = Object.assign || function(target, source) {
    var from;
    var keys;
    var to = ToObject(target);
    for (var s = 1; s < arguments.length; s++) {
      from = arguments[s];
      keys = ownEnumerableKeys(Object(from));
      for (var i = 0; i < keys.length; i++) {
        to[keys[i]] = from[keys[i]];
      }
    }
    return to;
  };
  return module.exports;
});

$__System.registerDynamic("80", ["7f"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('7f');
  return module.exports;
});

$__System.registerDynamic("81", ["1c", "6a", "6c", "23", "80"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var util = $__require('1c');
  var arrayDiffer = $__require('6a');
  var arrayUniq = $__require('6c');
  var chalk = $__require('23');
  var objectAssign = $__require('80');
  var nonEnumberableProperties = ['name', 'message', 'stack'];
  var propertiesNotToDisplay = nonEnumberableProperties.concat(['plugin', 'showStack', 'showProperties', '__safety', '_stack']);
  var parseOptions = function(plugin, message, opt) {
    opt = opt || {};
    if (typeof plugin === 'object') {
      opt = plugin;
    } else {
      if (message instanceof Error) {
        opt.error = message;
      } else if (typeof message === 'object') {
        opt = message;
      } else {
        opt.message = message;
      }
      opt.plugin = plugin;
    }
    return objectAssign({
      showStack: false,
      showProperties: true
    }, opt);
  };
  function PluginError(plugin, message, opt) {
    if (!(this instanceof PluginError))
      throw new Error('Call PluginError using new');
    Error.call(this);
    var options = parseOptions(plugin, message, opt);
    var self = this;
    if (options.error) {
      arrayUniq(Object.keys(options.error).concat(nonEnumberableProperties)).forEach(function(prop) {
        self[prop] = options.error[prop];
      });
    }
    var properties = ['name', 'message', 'fileName', 'lineNumber', 'stack', 'showStack', 'showProperties', 'plugin'];
    properties.forEach(function(prop) {
      if (prop in options)
        this[prop] = options[prop];
    }, this);
    if (!this.name)
      this.name = 'Error';
    if (!this.stack) {
      var safety = {toString: function() {
          return this._messageWithDetails() + '\nStack:';
        }.bind(this)};
      Error.captureStackTrace(safety, arguments.callee || this.constructor);
      this.__safety = safety;
    }
    if (!this.plugin)
      throw new Error('Missing plugin name');
    if (!this.message)
      throw new Error('Missing error message');
  }
  util.inherits(PluginError, Error);
  PluginError.prototype._messageWithDetails = function() {
    var messageWithDetails = 'Message:\n    ' + this.message;
    var details = this._messageDetails();
    if (details !== '') {
      messageWithDetails += '\n' + details;
    }
    return messageWithDetails;
  };
  PluginError.prototype._messageDetails = function() {
    if (!this.showProperties) {
      return '';
    }
    var properties = arrayDiffer(Object.keys(this), propertiesNotToDisplay);
    if (properties.length === 0) {
      return '';
    }
    var self = this;
    properties = properties.map(function stringifyProperty(prop) {
      return '    ' + prop + ': ' + self[prop];
    });
    return 'Details:\n' + properties.join('\n');
  };
  PluginError.prototype.toString = function() {
    var sig = chalk.red(this.name) + ' in plugin \'' + chalk.cyan(this.plugin) + '\'';
    var detailsWithStack = function(stack) {
      return this._messageWithDetails() + '\nStack:\n' + stack;
    }.bind(this);
    var msg;
    if (this.showStack) {
      if (this.__safety) {
        msg = this.__safety.stack;
      } else if (this._stack) {
        msg = detailsWithStack(this._stack);
      } else {
        msg = detailsWithStack(this.stack);
      }
    } else {
      msg = this._messageWithDetails();
    }
    return sig + '\n' + msg;
  };
  module.exports = PluginError;
  return module.exports;
});

$__System.registerDynamic("82", ["12", "10", "23", "15", "25", "46", "47", "4a", "4b", "4d", "4e", "4f", "67", "68", "81"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    File: $__require('12'),
    replaceExtension: $__require('10'),
    colors: $__require('23'),
    date: $__require('15'),
    log: $__require('25'),
    template: $__require('46'),
    env: $__require('47'),
    beep: $__require('4a'),
    noop: $__require('4b'),
    isStream: $__require('4d'),
    isBuffer: $__require('4e'),
    isNull: $__require('4f'),
    linefeed: '\n',
    combine: $__require('67'),
    buffer: $__require('68'),
    PluginError: $__require('81')
  };
  return module.exports;
});

$__System.registerDynamic("83", ["82"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('82');
  return module.exports;
});

$__System.registerDynamic("84", ["3"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(Buffer) {
    var Buffer = $__require('3').Buffer;
    var isBufferEncoding = Buffer.isEncoding || function(encoding) {
      switch (encoding && encoding.toLowerCase()) {
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
        case 'raw':
          return true;
        default:
          return false;
      }
    };
    function assertEncoding(encoding) {
      if (encoding && !isBufferEncoding(encoding)) {
        throw new Error('Unknown encoding: ' + encoding);
      }
    }
    var StringDecoder = exports.StringDecoder = function(encoding) {
      this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
      assertEncoding(encoding);
      switch (this.encoding) {
        case 'utf8':
          this.surrogateSize = 3;
          break;
        case 'ucs2':
        case 'utf16le':
          this.surrogateSize = 2;
          this.detectIncompleteChar = utf16DetectIncompleteChar;
          break;
        case 'base64':
          this.surrogateSize = 3;
          this.detectIncompleteChar = base64DetectIncompleteChar;
          break;
        default:
          this.write = passThroughWrite;
          return;
      }
      this.charBuffer = new Buffer(6);
      this.charReceived = 0;
      this.charLength = 0;
    };
    StringDecoder.prototype.write = function(buffer) {
      var charStr = '';
      while (this.charLength) {
        var available = (buffer.length >= this.charLength - this.charReceived) ? this.charLength - this.charReceived : buffer.length;
        buffer.copy(this.charBuffer, this.charReceived, 0, available);
        this.charReceived += available;
        if (this.charReceived < this.charLength) {
          return '';
        }
        buffer = buffer.slice(available, buffer.length);
        charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);
        var charCode = charStr.charCodeAt(charStr.length - 1);
        if (charCode >= 0xD800 && charCode <= 0xDBFF) {
          this.charLength += this.surrogateSize;
          charStr = '';
          continue;
        }
        this.charReceived = this.charLength = 0;
        if (buffer.length === 0) {
          return charStr;
        }
        break;
      }
      this.detectIncompleteChar(buffer);
      var end = buffer.length;
      if (this.charLength) {
        buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
        end -= this.charReceived;
      }
      charStr += buffer.toString(this.encoding, 0, end);
      var end = charStr.length - 1;
      var charCode = charStr.charCodeAt(end);
      if (charCode >= 0xD800 && charCode <= 0xDBFF) {
        var size = this.surrogateSize;
        this.charLength += size;
        this.charReceived += size;
        this.charBuffer.copy(this.charBuffer, size, 0, size);
        buffer.copy(this.charBuffer, 0, 0, size);
        return charStr.substring(0, end);
      }
      return charStr;
    };
    StringDecoder.prototype.detectIncompleteChar = function(buffer) {
      var i = (buffer.length >= 3) ? 3 : buffer.length;
      for (; i > 0; i--) {
        var c = buffer[buffer.length - i];
        if (i == 1 && c >> 5 == 0x06) {
          this.charLength = 2;
          break;
        }
        if (i <= 2 && c >> 4 == 0x0E) {
          this.charLength = 3;
          break;
        }
        if (i <= 3 && c >> 3 == 0x1E) {
          this.charLength = 4;
          break;
        }
      }
      this.charReceived = i;
    };
    StringDecoder.prototype.end = function(buffer) {
      var res = '';
      if (buffer && buffer.length)
        res = this.write(buffer);
      if (this.charReceived) {
        var cr = this.charReceived;
        var buf = this.charBuffer;
        var enc = this.encoding;
        res += buf.slice(0, cr).toString(enc);
      }
      return res;
    };
    function passThroughWrite(buffer) {
      return buffer.toString(this.encoding);
    }
    function utf16DetectIncompleteChar(buffer) {
      this.charReceived = buffer.length % 2;
      this.charLength = this.charReceived ? 2 : 0;
    }
    function base64DetectIncompleteChar(buffer) {
      this.charReceived = buffer.length % 3;
      this.charLength = this.charReceived ? 3 : 0;
    }
  })($__require('3').Buffer);
  return module.exports;
});

$__System.registerDynamic("61", ["84"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('84');
  return module.exports;
});

$__System.registerDynamic("85", ["88", "87", "3", "1a", "5f", "60", "@empty", "86", "61", "11"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(Buffer, process) {
    'use strict';
    module.exports = Readable;
    var processNextTick = $__require('88');
    var isArray = $__require('87');
    var Buffer = $__require('3').Buffer;
    Readable.ReadableState = ReadableState;
    var EE = $__require('1a');
    var EElistenerCount = function(emitter, type) {
      return emitter.listeners(type).length;
    };
    var Stream;
    (function() {
      try {
        Stream = $__require('st' + 'ream');
      } catch (_) {} finally {
        if (!Stream)
          Stream = $__require('1a').EventEmitter;
      }
    })();
    var Buffer = $__require('3').Buffer;
    var util = $__require('5f');
    util.inherits = $__require('60');
    var debugUtil = $__require('@empty');
    var debug = undefined;
    if (debugUtil && debugUtil.debuglog) {
      debug = debugUtil.debuglog('stream');
    } else {
      debug = function() {};
    }
    var StringDecoder;
    util.inherits(Readable, Stream);
    var Duplex;
    function ReadableState(options, stream) {
      Duplex = Duplex || $__require('86');
      options = options || {};
      this.objectMode = !!options.objectMode;
      if (stream instanceof Duplex)
        this.objectMode = this.objectMode || !!options.readableObjectMode;
      var hwm = options.highWaterMark;
      var defaultHwm = this.objectMode ? 16 : 16 * 1024;
      this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;
      this.highWaterMark = ~~this.highWaterMark;
      this.buffer = [];
      this.length = 0;
      this.pipes = null;
      this.pipesCount = 0;
      this.flowing = null;
      this.ended = false;
      this.endEmitted = false;
      this.reading = false;
      this.sync = true;
      this.needReadable = false;
      this.emittedReadable = false;
      this.readableListening = false;
      this.resumeScheduled = false;
      this.defaultEncoding = options.defaultEncoding || 'utf8';
      this.ranOut = false;
      this.awaitDrain = 0;
      this.readingMore = false;
      this.decoder = null;
      this.encoding = null;
      if (options.encoding) {
        if (!StringDecoder)
          StringDecoder = $__require('61').StringDecoder;
        this.decoder = new StringDecoder(options.encoding);
        this.encoding = options.encoding;
      }
    }
    var Duplex;
    function Readable(options) {
      Duplex = Duplex || $__require('86');
      if (!(this instanceof Readable))
        return new Readable(options);
      this._readableState = new ReadableState(options, this);
      this.readable = true;
      if (options && typeof options.read === 'function')
        this._read = options.read;
      Stream.call(this);
    }
    Readable.prototype.push = function(chunk, encoding) {
      var state = this._readableState;
      if (!state.objectMode && typeof chunk === 'string') {
        encoding = encoding || state.defaultEncoding;
        if (encoding !== state.encoding) {
          chunk = new Buffer(chunk, encoding);
          encoding = '';
        }
      }
      return readableAddChunk(this, state, chunk, encoding, false);
    };
    Readable.prototype.unshift = function(chunk) {
      var state = this._readableState;
      return readableAddChunk(this, state, chunk, '', true);
    };
    Readable.prototype.isPaused = function() {
      return this._readableState.flowing === false;
    };
    function readableAddChunk(stream, state, chunk, encoding, addToFront) {
      var er = chunkInvalid(state, chunk);
      if (er) {
        stream.emit('error', er);
      } else if (chunk === null) {
        state.reading = false;
        onEofChunk(stream, state);
      } else if (state.objectMode || chunk && chunk.length > 0) {
        if (state.ended && !addToFront) {
          var e = new Error('stream.push() after EOF');
          stream.emit('error', e);
        } else if (state.endEmitted && addToFront) {
          var e = new Error('stream.unshift() after end event');
          stream.emit('error', e);
        } else {
          var skipAdd;
          if (state.decoder && !addToFront && !encoding) {
            chunk = state.decoder.write(chunk);
            skipAdd = !state.objectMode && chunk.length === 0;
          }
          if (!addToFront)
            state.reading = false;
          if (!skipAdd) {
            if (state.flowing && state.length === 0 && !state.sync) {
              stream.emit('data', chunk);
              stream.read(0);
            } else {
              state.length += state.objectMode ? 1 : chunk.length;
              if (addToFront)
                state.buffer.unshift(chunk);
              else
                state.buffer.push(chunk);
              if (state.needReadable)
                emitReadable(stream);
            }
          }
          maybeReadMore(stream, state);
        }
      } else if (!addToFront) {
        state.reading = false;
      }
      return needMoreData(state);
    }
    function needMoreData(state) {
      return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
    }
    Readable.prototype.setEncoding = function(enc) {
      if (!StringDecoder)
        StringDecoder = $__require('61').StringDecoder;
      this._readableState.decoder = new StringDecoder(enc);
      this._readableState.encoding = enc;
      return this;
    };
    var MAX_HWM = 0x800000;
    function computeNewHighWaterMark(n) {
      if (n >= MAX_HWM) {
        n = MAX_HWM;
      } else {
        n--;
        n |= n >>> 1;
        n |= n >>> 2;
        n |= n >>> 4;
        n |= n >>> 8;
        n |= n >>> 16;
        n++;
      }
      return n;
    }
    function howMuchToRead(n, state) {
      if (state.length === 0 && state.ended)
        return 0;
      if (state.objectMode)
        return n === 0 ? 0 : 1;
      if (n === null || isNaN(n)) {
        if (state.flowing && state.buffer.length)
          return state.buffer[0].length;
        else
          return state.length;
      }
      if (n <= 0)
        return 0;
      if (n > state.highWaterMark)
        state.highWaterMark = computeNewHighWaterMark(n);
      if (n > state.length) {
        if (!state.ended) {
          state.needReadable = true;
          return 0;
        } else {
          return state.length;
        }
      }
      return n;
    }
    Readable.prototype.read = function(n) {
      debug('read', n);
      var state = this._readableState;
      var nOrig = n;
      if (typeof n !== 'number' || n > 0)
        state.emittedReadable = false;
      if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
        debug('read: emitReadable', state.length, state.ended);
        if (state.length === 0 && state.ended)
          endReadable(this);
        else
          emitReadable(this);
        return null;
      }
      n = howMuchToRead(n, state);
      if (n === 0 && state.ended) {
        if (state.length === 0)
          endReadable(this);
        return null;
      }
      var doRead = state.needReadable;
      debug('need readable', doRead);
      if (state.length === 0 || state.length - n < state.highWaterMark) {
        doRead = true;
        debug('length less than watermark', doRead);
      }
      if (state.ended || state.reading) {
        doRead = false;
        debug('reading or ended', doRead);
      }
      if (doRead) {
        debug('do read');
        state.reading = true;
        state.sync = true;
        if (state.length === 0)
          state.needReadable = true;
        this._read(state.highWaterMark);
        state.sync = false;
      }
      if (doRead && !state.reading)
        n = howMuchToRead(nOrig, state);
      var ret;
      if (n > 0)
        ret = fromList(n, state);
      else
        ret = null;
      if (ret === null) {
        state.needReadable = true;
        n = 0;
      }
      state.length -= n;
      if (state.length === 0 && !state.ended)
        state.needReadable = true;
      if (nOrig !== n && state.ended && state.length === 0)
        endReadable(this);
      if (ret !== null)
        this.emit('data', ret);
      return ret;
    };
    function chunkInvalid(state, chunk) {
      var er = null;
      if (!Buffer.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== null && chunk !== undefined && !state.objectMode) {
        er = new TypeError('Invalid non-string/buffer chunk');
      }
      return er;
    }
    function onEofChunk(stream, state) {
      if (state.ended)
        return;
      if (state.decoder) {
        var chunk = state.decoder.end();
        if (chunk && chunk.length) {
          state.buffer.push(chunk);
          state.length += state.objectMode ? 1 : chunk.length;
        }
      }
      state.ended = true;
      emitReadable(stream);
    }
    function emitReadable(stream) {
      var state = stream._readableState;
      state.needReadable = false;
      if (!state.emittedReadable) {
        debug('emitReadable', state.flowing);
        state.emittedReadable = true;
        if (state.sync)
          processNextTick(emitReadable_, stream);
        else
          emitReadable_(stream);
      }
    }
    function emitReadable_(stream) {
      debug('emit readable');
      stream.emit('readable');
      flow(stream);
    }
    function maybeReadMore(stream, state) {
      if (!state.readingMore) {
        state.readingMore = true;
        processNextTick(maybeReadMore_, stream, state);
      }
    }
    function maybeReadMore_(stream, state) {
      var len = state.length;
      while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
        debug('maybeReadMore read 0');
        stream.read(0);
        if (len === state.length)
          break;
        else
          len = state.length;
      }
      state.readingMore = false;
    }
    Readable.prototype._read = function(n) {
      this.emit('error', new Error('not implemented'));
    };
    Readable.prototype.pipe = function(dest, pipeOpts) {
      var src = this;
      var state = this._readableState;
      switch (state.pipesCount) {
        case 0:
          state.pipes = dest;
          break;
        case 1:
          state.pipes = [state.pipes, dest];
          break;
        default:
          state.pipes.push(dest);
          break;
      }
      state.pipesCount += 1;
      debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);
      var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
      var endFn = doEnd ? onend : cleanup;
      if (state.endEmitted)
        processNextTick(endFn);
      else
        src.once('end', endFn);
      dest.on('unpipe', onunpipe);
      function onunpipe(readable) {
        debug('onunpipe');
        if (readable === src) {
          cleanup();
        }
      }
      function onend() {
        debug('onend');
        dest.end();
      }
      var ondrain = pipeOnDrain(src);
      dest.on('drain', ondrain);
      var cleanedUp = false;
      function cleanup() {
        debug('cleanup');
        dest.removeListener('close', onclose);
        dest.removeListener('finish', onfinish);
        dest.removeListener('drain', ondrain);
        dest.removeListener('error', onerror);
        dest.removeListener('unpipe', onunpipe);
        src.removeListener('end', onend);
        src.removeListener('end', cleanup);
        src.removeListener('data', ondata);
        cleanedUp = true;
        if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain))
          ondrain();
      }
      src.on('data', ondata);
      function ondata(chunk) {
        debug('ondata');
        var ret = dest.write(chunk);
        if (false === ret) {
          if (state.pipesCount === 1 && state.pipes[0] === dest && src.listenerCount('data') === 1 && !cleanedUp) {
            debug('false write response, pause', src._readableState.awaitDrain);
            src._readableState.awaitDrain++;
          }
          src.pause();
        }
      }
      function onerror(er) {
        debug('onerror', er);
        unpipe();
        dest.removeListener('error', onerror);
        if (EElistenerCount(dest, 'error') === 0)
          dest.emit('error', er);
      }
      if (!dest._events || !dest._events.error)
        dest.on('error', onerror);
      else if (isArray(dest._events.error))
        dest._events.error.unshift(onerror);
      else
        dest._events.error = [onerror, dest._events.error];
      function onclose() {
        dest.removeListener('finish', onfinish);
        unpipe();
      }
      dest.once('close', onclose);
      function onfinish() {
        debug('onfinish');
        dest.removeListener('close', onclose);
        unpipe();
      }
      dest.once('finish', onfinish);
      function unpipe() {
        debug('unpipe');
        src.unpipe(dest);
      }
      dest.emit('pipe', src);
      if (!state.flowing) {
        debug('pipe resume');
        src.resume();
      }
      return dest;
    };
    function pipeOnDrain(src) {
      return function() {
        var state = src._readableState;
        debug('pipeOnDrain', state.awaitDrain);
        if (state.awaitDrain)
          state.awaitDrain--;
        if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
          state.flowing = true;
          flow(src);
        }
      };
    }
    Readable.prototype.unpipe = function(dest) {
      var state = this._readableState;
      if (state.pipesCount === 0)
        return this;
      if (state.pipesCount === 1) {
        if (dest && dest !== state.pipes)
          return this;
        if (!dest)
          dest = state.pipes;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        if (dest)
          dest.emit('unpipe', this);
        return this;
      }
      if (!dest) {
        var dests = state.pipes;
        var len = state.pipesCount;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        for (var _i = 0; _i < len; _i++) {
          dests[_i].emit('unpipe', this);
        }
        return this;
      }
      var i = indexOf(state.pipes, dest);
      if (i === -1)
        return this;
      state.pipes.splice(i, 1);
      state.pipesCount -= 1;
      if (state.pipesCount === 1)
        state.pipes = state.pipes[0];
      dest.emit('unpipe', this);
      return this;
    };
    Readable.prototype.on = function(ev, fn) {
      var res = Stream.prototype.on.call(this, ev, fn);
      if (ev === 'data' && false !== this._readableState.flowing) {
        this.resume();
      }
      if (ev === 'readable' && !this._readableState.endEmitted) {
        var state = this._readableState;
        if (!state.readableListening) {
          state.readableListening = true;
          state.emittedReadable = false;
          state.needReadable = true;
          if (!state.reading) {
            processNextTick(nReadingNextTick, this);
          } else if (state.length) {
            emitReadable(this, state);
          }
        }
      }
      return res;
    };
    Readable.prototype.addListener = Readable.prototype.on;
    function nReadingNextTick(self) {
      debug('readable nexttick read 0');
      self.read(0);
    }
    Readable.prototype.resume = function() {
      var state = this._readableState;
      if (!state.flowing) {
        debug('resume');
        state.flowing = true;
        resume(this, state);
      }
      return this;
    };
    function resume(stream, state) {
      if (!state.resumeScheduled) {
        state.resumeScheduled = true;
        processNextTick(resume_, stream, state);
      }
    }
    function resume_(stream, state) {
      if (!state.reading) {
        debug('resume read 0');
        stream.read(0);
      }
      state.resumeScheduled = false;
      stream.emit('resume');
      flow(stream);
      if (state.flowing && !state.reading)
        stream.read(0);
    }
    Readable.prototype.pause = function() {
      debug('call pause flowing=%j', this._readableState.flowing);
      if (false !== this._readableState.flowing) {
        debug('pause');
        this._readableState.flowing = false;
        this.emit('pause');
      }
      return this;
    };
    function flow(stream) {
      var state = stream._readableState;
      debug('flow', state.flowing);
      if (state.flowing) {
        do {
          var chunk = stream.read();
        } while (null !== chunk && state.flowing);
      }
    }
    Readable.prototype.wrap = function(stream) {
      var state = this._readableState;
      var paused = false;
      var self = this;
      stream.on('end', function() {
        debug('wrapped end');
        if (state.decoder && !state.ended) {
          var chunk = state.decoder.end();
          if (chunk && chunk.length)
            self.push(chunk);
        }
        self.push(null);
      });
      stream.on('data', function(chunk) {
        debug('wrapped data');
        if (state.decoder)
          chunk = state.decoder.write(chunk);
        if (state.objectMode && (chunk === null || chunk === undefined))
          return;
        else if (!state.objectMode && (!chunk || !chunk.length))
          return;
        var ret = self.push(chunk);
        if (!ret) {
          paused = true;
          stream.pause();
        }
      });
      for (var i in stream) {
        if (this[i] === undefined && typeof stream[i] === 'function') {
          this[i] = function(method) {
            return function() {
              return stream[method].apply(stream, arguments);
            };
          }(i);
        }
      }
      var events = ['error', 'close', 'destroy', 'pause', 'resume'];
      forEach(events, function(ev) {
        stream.on(ev, self.emit.bind(self, ev));
      });
      self._read = function(n) {
        debug('wrapped _read', n);
        if (paused) {
          paused = false;
          stream.resume();
        }
      };
      return self;
    };
    Readable._fromList = fromList;
    function fromList(n, state) {
      var list = state.buffer;
      var length = state.length;
      var stringMode = !!state.decoder;
      var objectMode = !!state.objectMode;
      var ret;
      if (list.length === 0)
        return null;
      if (length === 0)
        ret = null;
      else if (objectMode)
        ret = list.shift();
      else if (!n || n >= length) {
        if (stringMode)
          ret = list.join('');
        else if (list.length === 1)
          ret = list[0];
        else
          ret = Buffer.concat(list, length);
        list.length = 0;
      } else {
        if (n < list[0].length) {
          var buf = list[0];
          ret = buf.slice(0, n);
          list[0] = buf.slice(n);
        } else if (n === list[0].length) {
          ret = list.shift();
        } else {
          if (stringMode)
            ret = '';
          else
            ret = new Buffer(n);
          var c = 0;
          for (var i = 0,
              l = list.length; i < l && c < n; i++) {
            var buf = list[0];
            var cpy = Math.min(n - c, buf.length);
            if (stringMode)
              ret += buf.slice(0, cpy);
            else
              buf.copy(ret, c, 0, cpy);
            if (cpy < buf.length)
              list[0] = buf.slice(cpy);
            else
              list.shift();
            c += cpy;
          }
        }
      }
      return ret;
    }
    function endReadable(stream) {
      var state = stream._readableState;
      if (state.length > 0)
        throw new Error('endReadable called on non-empty stream');
      if (!state.endEmitted) {
        state.ended = true;
        processNextTick(endReadableNT, state, stream);
      }
    }
    function endReadableNT(state, stream) {
      if (!state.endEmitted && state.length === 0) {
        state.endEmitted = true;
        stream.readable = false;
        stream.emit('end');
      }
    }
    function forEach(xs, f) {
      for (var i = 0,
          l = xs.length; i < l; i++) {
        f(xs[i], i);
      }
    }
    function indexOf(xs, x) {
      for (var i = 0,
          l = xs.length; i < l; i++) {
        if (xs[i] === x)
          return i;
      }
      return -1;
    }
  })($__require('3').Buffer, $__require('11'));
  return module.exports;
});

$__System.registerDynamic("89", ["11"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    if (!process.version || process.version.indexOf('v0.') === 0 || process.version.indexOf('v1.') === 0 && process.version.indexOf('v1.8.') !== 0) {
      module.exports = nextTick;
    } else {
      module.exports = process.nextTick;
    }
    function nextTick(fn) {
      var args = new Array(arguments.length - 1);
      var i = 0;
      while (i < args.length) {
        args[i++] = arguments[i];
      }
      process.nextTick(function afterTick() {
        fn.apply(null, args);
      });
    }
  })($__require('11'));
  return module.exports;
});

$__System.registerDynamic("88", ["89"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('89');
  return module.exports;
});

$__System.registerDynamic("8a", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = deprecate;
  function deprecate(fn, msg) {
    if (config('noDeprecation')) {
      return fn;
    }
    var warned = false;
    function deprecated() {
      if (!warned) {
        if (config('throwDeprecation')) {
          throw new Error(msg);
        } else if (config('traceDeprecation')) {
          console.trace(msg);
        } else {
          console.warn(msg);
        }
        warned = true;
      }
      return fn.apply(this, arguments);
    }
    return deprecated;
  }
  function config(name) {
    try {
      if (!global.localStorage)
        return false;
    } catch (_) {
      return false;
    }
    var val = global.localStorage[name];
    if (null == val)
      return false;
    return String(val).toLowerCase() === 'true';
  }
  return module.exports;
});

$__System.registerDynamic("8b", ["8a"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('8a');
  return module.exports;
});

$__System.registerDynamic("8c", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  function EventEmitter() {
    this._events = this._events || {};
    this._maxListeners = this._maxListeners || undefined;
  }
  module.exports = EventEmitter;
  EventEmitter.EventEmitter = EventEmitter;
  EventEmitter.prototype._events = undefined;
  EventEmitter.prototype._maxListeners = undefined;
  EventEmitter.defaultMaxListeners = 10;
  EventEmitter.prototype.setMaxListeners = function(n) {
    if (!isNumber(n) || n < 0 || isNaN(n))
      throw TypeError('n must be a positive number');
    this._maxListeners = n;
    return this;
  };
  EventEmitter.prototype.emit = function(type) {
    var er,
        handler,
        len,
        args,
        i,
        listeners;
    if (!this._events)
      this._events = {};
    if (type === 'error') {
      if (!this._events.error || (isObject(this._events.error) && !this._events.error.length)) {
        er = arguments[1];
        if (er instanceof Error) {
          throw er;
        }
        throw TypeError('Uncaught, unspecified "error" event.');
      }
    }
    handler = this._events[type];
    if (isUndefined(handler))
      return false;
    if (isFunction(handler)) {
      switch (arguments.length) {
        case 1:
          handler.call(this);
          break;
        case 2:
          handler.call(this, arguments[1]);
          break;
        case 3:
          handler.call(this, arguments[1], arguments[2]);
          break;
        default:
          len = arguments.length;
          args = new Array(len - 1);
          for (i = 1; i < len; i++)
            args[i - 1] = arguments[i];
          handler.apply(this, args);
      }
    } else if (isObject(handler)) {
      len = arguments.length;
      args = new Array(len - 1);
      for (i = 1; i < len; i++)
        args[i - 1] = arguments[i];
      listeners = handler.slice();
      len = listeners.length;
      for (i = 0; i < len; i++)
        listeners[i].apply(this, args);
    }
    return true;
  };
  EventEmitter.prototype.addListener = function(type, listener) {
    var m;
    if (!isFunction(listener))
      throw TypeError('listener must be a function');
    if (!this._events)
      this._events = {};
    if (this._events.newListener)
      this.emit('newListener', type, isFunction(listener.listener) ? listener.listener : listener);
    if (!this._events[type])
      this._events[type] = listener;
    else if (isObject(this._events[type]))
      this._events[type].push(listener);
    else
      this._events[type] = [this._events[type], listener];
    if (isObject(this._events[type]) && !this._events[type].warned) {
      var m;
      if (!isUndefined(this._maxListeners)) {
        m = this._maxListeners;
      } else {
        m = EventEmitter.defaultMaxListeners;
      }
      if (m && m > 0 && this._events[type].length > m) {
        this._events[type].warned = true;
        console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', this._events[type].length);
        if (typeof console.trace === 'function') {
          console.trace();
        }
      }
    }
    return this;
  };
  EventEmitter.prototype.on = EventEmitter.prototype.addListener;
  EventEmitter.prototype.once = function(type, listener) {
    if (!isFunction(listener))
      throw TypeError('listener must be a function');
    var fired = false;
    function g() {
      this.removeListener(type, g);
      if (!fired) {
        fired = true;
        listener.apply(this, arguments);
      }
    }
    g.listener = listener;
    this.on(type, g);
    return this;
  };
  EventEmitter.prototype.removeListener = function(type, listener) {
    var list,
        position,
        length,
        i;
    if (!isFunction(listener))
      throw TypeError('listener must be a function');
    if (!this._events || !this._events[type])
      return this;
    list = this._events[type];
    length = list.length;
    position = -1;
    if (list === listener || (isFunction(list.listener) && list.listener === listener)) {
      delete this._events[type];
      if (this._events.removeListener)
        this.emit('removeListener', type, listener);
    } else if (isObject(list)) {
      for (i = length; i-- > 0; ) {
        if (list[i] === listener || (list[i].listener && list[i].listener === listener)) {
          position = i;
          break;
        }
      }
      if (position < 0)
        return this;
      if (list.length === 1) {
        list.length = 0;
        delete this._events[type];
      } else {
        list.splice(position, 1);
      }
      if (this._events.removeListener)
        this.emit('removeListener', type, listener);
    }
    return this;
  };
  EventEmitter.prototype.removeAllListeners = function(type) {
    var key,
        listeners;
    if (!this._events)
      return this;
    if (!this._events.removeListener) {
      if (arguments.length === 0)
        this._events = {};
      else if (this._events[type])
        delete this._events[type];
      return this;
    }
    if (arguments.length === 0) {
      for (key in this._events) {
        if (key === 'removeListener')
          continue;
        this.removeAllListeners(key);
      }
      this.removeAllListeners('removeListener');
      this._events = {};
      return this;
    }
    listeners = this._events[type];
    if (isFunction(listeners)) {
      this.removeListener(type, listeners);
    } else {
      while (listeners.length)
        this.removeListener(type, listeners[listeners.length - 1]);
    }
    delete this._events[type];
    return this;
  };
  EventEmitter.prototype.listeners = function(type) {
    var ret;
    if (!this._events || !this._events[type])
      ret = [];
    else if (isFunction(this._events[type]))
      ret = [this._events[type]];
    else
      ret = this._events[type].slice();
    return ret;
  };
  EventEmitter.listenerCount = function(emitter, type) {
    var ret;
    if (!emitter._events || !emitter._events[type])
      ret = 0;
    else if (isFunction(emitter._events[type]))
      ret = 1;
    else
      ret = emitter._events[type].length;
    return ret;
  };
  function isFunction(arg) {
    return typeof arg === 'function';
  }
  function isNumber(arg) {
    return typeof arg === 'number';
  }
  function isObject(arg) {
    return typeof arg === 'object' && arg !== null;
  }
  function isUndefined(arg) {
    return arg === void 0;
  }
  return module.exports;
});

$__System.registerDynamic("8d", ["8c"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('8c');
  return module.exports;
});

$__System.registerDynamic("8e", ["8d"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__System._nodeRequire ? $__System._nodeRequire('events') : $__require('8d');
  return module.exports;
});

$__System.registerDynamic("1a", ["8e"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('8e');
  return module.exports;
});

$__System.registerDynamic("8f", ["88", "3", "5f", "60", "8b", "1a", "86", "11"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(Buffer, process) {
    'use strict';
    module.exports = Writable;
    var processNextTick = $__require('88');
    var asyncWrite = !process.browser && ['v0.10', 'v0.9.'].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : processNextTick;
    var Buffer = $__require('3').Buffer;
    Writable.WritableState = WritableState;
    var util = $__require('5f');
    util.inherits = $__require('60');
    var internalUtil = {deprecate: $__require('8b')};
    var Stream;
    (function() {
      try {
        Stream = $__require('st' + 'ream');
      } catch (_) {} finally {
        if (!Stream)
          Stream = $__require('1a').EventEmitter;
      }
    })();
    var Buffer = $__require('3').Buffer;
    util.inherits(Writable, Stream);
    function nop() {}
    function WriteReq(chunk, encoding, cb) {
      this.chunk = chunk;
      this.encoding = encoding;
      this.callback = cb;
      this.next = null;
    }
    var Duplex;
    function WritableState(options, stream) {
      Duplex = Duplex || $__require('86');
      options = options || {};
      this.objectMode = !!options.objectMode;
      if (stream instanceof Duplex)
        this.objectMode = this.objectMode || !!options.writableObjectMode;
      var hwm = options.highWaterMark;
      var defaultHwm = this.objectMode ? 16 : 16 * 1024;
      this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;
      this.highWaterMark = ~~this.highWaterMark;
      this.needDrain = false;
      this.ending = false;
      this.ended = false;
      this.finished = false;
      var noDecode = options.decodeStrings === false;
      this.decodeStrings = !noDecode;
      this.defaultEncoding = options.defaultEncoding || 'utf8';
      this.length = 0;
      this.writing = false;
      this.corked = 0;
      this.sync = true;
      this.bufferProcessing = false;
      this.onwrite = function(er) {
        onwrite(stream, er);
      };
      this.writecb = null;
      this.writelen = 0;
      this.bufferedRequest = null;
      this.lastBufferedRequest = null;
      this.pendingcb = 0;
      this.prefinished = false;
      this.errorEmitted = false;
      this.bufferedRequestCount = 0;
      this.corkedRequestsFree = new CorkedRequest(this);
      this.corkedRequestsFree.next = new CorkedRequest(this);
    }
    WritableState.prototype.getBuffer = function writableStateGetBuffer() {
      var current = this.bufferedRequest;
      var out = [];
      while (current) {
        out.push(current);
        current = current.next;
      }
      return out;
    };
    (function() {
      try {
        Object.defineProperty(WritableState.prototype, 'buffer', {get: internalUtil.deprecate(function() {
            return this.getBuffer();
          }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.')});
      } catch (_) {}
    })();
    var Duplex;
    function Writable(options) {
      Duplex = Duplex || $__require('86');
      if (!(this instanceof Writable) && !(this instanceof Duplex))
        return new Writable(options);
      this._writableState = new WritableState(options, this);
      this.writable = true;
      if (options) {
        if (typeof options.write === 'function')
          this._write = options.write;
        if (typeof options.writev === 'function')
          this._writev = options.writev;
      }
      Stream.call(this);
    }
    Writable.prototype.pipe = function() {
      this.emit('error', new Error('Cannot pipe. Not readable.'));
    };
    function writeAfterEnd(stream, cb) {
      var er = new Error('write after end');
      stream.emit('error', er);
      processNextTick(cb, er);
    }
    function validChunk(stream, state, chunk, cb) {
      var valid = true;
      if (!Buffer.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== null && chunk !== undefined && !state.objectMode) {
        var er = new TypeError('Invalid non-string/buffer chunk');
        stream.emit('error', er);
        processNextTick(cb, er);
        valid = false;
      }
      return valid;
    }
    Writable.prototype.write = function(chunk, encoding, cb) {
      var state = this._writableState;
      var ret = false;
      if (typeof encoding === 'function') {
        cb = encoding;
        encoding = null;
      }
      if (Buffer.isBuffer(chunk))
        encoding = 'buffer';
      else if (!encoding)
        encoding = state.defaultEncoding;
      if (typeof cb !== 'function')
        cb = nop;
      if (state.ended)
        writeAfterEnd(this, cb);
      else if (validChunk(this, state, chunk, cb)) {
        state.pendingcb++;
        ret = writeOrBuffer(this, state, chunk, encoding, cb);
      }
      return ret;
    };
    Writable.prototype.cork = function() {
      var state = this._writableState;
      state.corked++;
    };
    Writable.prototype.uncork = function() {
      var state = this._writableState;
      if (state.corked) {
        state.corked--;
        if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest)
          clearBuffer(this, state);
      }
    };
    Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
      if (typeof encoding === 'string')
        encoding = encoding.toLowerCase();
      if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1))
        throw new TypeError('Unknown encoding: ' + encoding);
      this._writableState.defaultEncoding = encoding;
    };
    function decodeChunk(state, chunk, encoding) {
      if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
        chunk = new Buffer(chunk, encoding);
      }
      return chunk;
    }
    function writeOrBuffer(stream, state, chunk, encoding, cb) {
      chunk = decodeChunk(state, chunk, encoding);
      if (Buffer.isBuffer(chunk))
        encoding = 'buffer';
      var len = state.objectMode ? 1 : chunk.length;
      state.length += len;
      var ret = state.length < state.highWaterMark;
      if (!ret)
        state.needDrain = true;
      if (state.writing || state.corked) {
        var last = state.lastBufferedRequest;
        state.lastBufferedRequest = new WriteReq(chunk, encoding, cb);
        if (last) {
          last.next = state.lastBufferedRequest;
        } else {
          state.bufferedRequest = state.lastBufferedRequest;
        }
        state.bufferedRequestCount += 1;
      } else {
        doWrite(stream, state, false, len, chunk, encoding, cb);
      }
      return ret;
    }
    function doWrite(stream, state, writev, len, chunk, encoding, cb) {
      state.writelen = len;
      state.writecb = cb;
      state.writing = true;
      state.sync = true;
      if (writev)
        stream._writev(chunk, state.onwrite);
      else
        stream._write(chunk, encoding, state.onwrite);
      state.sync = false;
    }
    function onwriteError(stream, state, sync, er, cb) {
      --state.pendingcb;
      if (sync)
        processNextTick(cb, er);
      else
        cb(er);
      stream._writableState.errorEmitted = true;
      stream.emit('error', er);
    }
    function onwriteStateUpdate(state) {
      state.writing = false;
      state.writecb = null;
      state.length -= state.writelen;
      state.writelen = 0;
    }
    function onwrite(stream, er) {
      var state = stream._writableState;
      var sync = state.sync;
      var cb = state.writecb;
      onwriteStateUpdate(state);
      if (er)
        onwriteError(stream, state, sync, er, cb);
      else {
        var finished = needFinish(state);
        if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
          clearBuffer(stream, state);
        }
        if (sync) {
          asyncWrite(afterWrite, stream, state, finished, cb);
        } else {
          afterWrite(stream, state, finished, cb);
        }
      }
    }
    function afterWrite(stream, state, finished, cb) {
      if (!finished)
        onwriteDrain(stream, state);
      state.pendingcb--;
      cb();
      finishMaybe(stream, state);
    }
    function onwriteDrain(stream, state) {
      if (state.length === 0 && state.needDrain) {
        state.needDrain = false;
        stream.emit('drain');
      }
    }
    function clearBuffer(stream, state) {
      state.bufferProcessing = true;
      var entry = state.bufferedRequest;
      if (stream._writev && entry && entry.next) {
        var l = state.bufferedRequestCount;
        var buffer = new Array(l);
        var holder = state.corkedRequestsFree;
        holder.entry = entry;
        var count = 0;
        while (entry) {
          buffer[count] = entry;
          entry = entry.next;
          count += 1;
        }
        doWrite(stream, state, true, state.length, buffer, '', holder.finish);
        state.pendingcb++;
        state.lastBufferedRequest = null;
        state.corkedRequestsFree = holder.next;
        holder.next = null;
      } else {
        while (entry) {
          var chunk = entry.chunk;
          var encoding = entry.encoding;
          var cb = entry.callback;
          var len = state.objectMode ? 1 : chunk.length;
          doWrite(stream, state, false, len, chunk, encoding, cb);
          entry = entry.next;
          if (state.writing) {
            break;
          }
        }
        if (entry === null)
          state.lastBufferedRequest = null;
      }
      state.bufferedRequestCount = 0;
      state.bufferedRequest = entry;
      state.bufferProcessing = false;
    }
    Writable.prototype._write = function(chunk, encoding, cb) {
      cb(new Error('not implemented'));
    };
    Writable.prototype._writev = null;
    Writable.prototype.end = function(chunk, encoding, cb) {
      var state = this._writableState;
      if (typeof chunk === 'function') {
        cb = chunk;
        chunk = null;
        encoding = null;
      } else if (typeof encoding === 'function') {
        cb = encoding;
        encoding = null;
      }
      if (chunk !== null && chunk !== undefined)
        this.write(chunk, encoding);
      if (state.corked) {
        state.corked = 1;
        this.uncork();
      }
      if (!state.ending && !state.finished)
        endWritable(this, state, cb);
    };
    function needFinish(state) {
      return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
    }
    function prefinish(stream, state) {
      if (!state.prefinished) {
        state.prefinished = true;
        stream.emit('prefinish');
      }
    }
    function finishMaybe(stream, state) {
      var need = needFinish(state);
      if (need) {
        if (state.pendingcb === 0) {
          prefinish(stream, state);
          state.finished = true;
          stream.emit('finish');
        } else {
          prefinish(stream, state);
        }
      }
      return need;
    }
    function endWritable(stream, state, cb) {
      state.ending = true;
      finishMaybe(stream, state);
      if (cb) {
        if (state.finished)
          processNextTick(cb);
        else
          stream.once('finish', cb);
      }
      state.ended = true;
      stream.writable = false;
    }
    function CorkedRequest(state) {
      var _this = this;
      this.next = null;
      this.entry = null;
      this.finish = function(err) {
        var entry = _this.entry;
        _this.entry = null;
        while (entry) {
          var cb = entry.callback;
          state.pendingcb--;
          cb(err);
          entry = entry.next;
        }
        if (state.corkedRequestsFree) {
          state.corkedRequestsFree.next = _this;
        } else {
          state.corkedRequestsFree = _this;
        }
      };
    }
  })($__require('3').Buffer, $__require('11'));
  return module.exports;
});

$__System.registerDynamic("86", ["88", "5f", "60", "85", "8f", "11"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var objectKeys = Object.keys || function(obj) {
      var keys = [];
      for (var key in obj) {
        keys.push(key);
      }
      return keys;
    };
    module.exports = Duplex;
    var processNextTick = $__require('88');
    var util = $__require('5f');
    util.inherits = $__require('60');
    var Readable = $__require('85');
    var Writable = $__require('8f');
    util.inherits(Duplex, Readable);
    var keys = objectKeys(Writable.prototype);
    for (var v = 0; v < keys.length; v++) {
      var method = keys[v];
      if (!Duplex.prototype[method])
        Duplex.prototype[method] = Writable.prototype[method];
    }
    function Duplex(options) {
      if (!(this instanceof Duplex))
        return new Duplex(options);
      Readable.call(this, options);
      Writable.call(this, options);
      if (options && options.readable === false)
        this.readable = false;
      if (options && options.writable === false)
        this.writable = false;
      this.allowHalfOpen = true;
      if (options && options.allowHalfOpen === false)
        this.allowHalfOpen = false;
      this.once('end', onend);
    }
    function onend() {
      if (this.allowHalfOpen || this._writableState.ended)
        return;
      processNextTick(onEndNT, this);
    }
    function onEndNT(self) {
      self.end();
    }
    function forEach(xs, f) {
      for (var i = 0,
          l = xs.length; i < l; i++) {
        f(xs[i], i);
      }
    }
  })($__require('11'));
  return module.exports;
});

$__System.registerDynamic("90", ["3"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(Buffer) {
    function isArray(arg) {
      if (Array.isArray) {
        return Array.isArray(arg);
      }
      return objectToString(arg) === '[object Array]';
    }
    exports.isArray = isArray;
    function isBoolean(arg) {
      return typeof arg === 'boolean';
    }
    exports.isBoolean = isBoolean;
    function isNull(arg) {
      return arg === null;
    }
    exports.isNull = isNull;
    function isNullOrUndefined(arg) {
      return arg == null;
    }
    exports.isNullOrUndefined = isNullOrUndefined;
    function isNumber(arg) {
      return typeof arg === 'number';
    }
    exports.isNumber = isNumber;
    function isString(arg) {
      return typeof arg === 'string';
    }
    exports.isString = isString;
    function isSymbol(arg) {
      return typeof arg === 'symbol';
    }
    exports.isSymbol = isSymbol;
    function isUndefined(arg) {
      return arg === void 0;
    }
    exports.isUndefined = isUndefined;
    function isRegExp(re) {
      return objectToString(re) === '[object RegExp]';
    }
    exports.isRegExp = isRegExp;
    function isObject(arg) {
      return typeof arg === 'object' && arg !== null;
    }
    exports.isObject = isObject;
    function isDate(d) {
      return objectToString(d) === '[object Date]';
    }
    exports.isDate = isDate;
    function isError(e) {
      return (objectToString(e) === '[object Error]' || e instanceof Error);
    }
    exports.isError = isError;
    function isFunction(arg) {
      return typeof arg === 'function';
    }
    exports.isFunction = isFunction;
    function isPrimitive(arg) {
      return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || typeof arg === 'symbol' || typeof arg === 'undefined';
    }
    exports.isPrimitive = isPrimitive;
    exports.isBuffer = Buffer.isBuffer;
    function objectToString(o) {
      return Object.prototype.toString.call(o);
    }
  })($__require('3').Buffer);
  return module.exports;
});

$__System.registerDynamic("5f", ["90"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('90');
  return module.exports;
});

$__System.registerDynamic("91", ["86", "5f", "60", "11"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    module.exports = Transform;
    var Duplex = $__require('86');
    var util = $__require('5f');
    util.inherits = $__require('60');
    util.inherits(Transform, Duplex);
    function TransformState(stream) {
      this.afterTransform = function(er, data) {
        return afterTransform(stream, er, data);
      };
      this.needTransform = false;
      this.transforming = false;
      this.writecb = null;
      this.writechunk = null;
      this.writeencoding = null;
    }
    function afterTransform(stream, er, data) {
      var ts = stream._transformState;
      ts.transforming = false;
      var cb = ts.writecb;
      if (!cb)
        return stream.emit('error', new Error('no writecb in Transform class'));
      ts.writechunk = null;
      ts.writecb = null;
      if (data !== null && data !== undefined)
        stream.push(data);
      cb(er);
      var rs = stream._readableState;
      rs.reading = false;
      if (rs.needReadable || rs.length < rs.highWaterMark) {
        stream._read(rs.highWaterMark);
      }
    }
    function Transform(options) {
      if (!(this instanceof Transform))
        return new Transform(options);
      Duplex.call(this, options);
      this._transformState = new TransformState(this);
      var stream = this;
      this._readableState.needReadable = true;
      this._readableState.sync = false;
      if (options) {
        if (typeof options.transform === 'function')
          this._transform = options.transform;
        if (typeof options.flush === 'function')
          this._flush = options.flush;
      }
      this.once('prefinish', function() {
        if (typeof this._flush === 'function')
          this._flush(function(er) {
            done(stream, er);
          });
        else
          done(stream);
      });
    }
    Transform.prototype.push = function(chunk, encoding) {
      this._transformState.needTransform = false;
      return Duplex.prototype.push.call(this, chunk, encoding);
    };
    Transform.prototype._transform = function(chunk, encoding, cb) {
      throw new Error('not implemented');
    };
    Transform.prototype._write = function(chunk, encoding, cb) {
      var ts = this._transformState;
      ts.writecb = cb;
      ts.writechunk = chunk;
      ts.writeencoding = encoding;
      if (!ts.transforming) {
        var rs = this._readableState;
        if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark)
          this._read(rs.highWaterMark);
      }
    };
    Transform.prototype._read = function(n) {
      var ts = this._transformState;
      if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
        ts.transforming = true;
        this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
      } else {
        ts.needTransform = true;
      }
    };
    function done(stream, er) {
      if (er)
        return stream.emit('error', er);
      var ws = stream._writableState;
      var ts = stream._transformState;
      if (ws.length)
        throw new Error('calling transform done when ws.length != 0');
      if (ts.transforming)
        throw new Error('calling transform done when still transforming');
      return stream.push(null);
    }
  })($__require('11'));
  return module.exports;
});

$__System.registerDynamic("92", ["91"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('91');
  return module.exports;
});

$__System.registerDynamic("93", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = extend;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  function extend() {
    var target = {};
    for (var i = 0; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  }
  return module.exports;
});

$__System.registerDynamic("94", ["93"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('93');
  return module.exports;
});

$__System.registerDynamic("95", ["92", "1c", "94", "11"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    var Transform = $__require('92'),
        inherits = $__require('1c').inherits,
        xtend = $__require('94');
    function DestroyableTransform(opts) {
      Transform.call(this, opts);
      this._destroyed = false;
    }
    inherits(DestroyableTransform, Transform);
    DestroyableTransform.prototype.destroy = function(err) {
      if (this._destroyed)
        return;
      this._destroyed = true;
      var self = this;
      process.nextTick(function() {
        if (err)
          self.emit('error', err);
        self.emit('close');
      });
    };
    function noop(chunk, enc, callback) {
      callback(null, chunk);
    }
    function through2(construct) {
      return function(options, transform, flush) {
        if (typeof options == 'function') {
          flush = transform;
          transform = options;
          options = {};
        }
        if (typeof transform != 'function')
          transform = noop;
        if (typeof flush != 'function')
          flush = null;
        return construct(options, transform, flush);
      };
    }
    module.exports = through2(function(options, transform, flush) {
      var t2 = new DestroyableTransform(options);
      t2._transform = transform;
      if (flush)
        t2._flush = flush;
      return t2;
    });
    module.exports.ctor = through2(function(options, transform, flush) {
      function Through2(override) {
        if (!(this instanceof Through2))
          return new Through2(override);
        this.options = xtend(options, override);
        DestroyableTransform.call(this, this.options);
      }
      inherits(Through2, DestroyableTransform);
      Through2.prototype._transform = transform;
      if (flush)
        Through2.prototype._flush = flush;
      return Through2;
    });
    module.exports.obj = through2(function(options, transform, flush) {
      var t2 = new DestroyableTransform(xtend({
        objectMode: true,
        highWaterMark: 16
      }, options));
      t2._transform = transform;
      if (flush)
        t2._flush = flush;
      return t2;
    });
  })($__require('11'));
  return module.exports;
});

$__System.registerDynamic("4c", ["95"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('95');
  return module.exports;
});

$__System.registerDynamic("96", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  if ($__System._nodeRequire)
    module.exports = $__System._nodeRequire('child_process');
  else
    throw "Node child_process module not supported in browsers.";
  return module.exports;
});

$__System.registerDynamic("97", ["96"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('96');
  return module.exports;
});

$__System.registerDynamic("98", ["11"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    function normalizeArray(parts, allowAboveRoot) {
      var up = 0;
      for (var i = parts.length - 1; i >= 0; i--) {
        var last = parts[i];
        if (last === '.') {
          parts.splice(i, 1);
        } else if (last === '..') {
          parts.splice(i, 1);
          up++;
        } else if (up) {
          parts.splice(i, 1);
          up--;
        }
      }
      if (allowAboveRoot) {
        for (; up--; up) {
          parts.unshift('..');
        }
      }
      return parts;
    }
    var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
    var splitPath = function(filename) {
      return splitPathRe.exec(filename).slice(1);
    };
    exports.resolve = function() {
      var resolvedPath = '',
          resolvedAbsolute = false;
      for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
        var path = (i >= 0) ? arguments[i] : process.cwd();
        if (typeof path !== 'string') {
          throw new TypeError('Arguments to path.resolve must be strings');
        } else if (!path) {
          continue;
        }
        resolvedPath = path + '/' + resolvedPath;
        resolvedAbsolute = path.charAt(0) === '/';
      }
      resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
        return !!p;
      }), !resolvedAbsolute).join('/');
      return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
    };
    exports.normalize = function(path) {
      var isAbsolute = exports.isAbsolute(path),
          trailingSlash = substr(path, -1) === '/';
      path = normalizeArray(filter(path.split('/'), function(p) {
        return !!p;
      }), !isAbsolute).join('/');
      if (!path && !isAbsolute) {
        path = '.';
      }
      if (path && trailingSlash) {
        path += '/';
      }
      return (isAbsolute ? '/' : '') + path;
    };
    exports.isAbsolute = function(path) {
      return path.charAt(0) === '/';
    };
    exports.join = function() {
      var paths = Array.prototype.slice.call(arguments, 0);
      return exports.normalize(filter(paths, function(p, index) {
        if (typeof p !== 'string') {
          throw new TypeError('Arguments to path.join must be strings');
        }
        return p;
      }).join('/'));
    };
    exports.relative = function(from, to) {
      from = exports.resolve(from).substr(1);
      to = exports.resolve(to).substr(1);
      function trim(arr) {
        var start = 0;
        for (; start < arr.length; start++) {
          if (arr[start] !== '')
            break;
        }
        var end = arr.length - 1;
        for (; end >= 0; end--) {
          if (arr[end] !== '')
            break;
        }
        if (start > end)
          return [];
        return arr.slice(start, end - start + 1);
      }
      var fromParts = trim(from.split('/'));
      var toParts = trim(to.split('/'));
      var length = Math.min(fromParts.length, toParts.length);
      var samePartsLength = length;
      for (var i = 0; i < length; i++) {
        if (fromParts[i] !== toParts[i]) {
          samePartsLength = i;
          break;
        }
      }
      var outputParts = [];
      for (var i = samePartsLength; i < fromParts.length; i++) {
        outputParts.push('..');
      }
      outputParts = outputParts.concat(toParts.slice(samePartsLength));
      return outputParts.join('/');
    };
    exports.sep = '/';
    exports.delimiter = ':';
    exports.dirname = function(path) {
      var result = splitPath(path),
          root = result[0],
          dir = result[1];
      if (!root && !dir) {
        return '.';
      }
      if (dir) {
        dir = dir.substr(0, dir.length - 1);
      }
      return root + dir;
    };
    exports.basename = function(path, ext) {
      var f = splitPath(path)[2];
      if (ext && f.substr(-1 * ext.length) === ext) {
        f = f.substr(0, f.length - ext.length);
      }
      return f;
    };
    exports.extname = function(path) {
      return splitPath(path)[3];
    };
    function filter(xs, f) {
      if (xs.filter)
        return xs.filter(f);
      var res = [];
      for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs))
          res.push(xs[i]);
      }
      return res;
    }
    var substr = 'ab'.substr(-1) === 'b' ? function(str, start, len) {
      return str.substr(start, len);
    } : function(str, start, len) {
      if (start < 0)
        start = str.length + start;
      return str.substr(start, len);
    };
    ;
  })($__require('11'));
  return module.exports;
});

$__System.registerDynamic("99", ["98"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('98');
  return module.exports;
});

$__System.registerDynamic("9a", ["99"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__System._nodeRequire ? $__System._nodeRequire('path') : $__require('99');
  return module.exports;
});

$__System.registerDynamic("f", ["9a"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('9a');
  return module.exports;
});

$__System.registerDynamic("9b", ["6", "11"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    module.exports = isexe;
    isexe.sync = sync;
    var fs = $__require('6');
    function checkPathExt(path, options) {
      var pathext = options.pathExt !== undefined ? options.pathExt : process.env.PATHEXT;
      if (!pathext) {
        return true;
      }
      pathext = pathext.split(';');
      if (pathext.indexOf('') !== -1) {
        return true;
      }
      for (var i = 0; i < pathext.length; i++) {
        var p = pathext[i].toLowerCase();
        if (p && path.substr(-p.length).toLowerCase() === p) {
          return true;
        }
      }
      return false;
    }
    function isexe(path, options, cb) {
      fs.stat(path, function(er, st) {
        cb(er, er ? false : checkPathExt(path, options));
      });
    }
    function sync(path, options) {
      fs.statSync(path);
      return checkPathExt(path, options);
    }
  })($__require('11'));
  return module.exports;
});

$__System.registerDynamic("9c", ["6"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = isexe;
  isexe.sync = sync;
  var fs = $__require('6');
  function isexe(path, _, cb) {
    fs.access(path, fs.X_OK, function(er) {
      cb(er, !er);
    });
  }
  function sync(path, _) {
    fs.accessSync(path, fs.X_OK);
    return true;
  }
  return module.exports;
});

$__System.registerDynamic("9d", ["6", "11"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    module.exports = isexe;
    isexe.sync = sync;
    var fs = $__require('6');
    function isexe(path, options, cb) {
      fs.stat(path, function(er, st) {
        cb(er, er ? false : checkMode(st, options));
      });
    }
    function sync(path, options) {
      return checkMode(fs.statSync(path), options);
    }
    function checkMode(stat, options) {
      var mod = stat.mode;
      var uid = stat.uid;
      var gid = stat.gid;
      var myUid = options.uid !== undefined ? options.uid : process.getuid && process.getuid();
      var myGid = options.gid !== undefined ? options.gid : process.getgid && process.getgid();
      var u = parseInt('100', 8);
      var g = parseInt('010', 8);
      var o = parseInt('001', 8);
      var ug = u | g;
      var ret = (mod & o) || (mod & g) && gid === myGid || (mod & u) && uid === myUid || (mod & ug) && myUid === 0;
      return ret;
    }
  })($__require('11'));
  return module.exports;
});

$__System.registerDynamic("9e", ["6", "9b", "9c", "9d", "11"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    var fs = $__require('6');
    var core;
    if (process.platform === 'win32' || global.TESTING_WINDOWS) {
      core = $__require('9b');
    } else if (typeof fs.access === 'function') {
      core = $__require('9c');
    } else {
      core = $__require('9d');
    }
    module.exports = isexe;
    isexe.sync = sync;
    function isexe(path, options, cb) {
      if (typeof options === 'function') {
        cb = options;
        options = {};
      }
      if (!cb) {
        if (typeof Promise !== 'function') {
          throw new TypeError('callback not provided');
        }
        return new Promise(function(resolve, reject) {
          isexe(path, options || {}, function(er, is) {
            if (er) {
              reject(er);
            } else {
              resolve(is);
            }
          });
        });
      }
      core(path, options || {}, function(er, is) {
        if (er) {
          if (er.code === 'EACCES' || options && options.ignoreErrors) {
            er = null;
            is = false;
          }
        }
        cb(er, is);
      });
    }
    function sync(path, options) {
      try {
        return core.sync(path, options || {});
      } catch (er) {
        if (options && options.ignoreErrors || er.code === 'EACCES') {
          return false;
        } else {
          throw er;
        }
      }
    }
  })($__require('11'));
  return module.exports;
});

$__System.registerDynamic("9f", ["9e"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('9e');
  return module.exports;
});

$__System.registerDynamic("a0", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  if ($__System._nodeRequire) {
    module.exports = $__System._nodeRequire('fs');
  } else {
    exports.readFileSync = function(address) {
      var output;
      var xhr = new XMLHttpRequest();
      xhr.open('GET', address, false);
      xhr.onreadystatechange = function(e) {
        if (xhr.readyState == 4) {
          var status = xhr.status;
          if ((status > 399 && status < 600) || status == 400) {
            throw 'File read error on ' + address;
          } else
            output = xhr.responseText;
        }
      };
      xhr.send(null);
      return output;
    };
  }
  return module.exports;
});

$__System.registerDynamic("6", ["a0"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('a0');
  return module.exports;
});

$__System.registerDynamic("a1", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function isRelative(filepath) {
    if (typeof filepath !== 'string') {
      throw new Error('isRelative expects a string.');
    }
    return !/^([a-z]+:)?[\\\/]/i.test(filepath);
  };
  return module.exports;
});

$__System.registerDynamic("a2", ["a1"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('a1');
  return module.exports;
});

$__System.registerDynamic("a3", ["a2"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isRelative = $__require('a2');
  module.exports = function isAbsolute(filepath) {
    if ('/' === filepath[0]) {
      return true;
    }
    if (':' === filepath[1] && '\\' === filepath[2]) {
      return true;
    }
    if ('\\\\' == filepath.substring(0, 2)) {
      return true;
    }
    if (!isRelative(filepath)) {
      return true;
    }
  };
  return module.exports;
});

$__System.registerDynamic("a4", ["a3"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('a3');
  return module.exports;
});

$__System.registerDynamic("a5", ["f", "9f", "6", "a4", "11"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    module.exports = which;
    which.sync = whichSync;
    var isWindows = process.platform === 'win32' || process.env.OSTYPE === 'cygwin' || process.env.OSTYPE === 'msys';
    var path = $__require('f');
    var COLON = isWindows ? ';' : ':';
    var isexe = $__require('9f');
    var fs = $__require('6');
    var isAbsolute = $__require('a4');
    function getPathInfo(cmd, opt) {
      var colon = opt.colon || COLON;
      var pathEnv = opt.path || process.env.Path || process.env.PATH || '';
      var pathExt = [''];
      pathEnv = pathEnv.split(colon);
      var pathExtExe = '';
      if (isWindows) {
        pathEnv.unshift(process.cwd());
        pathExtExe = (opt.pathExt || process.env.PATHEXT || '.EXE;.CMD;.BAT;.COM');
        pathExt = pathExtExe.split(colon);
        if (cmd.indexOf('.') !== -1 && pathExt[0] !== '')
          pathExt.unshift('');
      }
      if (isAbsolute(cmd))
        pathEnv = [''];
      return {
        env: pathEnv,
        ext: pathExt,
        extExe: pathExtExe
      };
    }
    function which(cmd, opt, cb) {
      if (typeof opt === 'function') {
        cb = opt;
        opt = {};
      }
      var info = getPathInfo(cmd, opt);
      var pathEnv = info.env;
      var pathExt = info.ext;
      var pathExtExe = info.extExe;
      var found = [];
      ;
      (function F(i, l) {
        if (i === l) {
          if (opt.all && found.length)
            return cb(null, found);
          else
            return cb(new Error('not found: ' + cmd));
        }
        var pathPart = pathEnv[i];
        if (pathPart.charAt(0) === '"' && pathPart.slice(-1) === '"')
          pathPart = pathPart.slice(1, -1);
        var p = path.resolve(pathPart, cmd);
        ;
        (function E(ii, ll) {
          if (ii === ll)
            return F(i + 1, l);
          var ext = pathExt[ii];
          isexe(p + ext, {pathExt: pathExtExe}, function(er, is) {
            if (!er && is) {
              if (opt.all)
                found.push(p + ext);
              else
                return cb(null, p + ext);
            }
            return E(ii + 1, ll);
          });
        })(0, pathExt.length);
      })(0, pathEnv.length);
    }
    function whichSync(cmd, opt) {
      opt = opt || {};
      var info = getPathInfo(cmd, opt);
      var pathEnv = info.env;
      var pathExt = info.ext;
      var pathExtExe = info.extExe;
      var found = [];
      for (var i = 0,
          l = pathEnv.length; i < l; i++) {
        var pathPart = pathEnv[i];
        if (pathPart.charAt(0) === '"' && pathPart.slice(-1) === '"')
          pathPart = pathPart.slice(1, -1);
        var p = path.join(pathPart, cmd);
        for (var j = 0,
            ll = pathExt.length; j < ll; j++) {
          var cur = p + pathExt[j];
          var is;
          try {
            is = isexe.sync(cur, {pathExt: pathExtExe});
            if (is) {
              if (opt.all)
                found.push(cur);
              else
                return cur;
            }
          } catch (ex) {}
        }
      }
      if (opt.all && found.length)
        return found;
      throw new Error('not found: ' + cmd);
    }
  })($__require('11'));
  return module.exports;
});

$__System.registerDynamic("a6", ["a5"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('a5');
  return module.exports;
});

$__System.registerDynamic("a7", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  module.exports = PseudoMap;
  function PseudoMap(set) {
    if (!(this instanceof PseudoMap))
      throw new TypeError("Constructor PseudoMap requires 'new'");
    this.clear();
    if (set) {
      if ((set instanceof PseudoMap) || (typeof Map === 'function' && set instanceof Map))
        set.forEach(function(value, key) {
          this.set(key, value);
        }, this);
      else if (Array.isArray(set))
        set.forEach(function(kv) {
          this.set(kv[0], kv[1]);
        }, this);
      else
        throw new TypeError('invalid argument');
    }
  }
  PseudoMap.prototype.forEach = function(fn, thisp) {
    thisp = thisp || this;
    Object.keys(this._data).forEach(function(k) {
      if (k !== 'size')
        fn.call(thisp, this._data[k].value, this._data[k].key);
    }, this);
  };
  PseudoMap.prototype.has = function(k) {
    return !!find(this._data, k);
  };
  PseudoMap.prototype.get = function(k) {
    var res = find(this._data, k);
    return res && res.value;
  };
  PseudoMap.prototype.set = function(k, v) {
    set(this._data, k, v);
  };
  PseudoMap.prototype.delete = function(k) {
    var res = find(this._data, k);
    if (res) {
      delete this._data[res._index];
      this._data.size--;
    }
  };
  PseudoMap.prototype.clear = function() {
    var data = Object.create(null);
    data.size = 0;
    Object.defineProperty(this, '_data', {
      value: data,
      enumerable: false,
      configurable: true,
      writable: false
    });
  };
  Object.defineProperty(PseudoMap.prototype, 'size', {
    get: function() {
      return this._data.size;
    },
    set: function(n) {},
    enumerable: true,
    configurable: true
  });
  PseudoMap.prototype.values = PseudoMap.prototype.keys = PseudoMap.prototype.entries = function() {
    throw new Error('iterators are not implemented in this version');
  };
  function same(a, b) {
    return a === b || a !== a && b !== b;
  }
  function Entry(k, v, i) {
    this.key = k;
    this.value = v;
    this._index = i;
  }
  function find(data, k) {
    for (var i = 0,
        s = '_' + k,
        key = s; hasOwnProperty.call(data, key); key = s + i++) {
      if (same(data[key].key, k))
        return data[key];
    }
  }
  function set(data, k, v) {
    for (var i = 0,
        s = '_' + k,
        key = s; hasOwnProperty.call(data, key); key = s + i++) {
      if (same(data[key].key, k)) {
        data[key].value = v;
        return;
      }
    }
    data.size++;
    data[key] = new Entry(k, v, key);
  }
  return module.exports;
});

$__System.registerDynamic("a8", ["a7", "11"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    if (process.env.npm_package_name === 'pseudomap' && process.env.npm_lifecycle_script === 'test')
      process.env.TEST_PSEUDOMAP = 'true';
    if (typeof Map === 'function' && !process.env.TEST_PSEUDOMAP) {
      module.exports = Map;
    } else {
      module.exports = $__require('a7');
    }
  })($__require('11'));
  return module.exports;
});

$__System.registerDynamic("a9", ["a8"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('a8');
  return module.exports;
});

$__System.registerDynamic("aa", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function isBuffer(arg) {
    return arg && typeof arg === 'object' && typeof arg.copy === 'function' && typeof arg.fill === 'function' && typeof arg.readUInt8 === 'function';
  };
  return module.exports;
});

$__System.registerDynamic("ab", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  if (typeof Object.create === 'function') {
    module.exports = function inherits(ctor, superCtor) {
      ctor.super_ = superCtor;
      ctor.prototype = Object.create(superCtor.prototype, {constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }});
    };
  } else {
    module.exports = function inherits(ctor, superCtor) {
      ctor.super_ = superCtor;
      var TempCtor = function() {};
      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    };
  }
  return module.exports;
});

$__System.registerDynamic("60", ["ab"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('ab');
  return module.exports;
});

$__System.registerDynamic("ac", ["aa", "60", "11"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    var formatRegExp = /%[sdj%]/g;
    exports.format = function(f) {
      if (!isString(f)) {
        var objects = [];
        for (var i = 0; i < arguments.length; i++) {
          objects.push(inspect(arguments[i]));
        }
        return objects.join(' ');
      }
      var i = 1;
      var args = arguments;
      var len = args.length;
      var str = String(f).replace(formatRegExp, function(x) {
        if (x === '%%')
          return '%';
        if (i >= len)
          return x;
        switch (x) {
          case '%s':
            return String(args[i++]);
          case '%d':
            return Number(args[i++]);
          case '%j':
            try {
              return JSON.stringify(args[i++]);
            } catch (_) {
              return '[Circular]';
            }
          default:
            return x;
        }
      });
      for (var x = args[i]; i < len; x = args[++i]) {
        if (isNull(x) || !isObject(x)) {
          str += ' ' + x;
        } else {
          str += ' ' + inspect(x);
        }
      }
      return str;
    };
    exports.deprecate = function(fn, msg) {
      if (isUndefined(global.process)) {
        return function() {
          return exports.deprecate(fn, msg).apply(this, arguments);
        };
      }
      if (process.noDeprecation === true) {
        return fn;
      }
      var warned = false;
      function deprecated() {
        if (!warned) {
          if (process.throwDeprecation) {
            throw new Error(msg);
          } else if (process.traceDeprecation) {
            console.trace(msg);
          } else {
            console.error(msg);
          }
          warned = true;
        }
        return fn.apply(this, arguments);
      }
      return deprecated;
    };
    var debugs = {};
    var debugEnviron;
    exports.debuglog = function(set) {
      if (isUndefined(debugEnviron))
        debugEnviron = process.env.NODE_DEBUG || '';
      set = set.toUpperCase();
      if (!debugs[set]) {
        if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
          var pid = process.pid;
          debugs[set] = function() {
            var msg = exports.format.apply(exports, arguments);
            console.error('%s %d: %s', set, pid, msg);
          };
        } else {
          debugs[set] = function() {};
        }
      }
      return debugs[set];
    };
    function inspect(obj, opts) {
      var ctx = {
        seen: [],
        stylize: stylizeNoColor
      };
      if (arguments.length >= 3)
        ctx.depth = arguments[2];
      if (arguments.length >= 4)
        ctx.colors = arguments[3];
      if (isBoolean(opts)) {
        ctx.showHidden = opts;
      } else if (opts) {
        exports._extend(ctx, opts);
      }
      if (isUndefined(ctx.showHidden))
        ctx.showHidden = false;
      if (isUndefined(ctx.depth))
        ctx.depth = 2;
      if (isUndefined(ctx.colors))
        ctx.colors = false;
      if (isUndefined(ctx.customInspect))
        ctx.customInspect = true;
      if (ctx.colors)
        ctx.stylize = stylizeWithColor;
      return formatValue(ctx, obj, ctx.depth);
    }
    exports.inspect = inspect;
    inspect.colors = {
      'bold': [1, 22],
      'italic': [3, 23],
      'underline': [4, 24],
      'inverse': [7, 27],
      'white': [37, 39],
      'grey': [90, 39],
      'black': [30, 39],
      'blue': [34, 39],
      'cyan': [36, 39],
      'green': [32, 39],
      'magenta': [35, 39],
      'red': [31, 39],
      'yellow': [33, 39]
    };
    inspect.styles = {
      'special': 'cyan',
      'number': 'yellow',
      'boolean': 'yellow',
      'undefined': 'grey',
      'null': 'bold',
      'string': 'green',
      'date': 'magenta',
      'regexp': 'red'
    };
    function stylizeWithColor(str, styleType) {
      var style = inspect.styles[styleType];
      if (style) {
        return '\u001b[' + inspect.colors[style][0] + 'm' + str + '\u001b[' + inspect.colors[style][1] + 'm';
      } else {
        return str;
      }
    }
    function stylizeNoColor(str, styleType) {
      return str;
    }
    function arrayToHash(array) {
      var hash = {};
      array.forEach(function(val, idx) {
        hash[val] = true;
      });
      return hash;
    }
    function formatValue(ctx, value, recurseTimes) {
      if (ctx.customInspect && value && isFunction(value.inspect) && value.inspect !== exports.inspect && !(value.constructor && value.constructor.prototype === value)) {
        var ret = value.inspect(recurseTimes, ctx);
        if (!isString(ret)) {
          ret = formatValue(ctx, ret, recurseTimes);
        }
        return ret;
      }
      var primitive = formatPrimitive(ctx, value);
      if (primitive) {
        return primitive;
      }
      var keys = Object.keys(value);
      var visibleKeys = arrayToHash(keys);
      if (ctx.showHidden) {
        keys = Object.getOwnPropertyNames(value);
      }
      if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
        return formatError(value);
      }
      if (keys.length === 0) {
        if (isFunction(value)) {
          var name = value.name ? ': ' + value.name : '';
          return ctx.stylize('[Function' + name + ']', 'special');
        }
        if (isRegExp(value)) {
          return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
        }
        if (isDate(value)) {
          return ctx.stylize(Date.prototype.toString.call(value), 'date');
        }
        if (isError(value)) {
          return formatError(value);
        }
      }
      var base = '',
          array = false,
          braces = ['{', '}'];
      if (isArray(value)) {
        array = true;
        braces = ['[', ']'];
      }
      if (isFunction(value)) {
        var n = value.name ? ': ' + value.name : '';
        base = ' [Function' + n + ']';
      }
      if (isRegExp(value)) {
        base = ' ' + RegExp.prototype.toString.call(value);
      }
      if (isDate(value)) {
        base = ' ' + Date.prototype.toUTCString.call(value);
      }
      if (isError(value)) {
        base = ' ' + formatError(value);
      }
      if (keys.length === 0 && (!array || value.length == 0)) {
        return braces[0] + base + braces[1];
      }
      if (recurseTimes < 0) {
        if (isRegExp(value)) {
          return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
        } else {
          return ctx.stylize('[Object]', 'special');
        }
      }
      ctx.seen.push(value);
      var output;
      if (array) {
        output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
      } else {
        output = keys.map(function(key) {
          return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
        });
      }
      ctx.seen.pop();
      return reduceToSingleString(output, base, braces);
    }
    function formatPrimitive(ctx, value) {
      if (isUndefined(value))
        return ctx.stylize('undefined', 'undefined');
      if (isString(value)) {
        var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
        return ctx.stylize(simple, 'string');
      }
      if (isNumber(value))
        return ctx.stylize('' + value, 'number');
      if (isBoolean(value))
        return ctx.stylize('' + value, 'boolean');
      if (isNull(value))
        return ctx.stylize('null', 'null');
    }
    function formatError(value) {
      return '[' + Error.prototype.toString.call(value) + ']';
    }
    function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
      var output = [];
      for (var i = 0,
          l = value.length; i < l; ++i) {
        if (hasOwnProperty(value, String(i))) {
          output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
        } else {
          output.push('');
        }
      }
      keys.forEach(function(key) {
        if (!key.match(/^\d+$/)) {
          output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
        }
      });
      return output;
    }
    function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
      var name,
          str,
          desc;
      desc = Object.getOwnPropertyDescriptor(value, key) || {value: value[key]};
      if (desc.get) {
        if (desc.set) {
          str = ctx.stylize('[Getter/Setter]', 'special');
        } else {
          str = ctx.stylize('[Getter]', 'special');
        }
      } else {
        if (desc.set) {
          str = ctx.stylize('[Setter]', 'special');
        }
      }
      if (!hasOwnProperty(visibleKeys, key)) {
        name = '[' + key + ']';
      }
      if (!str) {
        if (ctx.seen.indexOf(desc.value) < 0) {
          if (isNull(recurseTimes)) {
            str = formatValue(ctx, desc.value, null);
          } else {
            str = formatValue(ctx, desc.value, recurseTimes - 1);
          }
          if (str.indexOf('\n') > -1) {
            if (array) {
              str = str.split('\n').map(function(line) {
                return '  ' + line;
              }).join('\n').substr(2);
            } else {
              str = '\n' + str.split('\n').map(function(line) {
                return '   ' + line;
              }).join('\n');
            }
          }
        } else {
          str = ctx.stylize('[Circular]', 'special');
        }
      }
      if (isUndefined(name)) {
        if (array && key.match(/^\d+$/)) {
          return str;
        }
        name = JSON.stringify('' + key);
        if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
          name = name.substr(1, name.length - 2);
          name = ctx.stylize(name, 'name');
        } else {
          name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
          name = ctx.stylize(name, 'string');
        }
      }
      return name + ': ' + str;
    }
    function reduceToSingleString(output, base, braces) {
      var numLinesEst = 0;
      var length = output.reduce(function(prev, cur) {
        numLinesEst++;
        if (cur.indexOf('\n') >= 0)
          numLinesEst++;
        return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
      }, 0);
      if (length > 60) {
        return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
      }
      return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
    }
    function isArray(ar) {
      return Array.isArray(ar);
    }
    exports.isArray = isArray;
    function isBoolean(arg) {
      return typeof arg === 'boolean';
    }
    exports.isBoolean = isBoolean;
    function isNull(arg) {
      return arg === null;
    }
    exports.isNull = isNull;
    function isNullOrUndefined(arg) {
      return arg == null;
    }
    exports.isNullOrUndefined = isNullOrUndefined;
    function isNumber(arg) {
      return typeof arg === 'number';
    }
    exports.isNumber = isNumber;
    function isString(arg) {
      return typeof arg === 'string';
    }
    exports.isString = isString;
    function isSymbol(arg) {
      return typeof arg === 'symbol';
    }
    exports.isSymbol = isSymbol;
    function isUndefined(arg) {
      return arg === void 0;
    }
    exports.isUndefined = isUndefined;
    function isRegExp(re) {
      return isObject(re) && objectToString(re) === '[object RegExp]';
    }
    exports.isRegExp = isRegExp;
    function isObject(arg) {
      return typeof arg === 'object' && arg !== null;
    }
    exports.isObject = isObject;
    function isDate(d) {
      return isObject(d) && objectToString(d) === '[object Date]';
    }
    exports.isDate = isDate;
    function isError(e) {
      return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
    }
    exports.isError = isError;
    function isFunction(arg) {
      return typeof arg === 'function';
    }
    exports.isFunction = isFunction;
    function isPrimitive(arg) {
      return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || typeof arg === 'symbol' || typeof arg === 'undefined';
    }
    exports.isPrimitive = isPrimitive;
    exports.isBuffer = $__require('aa');
    function objectToString(o) {
      return Object.prototype.toString.call(o);
    }
    function pad(n) {
      return n < 10 ? '0' + n.toString(10) : n.toString(10);
    }
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    function timestamp() {
      var d = new Date();
      var time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':');
      return [d.getDate(), months[d.getMonth()], time].join(' ');
    }
    exports.log = function() {
      console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
    };
    exports.inherits = $__require('60');
    exports._extend = function(origin, add) {
      if (!add || !isObject(add))
        return origin;
      var keys = Object.keys(add);
      var i = keys.length;
      while (i--) {
        origin[keys[i]] = add[keys[i]];
      }
      return origin;
    };
    function hasOwnProperty(obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    }
  })($__require('11'));
  return module.exports;
});

$__System.registerDynamic("ad", ["ac"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('ac');
  return module.exports;
});

$__System.registerDynamic("ae", ["ad"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__System._nodeRequire ? $__System._nodeRequire('util') : $__require('ad');
  return module.exports;
});

$__System.registerDynamic("1c", ["ae"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('ae');
  return module.exports;
});

$__System.registerDynamic("af", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = Yallist;
  Yallist.Node = Node;
  Yallist.create = Yallist;
  function Yallist(list) {
    var self = this;
    if (!(self instanceof Yallist)) {
      self = new Yallist();
    }
    self.tail = null;
    self.head = null;
    self.length = 0;
    if (list && typeof list.forEach === 'function') {
      list.forEach(function(item) {
        self.push(item);
      });
    } else if (arguments.length > 0) {
      for (var i = 0,
          l = arguments.length; i < l; i++) {
        self.push(arguments[i]);
      }
    }
    return self;
  }
  Yallist.prototype.removeNode = function(node) {
    if (node.list !== this) {
      throw new Error('removing node which does not belong to this list');
    }
    var next = node.next;
    var prev = node.prev;
    if (next) {
      next.prev = prev;
    }
    if (prev) {
      prev.next = next;
    }
    if (node === this.head) {
      this.head = next;
    }
    if (node === this.tail) {
      this.tail = prev;
    }
    node.list.length--;
    node.next = null;
    node.prev = null;
    node.list = null;
  };
  Yallist.prototype.unshiftNode = function(node) {
    if (node === this.head) {
      return;
    }
    if (node.list) {
      node.list.removeNode(node);
    }
    var head = this.head;
    node.list = this;
    node.next = head;
    if (head) {
      head.prev = node;
    }
    this.head = node;
    if (!this.tail) {
      this.tail = node;
    }
    this.length++;
  };
  Yallist.prototype.pushNode = function(node) {
    if (node === this.tail) {
      return;
    }
    if (node.list) {
      node.list.removeNode(node);
    }
    var tail = this.tail;
    node.list = this;
    node.prev = tail;
    if (tail) {
      tail.next = node;
    }
    this.tail = node;
    if (!this.head) {
      this.head = node;
    }
    this.length++;
  };
  Yallist.prototype.push = function() {
    for (var i = 0,
        l = arguments.length; i < l; i++) {
      push(this, arguments[i]);
    }
    return this.length;
  };
  Yallist.prototype.unshift = function() {
    for (var i = 0,
        l = arguments.length; i < l; i++) {
      unshift(this, arguments[i]);
    }
    return this.length;
  };
  Yallist.prototype.pop = function() {
    if (!this.tail)
      return undefined;
    var res = this.tail.value;
    this.tail = this.tail.prev;
    this.tail.next = null;
    this.length--;
    return res;
  };
  Yallist.prototype.shift = function() {
    if (!this.head)
      return undefined;
    var res = this.head.value;
    this.head = this.head.next;
    this.head.prev = null;
    this.length--;
    return res;
  };
  Yallist.prototype.forEach = function(fn, thisp) {
    thisp = thisp || this;
    for (var walker = this.head,
        i = 0; walker !== null; i++) {
      fn.call(thisp, walker.value, i, this);
      walker = walker.next;
    }
  };
  Yallist.prototype.forEachReverse = function(fn, thisp) {
    thisp = thisp || this;
    for (var walker = this.tail,
        i = this.length - 1; walker !== null; i--) {
      fn.call(thisp, walker.value, i, this);
      walker = walker.prev;
    }
  };
  Yallist.prototype.get = function(n) {
    for (var i = 0,
        walker = this.head; walker !== null && i < n; i++) {
      walker = walker.next;
    }
    if (i === n && walker !== null) {
      return walker.value;
    }
  };
  Yallist.prototype.getReverse = function(n) {
    for (var i = 0,
        walker = this.tail; walker !== null && i < n; i++) {
      walker = walker.prev;
    }
    if (i === n && walker !== null) {
      return walker.value;
    }
  };
  Yallist.prototype.map = function(fn, thisp) {
    thisp = thisp || this;
    var res = new Yallist();
    for (var walker = this.head; walker !== null; ) {
      res.push(fn.call(thisp, walker.value, this));
      walker = walker.next;
    }
    return res;
  };
  Yallist.prototype.mapReverse = function(fn, thisp) {
    thisp = thisp || this;
    var res = new Yallist();
    for (var walker = this.tail; walker !== null; ) {
      res.push(fn.call(thisp, walker.value, this));
      walker = walker.prev;
    }
    return res;
  };
  Yallist.prototype.reduce = function(fn, initial) {
    var acc;
    var walker = this.head;
    if (arguments.length > 1) {
      acc = initial;
    } else if (this.head) {
      walker = this.head.next;
      acc = this.head.value;
    } else {
      throw new TypeError('Reduce of empty list with no initial value');
    }
    for (var i = 0; walker !== null; i++) {
      acc = fn(acc, walker.value, i);
      walker = walker.next;
    }
    return acc;
  };
  Yallist.prototype.reduceReverse = function(fn, initial) {
    var acc;
    var walker = this.tail;
    if (arguments.length > 1) {
      acc = initial;
    } else if (this.tail) {
      walker = this.tail.prev;
      acc = this.tail.value;
    } else {
      throw new TypeError('Reduce of empty list with no initial value');
    }
    for (var i = this.length - 1; walker !== null; i--) {
      acc = fn(acc, walker.value, i);
      walker = walker.prev;
    }
    return acc;
  };
  Yallist.prototype.toArray = function() {
    var arr = new Array(this.length);
    for (var i = 0,
        walker = this.head; walker !== null; i++) {
      arr[i] = walker.value;
      walker = walker.next;
    }
    return arr;
  };
  Yallist.prototype.toArrayReverse = function() {
    var arr = new Array(this.length);
    for (var i = 0,
        walker = this.tail; walker !== null; i++) {
      arr[i] = walker.value;
      walker = walker.prev;
    }
    return arr;
  };
  Yallist.prototype.slice = function(from, to) {
    to = to || this.length;
    if (to < 0) {
      to += this.length;
    }
    from = from || 0;
    if (from < 0) {
      from += this.length;
    }
    var ret = new Yallist();
    if (to < from || to < 0) {
      return ret;
    }
    if (from < 0) {
      from = 0;
    }
    if (to > this.length) {
      to = this.length;
    }
    for (var i = 0,
        walker = this.head; walker !== null && i < from; i++) {
      walker = walker.next;
    }
    for (; walker !== null && i < to; i++, walker = walker.next) {
      ret.push(walker.value);
    }
    return ret;
  };
  Yallist.prototype.sliceReverse = function(from, to) {
    to = to || this.length;
    if (to < 0) {
      to += this.length;
    }
    from = from || 0;
    if (from < 0) {
      from += this.length;
    }
    var ret = new Yallist();
    if (to < from || to < 0) {
      return ret;
    }
    if (from < 0) {
      from = 0;
    }
    if (to > this.length) {
      to = this.length;
    }
    for (var i = this.length,
        walker = this.tail; walker !== null && i > to; i--) {
      walker = walker.prev;
    }
    for (; walker !== null && i > from; i--, walker = walker.prev) {
      ret.push(walker.value);
    }
    return ret;
  };
  Yallist.prototype.reverse = function() {
    var head = this.head;
    var tail = this.tail;
    for (var walker = head; walker !== null; walker = walker.prev) {
      var p = walker.prev;
      walker.prev = walker.next;
      walker.next = p;
    }
    this.head = tail;
    this.tail = head;
    return this;
  };
  function push(self, item) {
    self.tail = new Node(item, self.tail, null, self);
    if (!self.head) {
      self.head = self.tail;
    }
    self.length++;
  }
  function unshift(self, item) {
    self.head = new Node(item, null, self.head, self);
    if (!self.tail) {
      self.tail = self.head;
    }
    self.length++;
  }
  function Node(value, prev, next, list) {
    if (!(this instanceof Node)) {
      return new Node(value, prev, next, list);
    }
    this.list = list;
    this.value = value;
    if (prev) {
      prev.next = this;
      this.prev = prev;
    } else {
      this.prev = null;
    }
    if (next) {
      next.prev = this;
      this.next = next;
    } else {
      this.next = null;
    }
  }
  return module.exports;
});

$__System.registerDynamic("b0", ["af"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('af');
  return module.exports;
});

$__System.registerDynamic("b1", ["a9", "1c", "b0"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = LRUCache;
  var Map = $__require('a9');
  var util = $__require('1c');
  var Yallist = $__require('b0');
  var symbols = {};
  var hasSymbol = typeof Symbol === 'function';
  var makeSymbol;
  if (hasSymbol) {
    makeSymbol = function(key) {
      return Symbol.for(key);
    };
  } else {
    makeSymbol = function(key) {
      return '_' + key;
    };
  }
  function priv(obj, key, val) {
    var sym;
    if (symbols[key]) {
      sym = symbols[key];
    } else {
      sym = makeSymbol(key);
      symbols[key] = sym;
    }
    if (arguments.length === 2) {
      return obj[sym];
    } else {
      obj[sym] = val;
      return val;
    }
  }
  function naiveLength() {
    return 1;
  }
  function LRUCache(options) {
    if (!(this instanceof LRUCache)) {
      return new LRUCache(options);
    }
    if (typeof options === 'number') {
      options = {max: options};
    }
    if (!options) {
      options = {};
    }
    var max = priv(this, 'max', options.max);
    if (!max || !(typeof max === 'number') || max <= 0) {
      priv(this, 'max', Infinity);
    }
    var lc = options.length || naiveLength;
    if (typeof lc !== 'function') {
      lc = naiveLength;
    }
    priv(this, 'lengthCalculator', lc);
    priv(this, 'allowStale', options.stale || false);
    priv(this, 'maxAge', options.maxAge || 0);
    priv(this, 'dispose', options.dispose);
    this.reset();
  }
  Object.defineProperty(LRUCache.prototype, 'max', {
    set: function(mL) {
      if (!mL || !(typeof mL === 'number') || mL <= 0) {
        mL = Infinity;
      }
      priv(this, 'max', mL);
      trim(this);
    },
    get: function() {
      return priv(this, 'max');
    },
    enumerable: true
  });
  Object.defineProperty(LRUCache.prototype, 'allowStale', {
    set: function(allowStale) {
      priv(this, 'allowStale', !!allowStale);
    },
    get: function() {
      return priv(this, 'allowStale');
    },
    enumerable: true
  });
  Object.defineProperty(LRUCache.prototype, 'maxAge', {
    set: function(mA) {
      if (!mA || !(typeof mA === 'number') || mA < 0) {
        mA = 0;
      }
      priv(this, 'maxAge', mA);
      trim(this);
    },
    get: function() {
      return priv(this, 'maxAge');
    },
    enumerable: true
  });
  Object.defineProperty(LRUCache.prototype, 'lengthCalculator', {
    set: function(lC) {
      if (typeof lC !== 'function') {
        lC = naiveLength;
      }
      if (lC !== priv(this, 'lengthCalculator')) {
        priv(this, 'lengthCalculator', lC);
        priv(this, 'length', 0);
        priv(this, 'lruList').forEach(function(hit) {
          hit.length = priv(this, 'lengthCalculator').call(this, hit.value, hit.key);
          priv(this, 'length', priv(this, 'length') + hit.length);
        }, this);
      }
      trim(this);
    },
    get: function() {
      return priv(this, 'lengthCalculator');
    },
    enumerable: true
  });
  Object.defineProperty(LRUCache.prototype, 'length', {
    get: function() {
      return priv(this, 'length');
    },
    enumerable: true
  });
  Object.defineProperty(LRUCache.prototype, 'itemCount', {
    get: function() {
      return priv(this, 'lruList').length;
    },
    enumerable: true
  });
  LRUCache.prototype.rforEach = function(fn, thisp) {
    thisp = thisp || this;
    for (var walker = priv(this, 'lruList').tail; walker !== null; ) {
      var prev = walker.prev;
      forEachStep(this, fn, walker, thisp);
      walker = prev;
    }
  };
  function forEachStep(self, fn, node, thisp) {
    var hit = node.value;
    if (isStale(self, hit)) {
      del(self, node);
      if (!priv(self, 'allowStale')) {
        hit = undefined;
      }
    }
    if (hit) {
      fn.call(thisp, hit.value, hit.key, self);
    }
  }
  LRUCache.prototype.forEach = function(fn, thisp) {
    thisp = thisp || this;
    for (var walker = priv(this, 'lruList').head; walker !== null; ) {
      var next = walker.next;
      forEachStep(this, fn, walker, thisp);
      walker = next;
    }
  };
  LRUCache.prototype.keys = function() {
    return priv(this, 'lruList').toArray().map(function(k) {
      return k.key;
    }, this);
  };
  LRUCache.prototype.values = function() {
    return priv(this, 'lruList').toArray().map(function(k) {
      return k.value;
    }, this);
  };
  LRUCache.prototype.reset = function() {
    if (priv(this, 'dispose') && priv(this, 'lruList') && priv(this, 'lruList').length) {
      priv(this, 'lruList').forEach(function(hit) {
        priv(this, 'dispose').call(this, hit.key, hit.value);
      }, this);
    }
    priv(this, 'cache', new Map());
    priv(this, 'lruList', new Yallist());
    priv(this, 'length', 0);
  };
  LRUCache.prototype.dump = function() {
    return priv(this, 'lruList').map(function(hit) {
      if (!isStale(this, hit)) {
        return {
          k: hit.key,
          v: hit.value,
          e: hit.now + (hit.maxAge || 0)
        };
      }
    }, this).toArray().filter(function(h) {
      return h;
    });
  };
  LRUCache.prototype.dumpLru = function() {
    return priv(this, 'lruList');
  };
  LRUCache.prototype.inspect = function(n, opts) {
    var str = 'LRUCache {';
    var extras = false;
    var as = priv(this, 'allowStale');
    if (as) {
      str += '\n  allowStale: true';
      extras = true;
    }
    var max = priv(this, 'max');
    if (max && max !== Infinity) {
      if (extras) {
        str += ',';
      }
      str += '\n  max: ' + util.inspect(max, opts);
      extras = true;
    }
    var maxAge = priv(this, 'maxAge');
    if (maxAge) {
      if (extras) {
        str += ',';
      }
      str += '\n  maxAge: ' + util.inspect(maxAge, opts);
      extras = true;
    }
    var lc = priv(this, 'lengthCalculator');
    if (lc && lc !== naiveLength) {
      if (extras) {
        str += ',';
      }
      str += '\n  length: ' + util.inspect(priv(this, 'length'), opts);
      extras = true;
    }
    var didFirst = false;
    priv(this, 'lruList').forEach(function(item) {
      if (didFirst) {
        str += ',\n  ';
      } else {
        if (extras) {
          str += ',\n';
        }
        didFirst = true;
        str += '\n  ';
      }
      var key = util.inspect(item.key).split('\n').join('\n  ');
      var val = {value: item.value};
      if (item.maxAge !== maxAge) {
        val.maxAge = item.maxAge;
      }
      if (lc !== naiveLength) {
        val.length = item.length;
      }
      if (isStale(this, item)) {
        val.stale = true;
      }
      val = util.inspect(val, opts).split('\n').join('\n  ');
      str += key + ' => ' + val;
    });
    if (didFirst || extras) {
      str += '\n';
    }
    str += '}';
    return str;
  };
  LRUCache.prototype.set = function(key, value, maxAge) {
    maxAge = maxAge || priv(this, 'maxAge');
    var now = maxAge ? Date.now() : 0;
    var len = priv(this, 'lengthCalculator').call(this, value, key);
    if (priv(this, 'cache').has(key)) {
      if (len > priv(this, 'max')) {
        del(this, priv(this, 'cache').get(key));
        return false;
      }
      var node = priv(this, 'cache').get(key);
      var item = node.value;
      if (priv(this, 'dispose')) {
        priv(this, 'dispose').call(this, key, item.value);
      }
      item.now = now;
      item.maxAge = maxAge;
      item.value = value;
      priv(this, 'length', priv(this, 'length') + (len - item.length));
      item.length = len;
      this.get(key);
      trim(this);
      return true;
    }
    var hit = new Entry(key, value, len, now, maxAge);
    if (hit.length > priv(this, 'max')) {
      if (priv(this, 'dispose')) {
        priv(this, 'dispose').call(this, key, value);
      }
      return false;
    }
    priv(this, 'length', priv(this, 'length') + hit.length);
    priv(this, 'lruList').unshift(hit);
    priv(this, 'cache').set(key, priv(this, 'lruList').head);
    trim(this);
    return true;
  };
  LRUCache.prototype.has = function(key) {
    if (!priv(this, 'cache').has(key))
      return false;
    var hit = priv(this, 'cache').get(key).value;
    if (isStale(this, hit)) {
      return false;
    }
    return true;
  };
  LRUCache.prototype.get = function(key) {
    return get(this, key, true);
  };
  LRUCache.prototype.peek = function(key) {
    return get(this, key, false);
  };
  LRUCache.prototype.pop = function() {
    var node = priv(this, 'lruList').tail;
    if (!node)
      return null;
    del(this, node);
    return node.value;
  };
  LRUCache.prototype.del = function(key) {
    del(this, priv(this, 'cache').get(key));
  };
  LRUCache.prototype.load = function(arr) {
    this.reset();
    var now = Date.now();
    for (var l = arr.length - 1; l >= 0; l--) {
      var hit = arr[l];
      var expiresAt = hit.e || 0;
      if (expiresAt === 0) {
        this.set(hit.k, hit.v);
      } else {
        var maxAge = expiresAt - now;
        if (maxAge > 0) {
          this.set(hit.k, hit.v, maxAge);
        }
      }
    }
  };
  LRUCache.prototype.prune = function() {
    var self = this;
    priv(this, 'cache').forEach(function(value, key) {
      get(self, key, false);
    });
  };
  function get(self, key, doUse) {
    var node = priv(self, 'cache').get(key);
    if (node) {
      var hit = node.value;
      if (isStale(self, hit)) {
        del(self, node);
        if (!priv(self, 'allowStale'))
          hit = undefined;
      } else {
        if (doUse) {
          priv(self, 'lruList').unshiftNode(node);
        }
      }
      if (hit)
        hit = hit.value;
    }
    return hit;
  }
  function isStale(self, hit) {
    if (!hit || (!hit.maxAge && !priv(self, 'maxAge'))) {
      return false;
    }
    var stale = false;
    var diff = Date.now() - hit.now;
    if (hit.maxAge) {
      stale = diff > hit.maxAge;
    } else {
      stale = priv(self, 'maxAge') && (diff > priv(self, 'maxAge'));
    }
    return stale;
  }
  function trim(self) {
    if (priv(self, 'length') > priv(self, 'max')) {
      for (var walker = priv(self, 'lruList').tail; priv(self, 'length') > priv(self, 'max') && walker !== null; ) {
        var prev = walker.prev;
        del(self, walker);
        walker = prev;
      }
    }
  }
  function del(self, node) {
    if (node) {
      var hit = node.value;
      if (priv(self, 'dispose')) {
        priv(self, 'dispose').call(this, hit.key, hit.value);
      }
      priv(self, 'length', priv(self, 'length') - hit.length);
      priv(self, 'cache').delete(hit.key);
      priv(self, 'lruList').removeNode(node);
    }
  }
  function Entry(key, value, length, now, maxAge) {
    this.key = key;
    this.value = value;
    this.length = length;
    this.now = now;
    this.maxAge = maxAge || 0;
  }
  return module.exports;
});

$__System.registerDynamic("b2", ["b1"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('b1');
  return module.exports;
});

$__System.registerDynamic("b3", ["f", "a6", "b2", "11"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var path = $__require('f');
    var which = $__require('a6');
    var LRU = $__require('b2');
    var resolveCache = LRU({
      max: 50,
      maxAge: 30 * 1000
    });
    function resolveCommand(command, noExtension) {
      var resolved;
      noExtension = !!noExtension;
      resolved = resolveCache.get(command + '!' + noExtension);
      if (resolveCache.has(command)) {
        return resolveCache.get(command);
      }
      try {
        resolved = !noExtension ? which.sync(command) : which.sync(command, {pathExt: path.delimiter + (process.env.PATHEXT || '')});
      } catch (e) {}
      resolveCache.set(command + '!' + noExtension, resolved);
      return resolved;
    }
    module.exports = resolveCommand;
  })($__require('11'));
  return module.exports;
});

$__System.registerDynamic("b4", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  function mixIn(target, source) {
    var key;
    for (key in source) {
      target[key] = source[key];
    }
    return target;
  }
  module.exports = mixIn;
  return module.exports;
});

$__System.registerDynamic("b5", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  ;
  (function(exports) {
    'use strict';
    var Arr = (typeof Uint8Array !== 'undefined') ? Uint8Array : Array;
    var PLUS = '+'.charCodeAt(0);
    var SLASH = '/'.charCodeAt(0);
    var NUMBER = '0'.charCodeAt(0);
    var LOWER = 'a'.charCodeAt(0);
    var UPPER = 'A'.charCodeAt(0);
    var PLUS_URL_SAFE = '-'.charCodeAt(0);
    var SLASH_URL_SAFE = '_'.charCodeAt(0);
    function decode(elt) {
      var code = elt.charCodeAt(0);
      if (code === PLUS || code === PLUS_URL_SAFE)
        return 62;
      if (code === SLASH || code === SLASH_URL_SAFE)
        return 63;
      if (code < NUMBER)
        return -1;
      if (code < NUMBER + 10)
        return code - NUMBER + 26 + 26;
      if (code < UPPER + 26)
        return code - UPPER;
      if (code < LOWER + 26)
        return code - LOWER + 26;
    }
    function b64ToByteArray(b64) {
      var i,
          j,
          l,
          tmp,
          placeHolders,
          arr;
      if (b64.length % 4 > 0) {
        throw new Error('Invalid string. Length must be a multiple of 4');
      }
      var len = b64.length;
      placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0;
      arr = new Arr(b64.length * 3 / 4 - placeHolders);
      l = placeHolders > 0 ? b64.length - 4 : b64.length;
      var L = 0;
      function push(v) {
        arr[L++] = v;
      }
      for (i = 0, j = 0; i < l; i += 4, j += 3) {
        tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3));
        push((tmp & 0xFF0000) >> 16);
        push((tmp & 0xFF00) >> 8);
        push(tmp & 0xFF);
      }
      if (placeHolders === 2) {
        tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4);
        push(tmp & 0xFF);
      } else if (placeHolders === 1) {
        tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2);
        push((tmp >> 8) & 0xFF);
        push(tmp & 0xFF);
      }
      return arr;
    }
    function uint8ToBase64(uint8) {
      var i,
          extraBytes = uint8.length % 3,
          output = "",
          temp,
          length;
      function encode(num) {
        return lookup.charAt(num);
      }
      function tripletToBase64(num) {
        return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F);
      }
      for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
        temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2]);
        output += tripletToBase64(temp);
      }
      switch (extraBytes) {
        case 1:
          temp = uint8[uint8.length - 1];
          output += encode(temp >> 2);
          output += encode((temp << 4) & 0x3F);
          output += '==';
          break;
        case 2:
          temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1]);
          output += encode(temp >> 10);
          output += encode((temp >> 4) & 0x3F);
          output += encode((temp << 2) & 0x3F);
          output += '=';
          break;
      }
      return output;
    }
    exports.toByteArray = b64ToByteArray;
    exports.fromByteArray = uint8ToBase64;
  }(typeof exports === 'undefined' ? (this.base64js = {}) : exports));
  return module.exports;
});

$__System.registerDynamic("b6", ["b5"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('b5');
  return module.exports;
});

$__System.registerDynamic("b7", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e,
        m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? (nBytes - 1) : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & ((1 << (-nBits)) - 1);
    s >>= (-nBits);
    nBits += eLen;
    for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}
    m = e & ((1 << (-nBits)) - 1);
    e >>= (-nBits);
    nBits += mLen;
    for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}
    if (e === 0) {
      e = 1 - eBias;
    } else if (e === eMax) {
      return m ? NaN : ((s ? -1 : 1) * Infinity);
    } else {
      m = m + Math.pow(2, mLen);
      e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
  };
  exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e,
        m,
        c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0);
    var i = isLE ? 0 : (nBytes - 1);
    var d = isLE ? 1 : -1;
    var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
      m = isNaN(value) ? 1 : 0;
      e = eMax;
    } else {
      e = Math.floor(Math.log(value) / Math.LN2);
      if (value * (c = Math.pow(2, -e)) < 1) {
        e--;
        c *= 2;
      }
      if (e + eBias >= 1) {
        value += rt / c;
      } else {
        value += rt * Math.pow(2, 1 - eBias);
      }
      if (value * c >= 2) {
        e++;
        c /= 2;
      }
      if (e + eBias >= eMax) {
        m = 0;
        e = eMax;
      } else if (e + eBias >= 1) {
        m = (value * c - 1) * Math.pow(2, mLen);
        e = e + eBias;
      } else {
        m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
        e = 0;
      }
    }
    for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}
    e = (e << mLen) | m;
    eLen += mLen;
    for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}
    buffer[offset + i - d] |= s * 128;
  };
  return module.exports;
});

$__System.registerDynamic("b8", ["b7"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('b7');
  return module.exports;
});

$__System.registerDynamic("b9", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toString = {}.toString;
  module.exports = Array.isArray || function(arr) {
    return toString.call(arr) == '[object Array]';
  };
  return module.exports;
});

$__System.registerDynamic("87", ["b9"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('b9');
  return module.exports;
});

$__System.registerDynamic("ba", ["b6", "b8", "87"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var base64 = $__require('b6');
  var ieee754 = $__require('b8');
  var isArray = $__require('87');
  exports.Buffer = Buffer;
  exports.SlowBuffer = SlowBuffer;
  exports.INSPECT_MAX_BYTES = 50;
  Buffer.poolSize = 8192;
  var rootParent = {};
  Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();
  function typedArraySupport() {
    function Bar() {}
    try {
      var arr = new Uint8Array(1);
      arr.foo = function() {
        return 42;
      };
      arr.constructor = Bar;
      return arr.foo() === 42 && arr.constructor === Bar && typeof arr.subarray === 'function' && arr.subarray(1, 1).byteLength === 0;
    } catch (e) {
      return false;
    }
  }
  function kMaxLength() {
    return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
  }
  function Buffer(arg) {
    if (!(this instanceof Buffer)) {
      if (arguments.length > 1)
        return new Buffer(arg, arguments[1]);
      return new Buffer(arg);
    }
    if (!Buffer.TYPED_ARRAY_SUPPORT) {
      this.length = 0;
      this.parent = undefined;
    }
    if (typeof arg === 'number') {
      return fromNumber(this, arg);
    }
    if (typeof arg === 'string') {
      return fromString(this, arg, arguments.length > 1 ? arguments[1] : 'utf8');
    }
    return fromObject(this, arg);
  }
  function fromNumber(that, length) {
    that = allocate(that, length < 0 ? 0 : checked(length) | 0);
    if (!Buffer.TYPED_ARRAY_SUPPORT) {
      for (var i = 0; i < length; i++) {
        that[i] = 0;
      }
    }
    return that;
  }
  function fromString(that, string, encoding) {
    if (typeof encoding !== 'string' || encoding === '')
      encoding = 'utf8';
    var length = byteLength(string, encoding) | 0;
    that = allocate(that, length);
    that.write(string, encoding);
    return that;
  }
  function fromObject(that, object) {
    if (Buffer.isBuffer(object))
      return fromBuffer(that, object);
    if (isArray(object))
      return fromArray(that, object);
    if (object == null) {
      throw new TypeError('must start with number, buffer, array or string');
    }
    if (typeof ArrayBuffer !== 'undefined') {
      if (object.buffer instanceof ArrayBuffer) {
        return fromTypedArray(that, object);
      }
      if (object instanceof ArrayBuffer) {
        return fromArrayBuffer(that, object);
      }
    }
    if (object.length)
      return fromArrayLike(that, object);
    return fromJsonObject(that, object);
  }
  function fromBuffer(that, buffer) {
    var length = checked(buffer.length) | 0;
    that = allocate(that, length);
    buffer.copy(that, 0, 0, length);
    return that;
  }
  function fromArray(that, array) {
    var length = checked(array.length) | 0;
    that = allocate(that, length);
    for (var i = 0; i < length; i += 1) {
      that[i] = array[i] & 255;
    }
    return that;
  }
  function fromTypedArray(that, array) {
    var length = checked(array.length) | 0;
    that = allocate(that, length);
    for (var i = 0; i < length; i += 1) {
      that[i] = array[i] & 255;
    }
    return that;
  }
  function fromArrayBuffer(that, array) {
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      array.byteLength;
      that = Buffer._augment(new Uint8Array(array));
    } else {
      that = fromTypedArray(that, new Uint8Array(array));
    }
    return that;
  }
  function fromArrayLike(that, array) {
    var length = checked(array.length) | 0;
    that = allocate(that, length);
    for (var i = 0; i < length; i += 1) {
      that[i] = array[i] & 255;
    }
    return that;
  }
  function fromJsonObject(that, object) {
    var array;
    var length = 0;
    if (object.type === 'Buffer' && isArray(object.data)) {
      array = object.data;
      length = checked(array.length) | 0;
    }
    that = allocate(that, length);
    for (var i = 0; i < length; i += 1) {
      that[i] = array[i] & 255;
    }
    return that;
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    Buffer.prototype.__proto__ = Uint8Array.prototype;
    Buffer.__proto__ = Uint8Array;
  } else {
    Buffer.prototype.length = undefined;
    Buffer.prototype.parent = undefined;
  }
  function allocate(that, length) {
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      that = Buffer._augment(new Uint8Array(length));
      that.__proto__ = Buffer.prototype;
    } else {
      that.length = length;
      that._isBuffer = true;
    }
    var fromPool = length !== 0 && length <= Buffer.poolSize >>> 1;
    if (fromPool)
      that.parent = rootParent;
    return that;
  }
  function checked(length) {
    if (length >= kMaxLength()) {
      throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
    }
    return length | 0;
  }
  function SlowBuffer(subject, encoding) {
    if (!(this instanceof SlowBuffer))
      return new SlowBuffer(subject, encoding);
    var buf = new Buffer(subject, encoding);
    delete buf.parent;
    return buf;
  }
  Buffer.isBuffer = function isBuffer(b) {
    return !!(b != null && b._isBuffer);
  };
  Buffer.compare = function compare(a, b) {
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
      throw new TypeError('Arguments must be Buffers');
    }
    if (a === b)
      return 0;
    var x = a.length;
    var y = b.length;
    var i = 0;
    var len = Math.min(x, y);
    while (i < len) {
      if (a[i] !== b[i])
        break;
      ++i;
    }
    if (i !== len) {
      x = a[i];
      y = b[i];
    }
    if (x < y)
      return -1;
    if (y < x)
      return 1;
    return 0;
  };
  Buffer.isEncoding = function isEncoding(encoding) {
    switch (String(encoding).toLowerCase()) {
      case 'hex':
      case 'utf8':
      case 'utf-8':
      case 'ascii':
      case 'binary':
      case 'base64':
      case 'raw':
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return true;
      default:
        return false;
    }
  };
  Buffer.concat = function concat(list, length) {
    if (!isArray(list))
      throw new TypeError('list argument must be an Array of Buffers.');
    if (list.length === 0) {
      return new Buffer(0);
    }
    var i;
    if (length === undefined) {
      length = 0;
      for (i = 0; i < list.length; i++) {
        length += list[i].length;
      }
    }
    var buf = new Buffer(length);
    var pos = 0;
    for (i = 0; i < list.length; i++) {
      var item = list[i];
      item.copy(buf, pos);
      pos += item.length;
    }
    return buf;
  };
  function byteLength(string, encoding) {
    if (typeof string !== 'string')
      string = '' + string;
    var len = string.length;
    if (len === 0)
      return 0;
    var loweredCase = false;
    for (; ; ) {
      switch (encoding) {
        case 'ascii':
        case 'binary':
        case 'raw':
        case 'raws':
          return len;
        case 'utf8':
        case 'utf-8':
          return utf8ToBytes(string).length;
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return len * 2;
        case 'hex':
          return len >>> 1;
        case 'base64':
          return base64ToBytes(string).length;
        default:
          if (loweredCase)
            return utf8ToBytes(string).length;
          encoding = ('' + encoding).toLowerCase();
          loweredCase = true;
      }
    }
  }
  Buffer.byteLength = byteLength;
  function slowToString(encoding, start, end) {
    var loweredCase = false;
    start = start | 0;
    end = end === undefined || end === Infinity ? this.length : end | 0;
    if (!encoding)
      encoding = 'utf8';
    if (start < 0)
      start = 0;
    if (end > this.length)
      end = this.length;
    if (end <= start)
      return '';
    while (true) {
      switch (encoding) {
        case 'hex':
          return hexSlice(this, start, end);
        case 'utf8':
        case 'utf-8':
          return utf8Slice(this, start, end);
        case 'ascii':
          return asciiSlice(this, start, end);
        case 'binary':
          return binarySlice(this, start, end);
        case 'base64':
          return base64Slice(this, start, end);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return utf16leSlice(this, start, end);
        default:
          if (loweredCase)
            throw new TypeError('Unknown encoding: ' + encoding);
          encoding = (encoding + '').toLowerCase();
          loweredCase = true;
      }
    }
  }
  Buffer.prototype.toString = function toString() {
    var length = this.length | 0;
    if (length === 0)
      return '';
    if (arguments.length === 0)
      return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
  };
  Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b))
      throw new TypeError('Argument must be a Buffer');
    if (this === b)
      return true;
    return Buffer.compare(this, b) === 0;
  };
  Buffer.prototype.inspect = function inspect() {
    var str = '';
    var max = exports.INSPECT_MAX_BYTES;
    if (this.length > 0) {
      str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
      if (this.length > max)
        str += ' ... ';
    }
    return '<Buffer ' + str + '>';
  };
  Buffer.prototype.compare = function compare(b) {
    if (!Buffer.isBuffer(b))
      throw new TypeError('Argument must be a Buffer');
    if (this === b)
      return 0;
    return Buffer.compare(this, b);
  };
  Buffer.prototype.indexOf = function indexOf(val, byteOffset) {
    if (byteOffset > 0x7fffffff)
      byteOffset = 0x7fffffff;
    else if (byteOffset < -0x80000000)
      byteOffset = -0x80000000;
    byteOffset >>= 0;
    if (this.length === 0)
      return -1;
    if (byteOffset >= this.length)
      return -1;
    if (byteOffset < 0)
      byteOffset = Math.max(this.length + byteOffset, 0);
    if (typeof val === 'string') {
      if (val.length === 0)
        return -1;
      return String.prototype.indexOf.call(this, val, byteOffset);
    }
    if (Buffer.isBuffer(val)) {
      return arrayIndexOf(this, val, byteOffset);
    }
    if (typeof val === 'number') {
      if (Buffer.TYPED_ARRAY_SUPPORT && Uint8Array.prototype.indexOf === 'function') {
        return Uint8Array.prototype.indexOf.call(this, val, byteOffset);
      }
      return arrayIndexOf(this, [val], byteOffset);
    }
    function arrayIndexOf(arr, val, byteOffset) {
      var foundIndex = -1;
      for (var i = 0; byteOffset + i < arr.length; i++) {
        if (arr[byteOffset + i] === val[foundIndex === -1 ? 0 : i - foundIndex]) {
          if (foundIndex === -1)
            foundIndex = i;
          if (i - foundIndex + 1 === val.length)
            return byteOffset + foundIndex;
        } else {
          foundIndex = -1;
        }
      }
      return -1;
    }
    throw new TypeError('val must be string, number or Buffer');
  };
  Buffer.prototype.get = function get(offset) {
    console.log('.get() is deprecated. Access using array indexes instead.');
    return this.readUInt8(offset);
  };
  Buffer.prototype.set = function set(v, offset) {
    console.log('.set() is deprecated. Access using array indexes instead.');
    return this.writeUInt8(v, offset);
  };
  function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    var remaining = buf.length - offset;
    if (!length) {
      length = remaining;
    } else {
      length = Number(length);
      if (length > remaining) {
        length = remaining;
      }
    }
    var strLen = string.length;
    if (strLen % 2 !== 0)
      throw new Error('Invalid hex string');
    if (length > strLen / 2) {
      length = strLen / 2;
    }
    for (var i = 0; i < length; i++) {
      var parsed = parseInt(string.substr(i * 2, 2), 16);
      if (isNaN(parsed))
        throw new Error('Invalid hex string');
      buf[offset + i] = parsed;
    }
    return i;
  }
  function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
  }
  function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
  }
  function binaryWrite(buf, string, offset, length) {
    return asciiWrite(buf, string, offset, length);
  }
  function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
  }
  function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
  }
  Buffer.prototype.write = function write(string, offset, length, encoding) {
    if (offset === undefined) {
      encoding = 'utf8';
      length = this.length;
      offset = 0;
    } else if (length === undefined && typeof offset === 'string') {
      encoding = offset;
      length = this.length;
      offset = 0;
    } else if (isFinite(offset)) {
      offset = offset | 0;
      if (isFinite(length)) {
        length = length | 0;
        if (encoding === undefined)
          encoding = 'utf8';
      } else {
        encoding = length;
        length = undefined;
      }
    } else {
      var swap = encoding;
      encoding = offset;
      offset = length | 0;
      length = swap;
    }
    var remaining = this.length - offset;
    if (length === undefined || length > remaining)
      length = remaining;
    if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
      throw new RangeError('attempt to write outside buffer bounds');
    }
    if (!encoding)
      encoding = 'utf8';
    var loweredCase = false;
    for (; ; ) {
      switch (encoding) {
        case 'hex':
          return hexWrite(this, string, offset, length);
        case 'utf8':
        case 'utf-8':
          return utf8Write(this, string, offset, length);
        case 'ascii':
          return asciiWrite(this, string, offset, length);
        case 'binary':
          return binaryWrite(this, string, offset, length);
        case 'base64':
          return base64Write(this, string, offset, length);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return ucs2Write(this, string, offset, length);
        default:
          if (loweredCase)
            throw new TypeError('Unknown encoding: ' + encoding);
          encoding = ('' + encoding).toLowerCase();
          loweredCase = true;
      }
    }
  };
  Buffer.prototype.toJSON = function toJSON() {
    return {
      type: 'Buffer',
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) {
      return base64.fromByteArray(buf);
    } else {
      return base64.fromByteArray(buf.slice(start, end));
    }
  }
  function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    var res = [];
    var i = start;
    while (i < end) {
      var firstByte = buf[i];
      var codePoint = null;
      var bytesPerSequence = (firstByte > 0xEF) ? 4 : (firstByte > 0xDF) ? 3 : (firstByte > 0xBF) ? 2 : 1;
      if (i + bytesPerSequence <= end) {
        var secondByte,
            thirdByte,
            fourthByte,
            tempCodePoint;
        switch (bytesPerSequence) {
          case 1:
            if (firstByte < 0x80) {
              codePoint = firstByte;
            }
            break;
          case 2:
            secondByte = buf[i + 1];
            if ((secondByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F);
              if (tempCodePoint > 0x7F) {
                codePoint = tempCodePoint;
              }
            }
            break;
          case 3:
            secondByte = buf[i + 1];
            thirdByte = buf[i + 2];
            if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F);
              if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                codePoint = tempCodePoint;
              }
            }
            break;
          case 4:
            secondByte = buf[i + 1];
            thirdByte = buf[i + 2];
            fourthByte = buf[i + 3];
            if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F);
              if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                codePoint = tempCodePoint;
              }
            }
        }
      }
      if (codePoint === null) {
        codePoint = 0xFFFD;
        bytesPerSequence = 1;
      } else if (codePoint > 0xFFFF) {
        codePoint -= 0x10000;
        res.push(codePoint >>> 10 & 0x3FF | 0xD800);
        codePoint = 0xDC00 | codePoint & 0x3FF;
      }
      res.push(codePoint);
      i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
  }
  var MAX_ARGUMENTS_LENGTH = 0x1000;
  function decodeCodePointsArray(codePoints) {
    var len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) {
      return String.fromCharCode.apply(String, codePoints);
    }
    var res = '';
    var i = 0;
    while (i < len) {
      res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    }
    return res;
  }
  function asciiSlice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);
    for (var i = start; i < end; i++) {
      ret += String.fromCharCode(buf[i] & 0x7F);
    }
    return ret;
  }
  function binarySlice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);
    for (var i = start; i < end; i++) {
      ret += String.fromCharCode(buf[i]);
    }
    return ret;
  }
  function hexSlice(buf, start, end) {
    var len = buf.length;
    if (!start || start < 0)
      start = 0;
    if (!end || end < 0 || end > len)
      end = len;
    var out = '';
    for (var i = start; i < end; i++) {
      out += toHex(buf[i]);
    }
    return out;
  }
  function utf16leSlice(buf, start, end) {
    var bytes = buf.slice(start, end);
    var res = '';
    for (var i = 0; i < bytes.length; i += 2) {
      res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    }
    return res;
  }
  Buffer.prototype.slice = function slice(start, end) {
    var len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
      start += len;
      if (start < 0)
        start = 0;
    } else if (start > len) {
      start = len;
    }
    if (end < 0) {
      end += len;
      if (end < 0)
        end = 0;
    } else if (end > len) {
      end = len;
    }
    if (end < start)
      end = start;
    var newBuf;
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      newBuf = Buffer._augment(this.subarray(start, end));
    } else {
      var sliceLen = end - start;
      newBuf = new Buffer(sliceLen, undefined);
      for (var i = 0; i < sliceLen; i++) {
        newBuf[i] = this[i + start];
      }
    }
    if (newBuf.length)
      newBuf.parent = this.parent || this;
    return newBuf;
  };
  function checkOffset(offset, ext, length) {
    if ((offset % 1) !== 0 || offset < 0)
      throw new RangeError('offset is not uint');
    if (offset + ext > length)
      throw new RangeError('Trying to access beyond buffer length');
  }
  Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert)
      checkOffset(offset, byteLength, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while (++i < byteLength && (mul *= 0x100)) {
      val += this[offset + i] * mul;
    }
    return val;
  };
  Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) {
      checkOffset(offset, byteLength, this.length);
    }
    var val = this[offset + --byteLength];
    var mul = 1;
    while (byteLength > 0 && (mul *= 0x100)) {
      val += this[offset + --byteLength] * mul;
    }
    return val;
  };
  Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 1, this.length);
    return this[offset];
  };
  Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 2, this.length);
    return this[offset] | (this[offset + 1] << 8);
  };
  Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 2, this.length);
    return (this[offset] << 8) | this[offset + 1];
  };
  Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return ((this[offset]) | (this[offset + 1] << 8) | (this[offset + 2] << 16)) + (this[offset + 3] * 0x1000000);
  };
  Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return (this[offset] * 0x1000000) + ((this[offset + 1] << 16) | (this[offset + 2] << 8) | this[offset + 3]);
  };
  Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert)
      checkOffset(offset, byteLength, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while (++i < byteLength && (mul *= 0x100)) {
      val += this[offset + i] * mul;
    }
    mul *= 0x80;
    if (val >= mul)
      val -= Math.pow(2, 8 * byteLength);
    return val;
  };
  Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert)
      checkOffset(offset, byteLength, this.length);
    var i = byteLength;
    var mul = 1;
    var val = this[offset + --i];
    while (i > 0 && (mul *= 0x100)) {
      val += this[offset + --i] * mul;
    }
    mul *= 0x80;
    if (val >= mul)
      val -= Math.pow(2, 8 * byteLength);
    return val;
  };
  Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80))
      return (this[offset]);
    return ((0xff - this[offset] + 1) * -1);
  };
  Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 2, this.length);
    var val = this[offset] | (this[offset + 1] << 8);
    return (val & 0x8000) ? val | 0xFFFF0000 : val;
  };
  Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 2, this.length);
    var val = this[offset + 1] | (this[offset] << 8);
    return (val & 0x8000) ? val | 0xFFFF0000 : val;
  };
  Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return (this[offset]) | (this[offset + 1] << 8) | (this[offset + 2] << 16) | (this[offset + 3] << 24);
  };
  Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return (this[offset] << 24) | (this[offset + 1] << 16) | (this[offset + 2] << 8) | (this[offset + 3]);
  };
  Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
  };
  Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
  };
  Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
  };
  Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    if (!noAssert)
      checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
  };
  function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf))
      throw new TypeError('buffer must be a Buffer instance');
    if (value > max || value < min)
      throw new RangeError('value is out of bounds');
    if (offset + ext > buf.length)
      throw new RangeError('index out of range');
  }
  Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert)
      checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0);
    var mul = 1;
    var i = 0;
    this[offset] = value & 0xFF;
    while (++i < byteLength && (mul *= 0x100)) {
      this[offset + i] = (value / mul) & 0xFF;
    }
    return offset + byteLength;
  };
  Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert)
      checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0);
    var i = byteLength - 1;
    var mul = 1;
    this[offset + i] = value & 0xFF;
    while (--i >= 0 && (mul *= 0x100)) {
      this[offset + i] = (value / mul) & 0xFF;
    }
    return offset + byteLength;
  };
  Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 1, 0xff, 0);
    if (!Buffer.TYPED_ARRAY_SUPPORT)
      value = Math.floor(value);
    this[offset] = (value & 0xff);
    return offset + 1;
  };
  function objectWriteUInt16(buf, value, offset, littleEndian) {
    if (value < 0)
      value = 0xffff + value + 1;
    for (var i = 0,
        j = Math.min(buf.length - offset, 2); i < j; i++) {
      buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>> (littleEndian ? i : 1 - i) * 8;
    }
  }
  Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 2, 0xffff, 0);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value & 0xff);
      this[offset + 1] = (value >>> 8);
    } else {
      objectWriteUInt16(this, value, offset, true);
    }
    return offset + 2;
  };
  Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 2, 0xffff, 0);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value >>> 8);
      this[offset + 1] = (value & 0xff);
    } else {
      objectWriteUInt16(this, value, offset, false);
    }
    return offset + 2;
  };
  function objectWriteUInt32(buf, value, offset, littleEndian) {
    if (value < 0)
      value = 0xffffffff + value + 1;
    for (var i = 0,
        j = Math.min(buf.length - offset, 4); i < j; i++) {
      buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff;
    }
  }
  Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 4, 0xffffffff, 0);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset + 3] = (value >>> 24);
      this[offset + 2] = (value >>> 16);
      this[offset + 1] = (value >>> 8);
      this[offset] = (value & 0xff);
    } else {
      objectWriteUInt32(this, value, offset, true);
    }
    return offset + 4;
  };
  Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 4, 0xffffffff, 0);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value >>> 24);
      this[offset + 1] = (value >>> 16);
      this[offset + 2] = (value >>> 8);
      this[offset + 3] = (value & 0xff);
    } else {
      objectWriteUInt32(this, value, offset, false);
    }
    return offset + 4;
  };
  Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) {
      var limit = Math.pow(2, 8 * byteLength - 1);
      checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    var i = 0;
    var mul = 1;
    var sub = value < 0 ? 1 : 0;
    this[offset] = value & 0xFF;
    while (++i < byteLength && (mul *= 0x100)) {
      this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
  };
  Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) {
      var limit = Math.pow(2, 8 * byteLength - 1);
      checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    var i = byteLength - 1;
    var mul = 1;
    var sub = value < 0 ? 1 : 0;
    this[offset + i] = value & 0xFF;
    while (--i >= 0 && (mul *= 0x100)) {
      this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
  };
  Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 1, 0x7f, -0x80);
    if (!Buffer.TYPED_ARRAY_SUPPORT)
      value = Math.floor(value);
    if (value < 0)
      value = 0xff + value + 1;
    this[offset] = (value & 0xff);
    return offset + 1;
  };
  Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 2, 0x7fff, -0x8000);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value & 0xff);
      this[offset + 1] = (value >>> 8);
    } else {
      objectWriteUInt16(this, value, offset, true);
    }
    return offset + 2;
  };
  Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 2, 0x7fff, -0x8000);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value >>> 8);
      this[offset + 1] = (value & 0xff);
    } else {
      objectWriteUInt16(this, value, offset, false);
    }
    return offset + 2;
  };
  Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value & 0xff);
      this[offset + 1] = (value >>> 8);
      this[offset + 2] = (value >>> 16);
      this[offset + 3] = (value >>> 24);
    } else {
      objectWriteUInt32(this, value, offset, true);
    }
    return offset + 4;
  };
  Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert)
      checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
    if (value < 0)
      value = 0xffffffff + value + 1;
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value >>> 24);
      this[offset + 1] = (value >>> 16);
      this[offset + 2] = (value >>> 8);
      this[offset + 3] = (value & 0xff);
    } else {
      objectWriteUInt32(this, value, offset, false);
    }
    return offset + 4;
  };
  function checkIEEE754(buf, value, offset, ext, max, min) {
    if (value > max || value < min)
      throw new RangeError('value is out of bounds');
    if (offset + ext > buf.length)
      throw new RangeError('index out of range');
    if (offset < 0)
      throw new RangeError('index out of range');
  }
  function writeFloat(buf, value, offset, littleEndian, noAssert) {
    if (!noAssert) {
      checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
    }
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
  }
  Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
  };
  Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
  };
  function writeDouble(buf, value, offset, littleEndian, noAssert) {
    if (!noAssert) {
      checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
    }
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
  }
  Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
  };
  Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
  };
  Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!start)
      start = 0;
    if (!end && end !== 0)
      end = this.length;
    if (targetStart >= target.length)
      targetStart = target.length;
    if (!targetStart)
      targetStart = 0;
    if (end > 0 && end < start)
      end = start;
    if (end === start)
      return 0;
    if (target.length === 0 || this.length === 0)
      return 0;
    if (targetStart < 0) {
      throw new RangeError('targetStart out of bounds');
    }
    if (start < 0 || start >= this.length)
      throw new RangeError('sourceStart out of bounds');
    if (end < 0)
      throw new RangeError('sourceEnd out of bounds');
    if (end > this.length)
      end = this.length;
    if (target.length - targetStart < end - start) {
      end = target.length - targetStart + start;
    }
    var len = end - start;
    var i;
    if (this === target && start < targetStart && targetStart < end) {
      for (i = len - 1; i >= 0; i--) {
        target[i + targetStart] = this[i + start];
      }
    } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
      for (i = 0; i < len; i++) {
        target[i + targetStart] = this[i + start];
      }
    } else {
      target._set(this.subarray(start, start + len), targetStart);
    }
    return len;
  };
  Buffer.prototype.fill = function fill(value, start, end) {
    if (!value)
      value = 0;
    if (!start)
      start = 0;
    if (!end)
      end = this.length;
    if (end < start)
      throw new RangeError('end < start');
    if (end === start)
      return;
    if (this.length === 0)
      return;
    if (start < 0 || start >= this.length)
      throw new RangeError('start out of bounds');
    if (end < 0 || end > this.length)
      throw new RangeError('end out of bounds');
    var i;
    if (typeof value === 'number') {
      for (i = start; i < end; i++) {
        this[i] = value;
      }
    } else {
      var bytes = utf8ToBytes(value.toString());
      var len = bytes.length;
      for (i = start; i < end; i++) {
        this[i] = bytes[i % len];
      }
    }
    return this;
  };
  Buffer.prototype.toArrayBuffer = function toArrayBuffer() {
    if (typeof Uint8Array !== 'undefined') {
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        return (new Buffer(this)).buffer;
      } else {
        var buf = new Uint8Array(this.length);
        for (var i = 0,
            len = buf.length; i < len; i += 1) {
          buf[i] = this[i];
        }
        return buf.buffer;
      }
    } else {
      throw new TypeError('Buffer.toArrayBuffer not supported in this browser');
    }
  };
  var BP = Buffer.prototype;
  Buffer._augment = function _augment(arr) {
    arr.constructor = Buffer;
    arr._isBuffer = true;
    arr._set = arr.set;
    arr.get = BP.get;
    arr.set = BP.set;
    arr.write = BP.write;
    arr.toString = BP.toString;
    arr.toLocaleString = BP.toString;
    arr.toJSON = BP.toJSON;
    arr.equals = BP.equals;
    arr.compare = BP.compare;
    arr.indexOf = BP.indexOf;
    arr.copy = BP.copy;
    arr.slice = BP.slice;
    arr.readUIntLE = BP.readUIntLE;
    arr.readUIntBE = BP.readUIntBE;
    arr.readUInt8 = BP.readUInt8;
    arr.readUInt16LE = BP.readUInt16LE;
    arr.readUInt16BE = BP.readUInt16BE;
    arr.readUInt32LE = BP.readUInt32LE;
    arr.readUInt32BE = BP.readUInt32BE;
    arr.readIntLE = BP.readIntLE;
    arr.readIntBE = BP.readIntBE;
    arr.readInt8 = BP.readInt8;
    arr.readInt16LE = BP.readInt16LE;
    arr.readInt16BE = BP.readInt16BE;
    arr.readInt32LE = BP.readInt32LE;
    arr.readInt32BE = BP.readInt32BE;
    arr.readFloatLE = BP.readFloatLE;
    arr.readFloatBE = BP.readFloatBE;
    arr.readDoubleLE = BP.readDoubleLE;
    arr.readDoubleBE = BP.readDoubleBE;
    arr.writeUInt8 = BP.writeUInt8;
    arr.writeUIntLE = BP.writeUIntLE;
    arr.writeUIntBE = BP.writeUIntBE;
    arr.writeUInt16LE = BP.writeUInt16LE;
    arr.writeUInt16BE = BP.writeUInt16BE;
    arr.writeUInt32LE = BP.writeUInt32LE;
    arr.writeUInt32BE = BP.writeUInt32BE;
    arr.writeIntLE = BP.writeIntLE;
    arr.writeIntBE = BP.writeIntBE;
    arr.writeInt8 = BP.writeInt8;
    arr.writeInt16LE = BP.writeInt16LE;
    arr.writeInt16BE = BP.writeInt16BE;
    arr.writeInt32LE = BP.writeInt32LE;
    arr.writeInt32BE = BP.writeInt32BE;
    arr.writeFloatLE = BP.writeFloatLE;
    arr.writeFloatBE = BP.writeFloatBE;
    arr.writeDoubleLE = BP.writeDoubleLE;
    arr.writeDoubleBE = BP.writeDoubleBE;
    arr.fill = BP.fill;
    arr.inspect = BP.inspect;
    arr.toArrayBuffer = BP.toArrayBuffer;
    return arr;
  };
  var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;
  function base64clean(str) {
    str = stringtrim(str).replace(INVALID_BASE64_RE, '');
    if (str.length < 2)
      return '';
    while (str.length % 4 !== 0) {
      str = str + '=';
    }
    return str;
  }
  function stringtrim(str) {
    if (str.trim)
      return str.trim();
    return str.replace(/^\s+|\s+$/g, '');
  }
  function toHex(n) {
    if (n < 16)
      return '0' + n.toString(16);
    return n.toString(16);
  }
  function utf8ToBytes(string, units) {
    units = units || Infinity;
    var codePoint;
    var length = string.length;
    var leadSurrogate = null;
    var bytes = [];
    for (var i = 0; i < length; i++) {
      codePoint = string.charCodeAt(i);
      if (codePoint > 0xD7FF && codePoint < 0xE000) {
        if (!leadSurrogate) {
          if (codePoint > 0xDBFF) {
            if ((units -= 3) > -1)
              bytes.push(0xEF, 0xBF, 0xBD);
            continue;
          } else if (i + 1 === length) {
            if ((units -= 3) > -1)
              bytes.push(0xEF, 0xBF, 0xBD);
            continue;
          }
          leadSurrogate = codePoint;
          continue;
        }
        if (codePoint < 0xDC00) {
          if ((units -= 3) > -1)
            bytes.push(0xEF, 0xBF, 0xBD);
          leadSurrogate = codePoint;
          continue;
        }
        codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
      } else if (leadSurrogate) {
        if ((units -= 3) > -1)
          bytes.push(0xEF, 0xBF, 0xBD);
      }
      leadSurrogate = null;
      if (codePoint < 0x80) {
        if ((units -= 1) < 0)
          break;
        bytes.push(codePoint);
      } else if (codePoint < 0x800) {
        if ((units -= 2) < 0)
          break;
        bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
      } else if (codePoint < 0x10000) {
        if ((units -= 3) < 0)
          break;
        bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
      } else if (codePoint < 0x110000) {
        if ((units -= 4) < 0)
          break;
        bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
      } else {
        throw new Error('Invalid code point');
      }
    }
    return bytes;
  }
  function asciiToBytes(str) {
    var byteArray = [];
    for (var i = 0; i < str.length; i++) {
      byteArray.push(str.charCodeAt(i) & 0xFF);
    }
    return byteArray;
  }
  function utf16leToBytes(str, units) {
    var c,
        hi,
        lo;
    var byteArray = [];
    for (var i = 0; i < str.length; i++) {
      if ((units -= 2) < 0)
        break;
      c = str.charCodeAt(i);
      hi = c >> 8;
      lo = c % 256;
      byteArray.push(lo);
      byteArray.push(hi);
    }
    return byteArray;
  }
  function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
  }
  function blitBuffer(src, dst, offset, length) {
    for (var i = 0; i < length; i++) {
      if ((i + offset >= dst.length) || (i >= src.length))
        break;
      dst[i + offset] = src[i];
    }
    return i;
  }
  return module.exports;
});

$__System.registerDynamic("bb", ["ba"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('ba');
  return module.exports;
});

$__System.registerDynamic("bc", ["bb"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__System._nodeRequire ? $__System._nodeRequire('buffer') : $__require('bb');
  return module.exports;
});

$__System.registerDynamic("3", ["bc"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('bc');
  return module.exports;
});

$__System.registerDynamic("bd", ["6", "b2", "b3", "b4", "3", "11"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(Buffer, process) {
    var fs = $__require('6');
    var LRU = $__require('b2');
    var resolveCommand = $__require('b3');
    var mixIn = $__require('b4');
    var isWin = process.platform === 'win32';
    var shebangCache = LRU({
      max: 50,
      maxAge: 30 * 1000
    });
    function readShebang(command) {
      var buffer;
      var fd;
      var match;
      var shebang;
      if (shebangCache.has(command)) {
        return shebangCache.get(command);
      }
      buffer = new Buffer(150);
      try {
        fd = fs.openSync(command, 'r');
        fs.readSync(fd, buffer, 0, 150, 0);
        fs.closeSync(fd);
      } catch (e) {}
      match = buffer.toString().trim().match(/\#\!(.+)/i);
      if (match) {
        shebang = match[1].replace(/\/usr\/bin\/env\s+/i, '');
      }
      shebangCache.set(command, shebang);
      return shebang;
    }
    function escapeArg(arg, quote) {
      arg = '' + arg;
      if (!quote) {
        arg = arg.replace(/([\(\)%!\^<>&|;,"' ])/g, '^$1');
      } else {
        arg = arg.replace(/(\\*)"/gi, '$1$1\\"');
        arg = arg.replace(/(\\*)$/, '$1$1');
        arg = '"' + arg + '"';
      }
      return arg;
    }
    function escapeCommand(command) {
      return /^[a-z0-9_-]+$/i.test(command) ? command : escapeArg(command, true);
    }
    function parseCall(command, args, options) {
      var shebang;
      var applyQuotes;
      var file;
      var original;
      if (args && !Array.isArray(args)) {
        options = args;
        args = null;
      }
      args = args ? args.slice(0) : [];
      options = mixIn({}, options);
      original = command;
      if (isWin) {
        file = resolveCommand(command);
        file = file || resolveCommand(command, true);
        shebang = file && readShebang(file);
        if (shebang) {
          args.unshift(file);
          command = shebang;
        }
        applyQuotes = command !== 'echo';
        command = escapeCommand(command);
        args = args.map(function(arg) {
          return escapeArg(arg, applyQuotes);
        });
        args = ['/s', '/c', '"' + command + (args.length ? ' ' + args.join(' ') : '') + '"'];
        command = process.env.comspec || 'cmd.exe';
        options.windowsVerbatimArguments = true;
      }
      return {
        command: command,
        args: args,
        options: options,
        file: file,
        original: original
      };
    }
    module.exports = parseCall;
  })($__require('3').Buffer, $__require('11'));
  return module.exports;
});

$__System.registerDynamic("be", ["11"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var isWin = process.platform === 'win32';
    function notFoundError(command, syscall) {
      var err;
      err = new Error(syscall + ' ' + command + ' ENOENT');
      err.code = err.errno = 'ENOENT';
      err.syscall = syscall + ' ' + command;
      return err;
    }
    function hookChildProcess(cp, parsed) {
      var originalEmit;
      if (!isWin) {
        return;
      }
      originalEmit = cp.emit;
      cp.emit = function(name, arg1) {
        var err;
        if (name === 'exit') {
          err = verifyENOENT(arg1, parsed, 'spawn');
          if (err) {
            return originalEmit.call(cp, 'error', err);
          }
        }
        return originalEmit.apply(cp, arguments);
      };
    }
    function verifyENOENT(status, parsed, syscall) {
      if (isWin && status === 1 && !parsed.file) {
        return notFoundError(parsed.original, syscall);
      }
      return null;
    }
    module.exports.hookChildProcess = hookChildProcess;
    module.exports.verifyENOENT = verifyENOENT;
    module.exports.notFoundError = notFoundError;
  })($__require('11'));
  return module.exports;
});

$__System.registerDynamic("bf", ["97", "bd", "be", "11"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    var cp = $__require('97');
    var parse = $__require('bd');
    var enoent = $__require('be');
    function spawn(command, args, options) {
      var parsed;
      var spawned;
      parsed = parse(command, args, options);
      spawned = cp.spawn(parsed.command, parsed.args, parsed.options);
      enoent.hookChildProcess(spawned, parsed);
      return spawned;
    }
    module.exports = spawn;
    module.exports.spawn = spawn;
    module.exports._parse = parse;
    module.exports._enoent = enoent;
  })($__require('11'));
  return module.exports;
});

$__System.registerDynamic("c0", ["bf"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('bf');
  return module.exports;
});

$__System.registerDynamic("c1", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var process = module.exports = {};
  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;
  function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
      queue = currentQueue.concat(queue);
    } else {
      queueIndex = -1;
    }
    if (queue.length) {
      drainQueue();
    }
  }
  function drainQueue() {
    if (draining) {
      return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while (len) {
      currentQueue = queue;
      queue = [];
      while (++queueIndex < len) {
        if (currentQueue) {
          currentQueue[queueIndex].run();
        }
      }
      queueIndex = -1;
      len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
  }
  process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
      for (var i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
      }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
      setTimeout(drainQueue, 0);
    }
  };
  function Item(fun, array) {
    this.fun = fun;
    this.array = array;
  }
  Item.prototype.run = function() {
    this.fun.apply(null, this.array);
  };
  process.title = 'browser';
  process.browser = true;
  process.env = {};
  process.argv = [];
  process.version = '';
  process.versions = {};
  function noop() {}
  process.on = noop;
  process.addListener = noop;
  process.once = noop;
  process.off = noop;
  process.removeListener = noop;
  process.removeAllListeners = noop;
  process.emit = noop;
  process.binding = function(name) {
    throw new Error('process.binding is not supported');
  };
  process.cwd = function() {
    return '/';
  };
  process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
  };
  process.umask = function() {
    return 0;
  };
  return module.exports;
});

$__System.registerDynamic("c2", ["c1"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('c1');
  return module.exports;
});

$__System.registerDynamic("c3", ["c2"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__System._nodeRequire ? process : $__require('c2');
  return module.exports;
});

$__System.registerDynamic("11", ["c3"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('c3');
  return module.exports;
});

$__System.registerDynamic("c4", ["11"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  "format cjs";
  (function(process) {
    (function(definition) {
      "use strict";
      if (typeof bootstrap === "function") {
        bootstrap("promise", definition);
      } else if (typeof exports === "object" && typeof module === "object") {
        module.exports = definition();
      } else if (typeof define === "function" && define.amd) {
        define(definition);
      } else if (typeof ses !== "undefined") {
        if (!ses.ok()) {
          return;
        } else {
          ses.makeQ = definition;
        }
      } else if (typeof window !== "undefined" || typeof self !== "undefined") {
        var global = typeof window !== "undefined" ? window : self;
        var previousQ = global.Q;
        global.Q = definition();
        global.Q.noConflict = function() {
          global.Q = previousQ;
          return this;
        };
      } else {
        throw new Error("This environment was not anticipated by Q. Please file a bug.");
      }
    })(function() {
      "use strict";
      var hasStacks = false;
      try {
        throw new Error();
      } catch (e) {
        hasStacks = !!e.stack;
      }
      var qStartingLine = captureLine();
      var qFileName;
      var noop = function() {};
      var nextTick = (function() {
        var head = {
          task: void 0,
          next: null
        };
        var tail = head;
        var flushing = false;
        var requestTick = void 0;
        var isNodeJS = false;
        var laterQueue = [];
        function flush() {
          var task,
              domain;
          while (head.next) {
            head = head.next;
            task = head.task;
            head.task = void 0;
            domain = head.domain;
            if (domain) {
              head.domain = void 0;
              domain.enter();
            }
            runSingle(task, domain);
          }
          while (laterQueue.length) {
            task = laterQueue.pop();
            runSingle(task);
          }
          flushing = false;
        }
        function runSingle(task, domain) {
          try {
            task();
          } catch (e) {
            if (isNodeJS) {
              if (domain) {
                domain.exit();
              }
              setTimeout(flush, 0);
              if (domain) {
                domain.enter();
              }
              throw e;
            } else {
              setTimeout(function() {
                throw e;
              }, 0);
            }
          }
          if (domain) {
            domain.exit();
          }
        }
        nextTick = function(task) {
          tail = tail.next = {
            task: task,
            domain: isNodeJS && process.domain,
            next: null
          };
          if (!flushing) {
            flushing = true;
            requestTick();
          }
        };
        if (typeof process === "object" && process.toString() === "[object process]" && process.nextTick) {
          isNodeJS = true;
          requestTick = function() {
            process.nextTick(flush);
          };
        } else if (typeof setImmediate === "function") {
          if (typeof window !== "undefined") {
            requestTick = setImmediate.bind(window, flush);
          } else {
            requestTick = function() {
              setImmediate(flush);
            };
          }
        } else if (typeof MessageChannel !== "undefined") {
          var channel = new MessageChannel();
          channel.port1.onmessage = function() {
            requestTick = requestPortTick;
            channel.port1.onmessage = flush;
            flush();
          };
          var requestPortTick = function() {
            channel.port2.postMessage(0);
          };
          requestTick = function() {
            setTimeout(flush, 0);
            requestPortTick();
          };
        } else {
          requestTick = function() {
            setTimeout(flush, 0);
          };
        }
        nextTick.runAfter = function(task) {
          laterQueue.push(task);
          if (!flushing) {
            flushing = true;
            requestTick();
          }
        };
        return nextTick;
      })();
      var call = Function.call;
      function uncurryThis(f) {
        return function() {
          return call.apply(f, arguments);
        };
      }
      var array_slice = uncurryThis(Array.prototype.slice);
      var array_reduce = uncurryThis(Array.prototype.reduce || function(callback, basis) {
        var index = 0,
            length = this.length;
        if (arguments.length === 1) {
          do {
            if (index in this) {
              basis = this[index++];
              break;
            }
            if (++index >= length) {
              throw new TypeError();
            }
          } while (1);
        }
        for (; index < length; index++) {
          if (index in this) {
            basis = callback(basis, this[index], index);
          }
        }
        return basis;
      });
      var array_indexOf = uncurryThis(Array.prototype.indexOf || function(value) {
        for (var i = 0; i < this.length; i++) {
          if (this[i] === value) {
            return i;
          }
        }
        return -1;
      });
      var array_map = uncurryThis(Array.prototype.map || function(callback, thisp) {
        var self = this;
        var collect = [];
        array_reduce(self, function(undefined, value, index) {
          collect.push(callback.call(thisp, value, index, self));
        }, void 0);
        return collect;
      });
      var object_create = Object.create || function(prototype) {
        function Type() {}
        Type.prototype = prototype;
        return new Type();
      };
      var object_hasOwnProperty = uncurryThis(Object.prototype.hasOwnProperty);
      var object_keys = Object.keys || function(object) {
        var keys = [];
        for (var key in object) {
          if (object_hasOwnProperty(object, key)) {
            keys.push(key);
          }
        }
        return keys;
      };
      var object_toString = uncurryThis(Object.prototype.toString);
      function isObject(value) {
        return value === Object(value);
      }
      function isStopIteration(exception) {
        return (object_toString(exception) === "[object StopIteration]" || exception instanceof QReturnValue);
      }
      var QReturnValue;
      if (typeof ReturnValue !== "undefined") {
        QReturnValue = ReturnValue;
      } else {
        QReturnValue = function(value) {
          this.value = value;
        };
      }
      var STACK_JUMP_SEPARATOR = "From previous event:";
      function makeStackTraceLong(error, promise) {
        if (hasStacks && promise.stack && typeof error === "object" && error !== null && error.stack && error.stack.indexOf(STACK_JUMP_SEPARATOR) === -1) {
          var stacks = [];
          for (var p = promise; !!p; p = p.source) {
            if (p.stack) {
              stacks.unshift(p.stack);
            }
          }
          stacks.unshift(error.stack);
          var concatedStacks = stacks.join("\n" + STACK_JUMP_SEPARATOR + "\n");
          error.stack = filterStackString(concatedStacks);
        }
      }
      function filterStackString(stackString) {
        var lines = stackString.split("\n");
        var desiredLines = [];
        for (var i = 0; i < lines.length; ++i) {
          var line = lines[i];
          if (!isInternalFrame(line) && !isNodeFrame(line) && line) {
            desiredLines.push(line);
          }
        }
        return desiredLines.join("\n");
      }
      function isNodeFrame(stackLine) {
        return stackLine.indexOf("(module.js:") !== -1 || stackLine.indexOf("(node.js:") !== -1;
      }
      function getFileNameAndLineNumber(stackLine) {
        var attempt1 = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(stackLine);
        if (attempt1) {
          return [attempt1[1], Number(attempt1[2])];
        }
        var attempt2 = /at ([^ ]+):(\d+):(?:\d+)$/.exec(stackLine);
        if (attempt2) {
          return [attempt2[1], Number(attempt2[2])];
        }
        var attempt3 = /.*@(.+):(\d+)$/.exec(stackLine);
        if (attempt3) {
          return [attempt3[1], Number(attempt3[2])];
        }
      }
      function isInternalFrame(stackLine) {
        var fileNameAndLineNumber = getFileNameAndLineNumber(stackLine);
        if (!fileNameAndLineNumber) {
          return false;
        }
        var fileName = fileNameAndLineNumber[0];
        var lineNumber = fileNameAndLineNumber[1];
        return fileName === qFileName && lineNumber >= qStartingLine && lineNumber <= qEndingLine;
      }
      function captureLine() {
        if (!hasStacks) {
          return;
        }
        try {
          throw new Error();
        } catch (e) {
          var lines = e.stack.split("\n");
          var firstLine = lines[0].indexOf("@") > 0 ? lines[1] : lines[2];
          var fileNameAndLineNumber = getFileNameAndLineNumber(firstLine);
          if (!fileNameAndLineNumber) {
            return;
          }
          qFileName = fileNameAndLineNumber[0];
          return fileNameAndLineNumber[1];
        }
      }
      function deprecate(callback, name, alternative) {
        return function() {
          if (typeof console !== "undefined" && typeof console.warn === "function") {
            console.warn(name + " is deprecated, use " + alternative + " instead.", new Error("").stack);
          }
          return callback.apply(callback, arguments);
        };
      }
      function Q(value) {
        if (value instanceof Promise) {
          return value;
        }
        if (isPromiseAlike(value)) {
          return coerce(value);
        } else {
          return fulfill(value);
        }
      }
      Q.resolve = Q;
      Q.nextTick = nextTick;
      Q.longStackSupport = false;
      if (typeof process === "object" && process && process.env && process.env.Q_DEBUG) {
        Q.longStackSupport = true;
      }
      Q.defer = defer;
      function defer() {
        var messages = [],
            progressListeners = [],
            resolvedPromise;
        var deferred = object_create(defer.prototype);
        var promise = object_create(Promise.prototype);
        promise.promiseDispatch = function(resolve, op, operands) {
          var args = array_slice(arguments);
          if (messages) {
            messages.push(args);
            if (op === "when" && operands[1]) {
              progressListeners.push(operands[1]);
            }
          } else {
            Q.nextTick(function() {
              resolvedPromise.promiseDispatch.apply(resolvedPromise, args);
            });
          }
        };
        promise.valueOf = function() {
          if (messages) {
            return promise;
          }
          var nearerValue = nearer(resolvedPromise);
          if (isPromise(nearerValue)) {
            resolvedPromise = nearerValue;
          }
          return nearerValue;
        };
        promise.inspect = function() {
          if (!resolvedPromise) {
            return {state: "pending"};
          }
          return resolvedPromise.inspect();
        };
        if (Q.longStackSupport && hasStacks) {
          try {
            throw new Error();
          } catch (e) {
            promise.stack = e.stack.substring(e.stack.indexOf("\n") + 1);
          }
        }
        function become(newPromise) {
          resolvedPromise = newPromise;
          promise.source = newPromise;
          array_reduce(messages, function(undefined, message) {
            Q.nextTick(function() {
              newPromise.promiseDispatch.apply(newPromise, message);
            });
          }, void 0);
          messages = void 0;
          progressListeners = void 0;
        }
        deferred.promise = promise;
        deferred.resolve = function(value) {
          if (resolvedPromise) {
            return;
          }
          become(Q(value));
        };
        deferred.fulfill = function(value) {
          if (resolvedPromise) {
            return;
          }
          become(fulfill(value));
        };
        deferred.reject = function(reason) {
          if (resolvedPromise) {
            return;
          }
          become(reject(reason));
        };
        deferred.notify = function(progress) {
          if (resolvedPromise) {
            return;
          }
          array_reduce(progressListeners, function(undefined, progressListener) {
            Q.nextTick(function() {
              progressListener(progress);
            });
          }, void 0);
        };
        return deferred;
      }
      defer.prototype.makeNodeResolver = function() {
        var self = this;
        return function(error, value) {
          if (error) {
            self.reject(error);
          } else if (arguments.length > 2) {
            self.resolve(array_slice(arguments, 1));
          } else {
            self.resolve(value);
          }
        };
      };
      Q.Promise = promise;
      Q.promise = promise;
      function promise(resolver) {
        if (typeof resolver !== "function") {
          throw new TypeError("resolver must be a function.");
        }
        var deferred = defer();
        try {
          resolver(deferred.resolve, deferred.reject, deferred.notify);
        } catch (reason) {
          deferred.reject(reason);
        }
        return deferred.promise;
      }
      promise.race = race;
      promise.all = all;
      promise.reject = reject;
      promise.resolve = Q;
      Q.passByCopy = function(object) {
        return object;
      };
      Promise.prototype.passByCopy = function() {
        return this;
      };
      Q.join = function(x, y) {
        return Q(x).join(y);
      };
      Promise.prototype.join = function(that) {
        return Q([this, that]).spread(function(x, y) {
          if (x === y) {
            return x;
          } else {
            throw new Error("Can't join: not the same: " + x + " " + y);
          }
        });
      };
      Q.race = race;
      function race(answerPs) {
        return promise(function(resolve, reject) {
          for (var i = 0,
              len = answerPs.length; i < len; i++) {
            Q(answerPs[i]).then(resolve, reject);
          }
        });
      }
      Promise.prototype.race = function() {
        return this.then(Q.race);
      };
      Q.makePromise = Promise;
      function Promise(descriptor, fallback, inspect) {
        if (fallback === void 0) {
          fallback = function(op) {
            return reject(new Error("Promise does not support operation: " + op));
          };
        }
        if (inspect === void 0) {
          inspect = function() {
            return {state: "unknown"};
          };
        }
        var promise = object_create(Promise.prototype);
        promise.promiseDispatch = function(resolve, op, args) {
          var result;
          try {
            if (descriptor[op]) {
              result = descriptor[op].apply(promise, args);
            } else {
              result = fallback.call(promise, op, args);
            }
          } catch (exception) {
            result = reject(exception);
          }
          if (resolve) {
            resolve(result);
          }
        };
        promise.inspect = inspect;
        if (inspect) {
          var inspected = inspect();
          if (inspected.state === "rejected") {
            promise.exception = inspected.reason;
          }
          promise.valueOf = function() {
            var inspected = inspect();
            if (inspected.state === "pending" || inspected.state === "rejected") {
              return promise;
            }
            return inspected.value;
          };
        }
        return promise;
      }
      Promise.prototype.toString = function() {
        return "[object Promise]";
      };
      Promise.prototype.then = function(fulfilled, rejected, progressed) {
        var self = this;
        var deferred = defer();
        var done = false;
        function _fulfilled(value) {
          try {
            return typeof fulfilled === "function" ? fulfilled(value) : value;
          } catch (exception) {
            return reject(exception);
          }
        }
        function _rejected(exception) {
          if (typeof rejected === "function") {
            makeStackTraceLong(exception, self);
            try {
              return rejected(exception);
            } catch (newException) {
              return reject(newException);
            }
          }
          return reject(exception);
        }
        function _progressed(value) {
          return typeof progressed === "function" ? progressed(value) : value;
        }
        Q.nextTick(function() {
          self.promiseDispatch(function(value) {
            if (done) {
              return;
            }
            done = true;
            deferred.resolve(_fulfilled(value));
          }, "when", [function(exception) {
            if (done) {
              return;
            }
            done = true;
            deferred.resolve(_rejected(exception));
          }]);
        });
        self.promiseDispatch(void 0, "when", [void 0, function(value) {
          var newValue;
          var threw = false;
          try {
            newValue = _progressed(value);
          } catch (e) {
            threw = true;
            if (Q.onerror) {
              Q.onerror(e);
            } else {
              throw e;
            }
          }
          if (!threw) {
            deferred.notify(newValue);
          }
        }]);
        return deferred.promise;
      };
      Q.tap = function(promise, callback) {
        return Q(promise).tap(callback);
      };
      Promise.prototype.tap = function(callback) {
        callback = Q(callback);
        return this.then(function(value) {
          return callback.fcall(value).thenResolve(value);
        });
      };
      Q.when = when;
      function when(value, fulfilled, rejected, progressed) {
        return Q(value).then(fulfilled, rejected, progressed);
      }
      Promise.prototype.thenResolve = function(value) {
        return this.then(function() {
          return value;
        });
      };
      Q.thenResolve = function(promise, value) {
        return Q(promise).thenResolve(value);
      };
      Promise.prototype.thenReject = function(reason) {
        return this.then(function() {
          throw reason;
        });
      };
      Q.thenReject = function(promise, reason) {
        return Q(promise).thenReject(reason);
      };
      Q.nearer = nearer;
      function nearer(value) {
        if (isPromise(value)) {
          var inspected = value.inspect();
          if (inspected.state === "fulfilled") {
            return inspected.value;
          }
        }
        return value;
      }
      Q.isPromise = isPromise;
      function isPromise(object) {
        return object instanceof Promise;
      }
      Q.isPromiseAlike = isPromiseAlike;
      function isPromiseAlike(object) {
        return isObject(object) && typeof object.then === "function";
      }
      Q.isPending = isPending;
      function isPending(object) {
        return isPromise(object) && object.inspect().state === "pending";
      }
      Promise.prototype.isPending = function() {
        return this.inspect().state === "pending";
      };
      Q.isFulfilled = isFulfilled;
      function isFulfilled(object) {
        return !isPromise(object) || object.inspect().state === "fulfilled";
      }
      Promise.prototype.isFulfilled = function() {
        return this.inspect().state === "fulfilled";
      };
      Q.isRejected = isRejected;
      function isRejected(object) {
        return isPromise(object) && object.inspect().state === "rejected";
      }
      Promise.prototype.isRejected = function() {
        return this.inspect().state === "rejected";
      };
      var unhandledReasons = [];
      var unhandledRejections = [];
      var reportedUnhandledRejections = [];
      var trackUnhandledRejections = true;
      function resetUnhandledRejections() {
        unhandledReasons.length = 0;
        unhandledRejections.length = 0;
        if (!trackUnhandledRejections) {
          trackUnhandledRejections = true;
        }
      }
      function trackRejection(promise, reason) {
        if (!trackUnhandledRejections) {
          return;
        }
        if (typeof process === "object" && typeof process.emit === "function") {
          Q.nextTick.runAfter(function() {
            if (array_indexOf(unhandledRejections, promise) !== -1) {
              process.emit("unhandledRejection", reason, promise);
              reportedUnhandledRejections.push(promise);
            }
          });
        }
        unhandledRejections.push(promise);
        if (reason && typeof reason.stack !== "undefined") {
          unhandledReasons.push(reason.stack);
        } else {
          unhandledReasons.push("(no stack) " + reason);
        }
      }
      function untrackRejection(promise) {
        if (!trackUnhandledRejections) {
          return;
        }
        var at = array_indexOf(unhandledRejections, promise);
        if (at !== -1) {
          if (typeof process === "object" && typeof process.emit === "function") {
            Q.nextTick.runAfter(function() {
              var atReport = array_indexOf(reportedUnhandledRejections, promise);
              if (atReport !== -1) {
                process.emit("rejectionHandled", unhandledReasons[at], promise);
                reportedUnhandledRejections.splice(atReport, 1);
              }
            });
          }
          unhandledRejections.splice(at, 1);
          unhandledReasons.splice(at, 1);
        }
      }
      Q.resetUnhandledRejections = resetUnhandledRejections;
      Q.getUnhandledReasons = function() {
        return unhandledReasons.slice();
      };
      Q.stopUnhandledRejectionTracking = function() {
        resetUnhandledRejections();
        trackUnhandledRejections = false;
      };
      resetUnhandledRejections();
      Q.reject = reject;
      function reject(reason) {
        var rejection = Promise({"when": function(rejected) {
            if (rejected) {
              untrackRejection(this);
            }
            return rejected ? rejected(reason) : this;
          }}, function fallback() {
          return this;
        }, function inspect() {
          return {
            state: "rejected",
            reason: reason
          };
        });
        trackRejection(rejection, reason);
        return rejection;
      }
      Q.fulfill = fulfill;
      function fulfill(value) {
        return Promise({
          "when": function() {
            return value;
          },
          "get": function(name) {
            return value[name];
          },
          "set": function(name, rhs) {
            value[name] = rhs;
          },
          "delete": function(name) {
            delete value[name];
          },
          "post": function(name, args) {
            if (name === null || name === void 0) {
              return value.apply(void 0, args);
            } else {
              return value[name].apply(value, args);
            }
          },
          "apply": function(thisp, args) {
            return value.apply(thisp, args);
          },
          "keys": function() {
            return object_keys(value);
          }
        }, void 0, function inspect() {
          return {
            state: "fulfilled",
            value: value
          };
        });
      }
      function coerce(promise) {
        var deferred = defer();
        Q.nextTick(function() {
          try {
            promise.then(deferred.resolve, deferred.reject, deferred.notify);
          } catch (exception) {
            deferred.reject(exception);
          }
        });
        return deferred.promise;
      }
      Q.master = master;
      function master(object) {
        return Promise({"isDef": function() {}}, function fallback(op, args) {
          return dispatch(object, op, args);
        }, function() {
          return Q(object).inspect();
        });
      }
      Q.spread = spread;
      function spread(value, fulfilled, rejected) {
        return Q(value).spread(fulfilled, rejected);
      }
      Promise.prototype.spread = function(fulfilled, rejected) {
        return this.all().then(function(array) {
          return fulfilled.apply(void 0, array);
        }, rejected);
      };
      Q.async = async;
      function async(makeGenerator) {
        return function() {
          function continuer(verb, arg) {
            var result;
            if (typeof StopIteration === "undefined") {
              try {
                result = generator[verb](arg);
              } catch (exception) {
                return reject(exception);
              }
              if (result.done) {
                return Q(result.value);
              } else {
                return when(result.value, callback, errback);
              }
            } else {
              try {
                result = generator[verb](arg);
              } catch (exception) {
                if (isStopIteration(exception)) {
                  return Q(exception.value);
                } else {
                  return reject(exception);
                }
              }
              return when(result, callback, errback);
            }
          }
          var generator = makeGenerator.apply(this, arguments);
          var callback = continuer.bind(continuer, "next");
          var errback = continuer.bind(continuer, "throw");
          return callback();
        };
      }
      Q.spawn = spawn;
      function spawn(makeGenerator) {
        Q.done(Q.async(makeGenerator)());
      }
      Q["return"] = _return;
      function _return(value) {
        throw new QReturnValue(value);
      }
      Q.promised = promised;
      function promised(callback) {
        return function() {
          return spread([this, all(arguments)], function(self, args) {
            return callback.apply(self, args);
          });
        };
      }
      Q.dispatch = dispatch;
      function dispatch(object, op, args) {
        return Q(object).dispatch(op, args);
      }
      Promise.prototype.dispatch = function(op, args) {
        var self = this;
        var deferred = defer();
        Q.nextTick(function() {
          self.promiseDispatch(deferred.resolve, op, args);
        });
        return deferred.promise;
      };
      Q.get = function(object, key) {
        return Q(object).dispatch("get", [key]);
      };
      Promise.prototype.get = function(key) {
        return this.dispatch("get", [key]);
      };
      Q.set = function(object, key, value) {
        return Q(object).dispatch("set", [key, value]);
      };
      Promise.prototype.set = function(key, value) {
        return this.dispatch("set", [key, value]);
      };
      Q.del = Q["delete"] = function(object, key) {
        return Q(object).dispatch("delete", [key]);
      };
      Promise.prototype.del = Promise.prototype["delete"] = function(key) {
        return this.dispatch("delete", [key]);
      };
      Q.mapply = Q.post = function(object, name, args) {
        return Q(object).dispatch("post", [name, args]);
      };
      Promise.prototype.mapply = Promise.prototype.post = function(name, args) {
        return this.dispatch("post", [name, args]);
      };
      Q.send = Q.mcall = Q.invoke = function(object, name) {
        return Q(object).dispatch("post", [name, array_slice(arguments, 2)]);
      };
      Promise.prototype.send = Promise.prototype.mcall = Promise.prototype.invoke = function(name) {
        return this.dispatch("post", [name, array_slice(arguments, 1)]);
      };
      Q.fapply = function(object, args) {
        return Q(object).dispatch("apply", [void 0, args]);
      };
      Promise.prototype.fapply = function(args) {
        return this.dispatch("apply", [void 0, args]);
      };
      Q["try"] = Q.fcall = function(object) {
        return Q(object).dispatch("apply", [void 0, array_slice(arguments, 1)]);
      };
      Promise.prototype.fcall = function() {
        return this.dispatch("apply", [void 0, array_slice(arguments)]);
      };
      Q.fbind = function(object) {
        var promise = Q(object);
        var args = array_slice(arguments, 1);
        return function fbound() {
          return promise.dispatch("apply", [this, args.concat(array_slice(arguments))]);
        };
      };
      Promise.prototype.fbind = function() {
        var promise = this;
        var args = array_slice(arguments);
        return function fbound() {
          return promise.dispatch("apply", [this, args.concat(array_slice(arguments))]);
        };
      };
      Q.keys = function(object) {
        return Q(object).dispatch("keys", []);
      };
      Promise.prototype.keys = function() {
        return this.dispatch("keys", []);
      };
      Q.all = all;
      function all(promises) {
        return when(promises, function(promises) {
          var pendingCount = 0;
          var deferred = defer();
          array_reduce(promises, function(undefined, promise, index) {
            var snapshot;
            if (isPromise(promise) && (snapshot = promise.inspect()).state === "fulfilled") {
              promises[index] = snapshot.value;
            } else {
              ++pendingCount;
              when(promise, function(value) {
                promises[index] = value;
                if (--pendingCount === 0) {
                  deferred.resolve(promises);
                }
              }, deferred.reject, function(progress) {
                deferred.notify({
                  index: index,
                  value: progress
                });
              });
            }
          }, void 0);
          if (pendingCount === 0) {
            deferred.resolve(promises);
          }
          return deferred.promise;
        });
      }
      Promise.prototype.all = function() {
        return all(this);
      };
      Q.any = any;
      function any(promises) {
        if (promises.length === 0) {
          return Q.resolve();
        }
        var deferred = Q.defer();
        var pendingCount = 0;
        array_reduce(promises, function(prev, current, index) {
          var promise = promises[index];
          pendingCount++;
          when(promise, onFulfilled, onRejected, onProgress);
          function onFulfilled(result) {
            deferred.resolve(result);
          }
          function onRejected() {
            pendingCount--;
            if (pendingCount === 0) {
              deferred.reject(new Error("Can't get fulfillment value from any promise, all " + "promises were rejected."));
            }
          }
          function onProgress(progress) {
            deferred.notify({
              index: index,
              value: progress
            });
          }
        }, undefined);
        return deferred.promise;
      }
      Promise.prototype.any = function() {
        return any(this);
      };
      Q.allResolved = deprecate(allResolved, "allResolved", "allSettled");
      function allResolved(promises) {
        return when(promises, function(promises) {
          promises = array_map(promises, Q);
          return when(all(array_map(promises, function(promise) {
            return when(promise, noop, noop);
          })), function() {
            return promises;
          });
        });
      }
      Promise.prototype.allResolved = function() {
        return allResolved(this);
      };
      Q.allSettled = allSettled;
      function allSettled(promises) {
        return Q(promises).allSettled();
      }
      Promise.prototype.allSettled = function() {
        return this.then(function(promises) {
          return all(array_map(promises, function(promise) {
            promise = Q(promise);
            function regardless() {
              return promise.inspect();
            }
            return promise.then(regardless, regardless);
          }));
        });
      };
      Q.fail = Q["catch"] = function(object, rejected) {
        return Q(object).then(void 0, rejected);
      };
      Promise.prototype.fail = Promise.prototype["catch"] = function(rejected) {
        return this.then(void 0, rejected);
      };
      Q.progress = progress;
      function progress(object, progressed) {
        return Q(object).then(void 0, void 0, progressed);
      }
      Promise.prototype.progress = function(progressed) {
        return this.then(void 0, void 0, progressed);
      };
      Q.fin = Q["finally"] = function(object, callback) {
        return Q(object)["finally"](callback);
      };
      Promise.prototype.fin = Promise.prototype["finally"] = function(callback) {
        callback = Q(callback);
        return this.then(function(value) {
          return callback.fcall().then(function() {
            return value;
          });
        }, function(reason) {
          return callback.fcall().then(function() {
            throw reason;
          });
        });
      };
      Q.done = function(object, fulfilled, rejected, progress) {
        return Q(object).done(fulfilled, rejected, progress);
      };
      Promise.prototype.done = function(fulfilled, rejected, progress) {
        var onUnhandledError = function(error) {
          Q.nextTick(function() {
            makeStackTraceLong(error, promise);
            if (Q.onerror) {
              Q.onerror(error);
            } else {
              throw error;
            }
          });
        };
        var promise = fulfilled || rejected || progress ? this.then(fulfilled, rejected, progress) : this;
        if (typeof process === "object" && process && process.domain) {
          onUnhandledError = process.domain.bind(onUnhandledError);
        }
        promise.then(void 0, onUnhandledError);
      };
      Q.timeout = function(object, ms, error) {
        return Q(object).timeout(ms, error);
      };
      Promise.prototype.timeout = function(ms, error) {
        var deferred = defer();
        var timeoutId = setTimeout(function() {
          if (!error || "string" === typeof error) {
            error = new Error(error || "Timed out after " + ms + " ms");
            error.code = "ETIMEDOUT";
          }
          deferred.reject(error);
        }, ms);
        this.then(function(value) {
          clearTimeout(timeoutId);
          deferred.resolve(value);
        }, function(exception) {
          clearTimeout(timeoutId);
          deferred.reject(exception);
        }, deferred.notify);
        return deferred.promise;
      };
      Q.delay = function(object, timeout) {
        if (timeout === void 0) {
          timeout = object;
          object = void 0;
        }
        return Q(object).delay(timeout);
      };
      Promise.prototype.delay = function(timeout) {
        return this.then(function(value) {
          var deferred = defer();
          setTimeout(function() {
            deferred.resolve(value);
          }, timeout);
          return deferred.promise;
        });
      };
      Q.nfapply = function(callback, args) {
        return Q(callback).nfapply(args);
      };
      Promise.prototype.nfapply = function(args) {
        var deferred = defer();
        var nodeArgs = array_slice(args);
        nodeArgs.push(deferred.makeNodeResolver());
        this.fapply(nodeArgs).fail(deferred.reject);
        return deferred.promise;
      };
      Q.nfcall = function(callback) {
        var args = array_slice(arguments, 1);
        return Q(callback).nfapply(args);
      };
      Promise.prototype.nfcall = function() {
        var nodeArgs = array_slice(arguments);
        var deferred = defer();
        nodeArgs.push(deferred.makeNodeResolver());
        this.fapply(nodeArgs).fail(deferred.reject);
        return deferred.promise;
      };
      Q.nfbind = Q.denodeify = function(callback) {
        var baseArgs = array_slice(arguments, 1);
        return function() {
          var nodeArgs = baseArgs.concat(array_slice(arguments));
          var deferred = defer();
          nodeArgs.push(deferred.makeNodeResolver());
          Q(callback).fapply(nodeArgs).fail(deferred.reject);
          return deferred.promise;
        };
      };
      Promise.prototype.nfbind = Promise.prototype.denodeify = function() {
        var args = array_slice(arguments);
        args.unshift(this);
        return Q.denodeify.apply(void 0, args);
      };
      Q.nbind = function(callback, thisp) {
        var baseArgs = array_slice(arguments, 2);
        return function() {
          var nodeArgs = baseArgs.concat(array_slice(arguments));
          var deferred = defer();
          nodeArgs.push(deferred.makeNodeResolver());
          function bound() {
            return callback.apply(thisp, arguments);
          }
          Q(bound).fapply(nodeArgs).fail(deferred.reject);
          return deferred.promise;
        };
      };
      Promise.prototype.nbind = function() {
        var args = array_slice(arguments, 0);
        args.unshift(this);
        return Q.nbind.apply(void 0, args);
      };
      Q.nmapply = Q.npost = function(object, name, args) {
        return Q(object).npost(name, args);
      };
      Promise.prototype.nmapply = Promise.prototype.npost = function(name, args) {
        var nodeArgs = array_slice(args || []);
        var deferred = defer();
        nodeArgs.push(deferred.makeNodeResolver());
        this.dispatch("post", [name, nodeArgs]).fail(deferred.reject);
        return deferred.promise;
      };
      Q.nsend = Q.nmcall = Q.ninvoke = function(object, name) {
        var nodeArgs = array_slice(arguments, 2);
        var deferred = defer();
        nodeArgs.push(deferred.makeNodeResolver());
        Q(object).dispatch("post", [name, nodeArgs]).fail(deferred.reject);
        return deferred.promise;
      };
      Promise.prototype.nsend = Promise.prototype.nmcall = Promise.prototype.ninvoke = function(name) {
        var nodeArgs = array_slice(arguments, 1);
        var deferred = defer();
        nodeArgs.push(deferred.makeNodeResolver());
        this.dispatch("post", [name, nodeArgs]).fail(deferred.reject);
        return deferred.promise;
      };
      Q.nodeify = nodeify;
      function nodeify(object, nodeback) {
        return Q(object).nodeify(nodeback);
      }
      Promise.prototype.nodeify = function(nodeback) {
        if (nodeback) {
          this.then(function(value) {
            Q.nextTick(function() {
              nodeback(null, value);
            });
          }, function(error) {
            Q.nextTick(function() {
              nodeback(error);
            });
          });
        } else {
          return this;
        }
      };
      Q.noConflict = function() {
        throw new Error("Q.noConflict only works when Q is used as a global");
      };
      var qEndingLine = captureLine();
      return Q;
    });
  })($__require('11'));
  return module.exports;
});

$__System.registerDynamic("c5", ["c4"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('c4');
  return module.exports;
});

$__System.registerDynamic("c6", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(args, opts) {
    if (!opts)
      opts = {};
    var flags = {
      bools: {},
      strings: {},
      unknownFn: null
    };
    if (typeof opts['unknown'] === 'function') {
      flags.unknownFn = opts['unknown'];
    }
    if (typeof opts['boolean'] === 'boolean' && opts['boolean']) {
      flags.allBools = true;
    } else {
      [].concat(opts['boolean']).filter(Boolean).forEach(function(key) {
        flags.bools[key] = true;
      });
    }
    var aliases = {};
    Object.keys(opts.alias || {}).forEach(function(key) {
      aliases[key] = [].concat(opts.alias[key]);
      aliases[key].forEach(function(x) {
        aliases[x] = [key].concat(aliases[key].filter(function(y) {
          return x !== y;
        }));
      });
    });
    [].concat(opts.string).filter(Boolean).forEach(function(key) {
      flags.strings[key] = true;
      if (aliases[key]) {
        flags.strings[aliases[key]] = true;
      }
    });
    var defaults = opts['default'] || {};
    var argv = {_: []};
    Object.keys(flags.bools).forEach(function(key) {
      setArg(key, defaults[key] === undefined ? false : defaults[key]);
    });
    var notFlags = [];
    if (args.indexOf('--') !== -1) {
      notFlags = args.slice(args.indexOf('--') + 1);
      args = args.slice(0, args.indexOf('--'));
    }
    function argDefined(key, arg) {
      return (flags.allBools && /^--[^=]+$/.test(arg)) || flags.strings[key] || flags.bools[key] || aliases[key];
    }
    function setArg(key, val, arg) {
      if (arg && flags.unknownFn && !argDefined(key, arg)) {
        if (flags.unknownFn(arg) === false)
          return;
      }
      var value = !flags.strings[key] && isNumber(val) ? Number(val) : val;
      ;
      setKey(argv, key.split('.'), value);
      (aliases[key] || []).forEach(function(x) {
        setKey(argv, x.split('.'), value);
      });
    }
    function setKey(obj, keys, value) {
      var o = obj;
      keys.slice(0, -1).forEach(function(key) {
        if (o[key] === undefined)
          o[key] = {};
        o = o[key];
      });
      var key = keys[keys.length - 1];
      if (o[key] === undefined || flags.bools[key] || typeof o[key] === 'boolean') {
        o[key] = value;
      } else if (Array.isArray(o[key])) {
        o[key].push(value);
      } else {
        o[key] = [o[key], value];
      }
    }
    function aliasIsBoolean(key) {
      return aliases[key].some(function(x) {
        return flags.bools[x];
      });
    }
    for (var i = 0; i < args.length; i++) {
      var arg = args[i];
      if (/^--.+=/.test(arg)) {
        var m = arg.match(/^--([^=]+)=([\s\S]*)$/);
        var key = m[1];
        var value = m[2];
        if (flags.bools[key]) {
          value = value !== 'false';
        }
        setArg(key, value, arg);
      } else if (/^--no-.+/.test(arg)) {
        var key = arg.match(/^--no-(.+)/)[1];
        setArg(key, false, arg);
      } else if (/^--.+/.test(arg)) {
        var key = arg.match(/^--(.+)/)[1];
        var next = args[i + 1];
        if (next !== undefined && !/^-/.test(next) && !flags.bools[key] && !flags.allBools && (aliases[key] ? !aliasIsBoolean(key) : true)) {
          setArg(key, next, arg);
          i++;
        } else if (/^(true|false)$/.test(next)) {
          setArg(key, next === 'true', arg);
          i++;
        } else {
          setArg(key, flags.strings[key] ? '' : true, arg);
        }
      } else if (/^-[^-]+/.test(arg)) {
        var letters = arg.slice(1, -1).split('');
        var broken = false;
        for (var j = 0; j < letters.length; j++) {
          var next = arg.slice(j + 2);
          if (next === '-') {
            setArg(letters[j], next, arg);
            continue;
          }
          if (/[A-Za-z]/.test(letters[j]) && /=/.test(next)) {
            setArg(letters[j], next.split('=')[1], arg);
            broken = true;
            break;
          }
          if (/[A-Za-z]/.test(letters[j]) && /-?\d+(\.\d*)?(e-?\d+)?$/.test(next)) {
            setArg(letters[j], next, arg);
            broken = true;
            break;
          }
          if (letters[j + 1] && letters[j + 1].match(/\W/)) {
            setArg(letters[j], arg.slice(j + 2), arg);
            broken = true;
            break;
          } else {
            setArg(letters[j], flags.strings[letters[j]] ? '' : true, arg);
          }
        }
        var key = arg.slice(-1)[0];
        if (!broken && key !== '-') {
          if (args[i + 1] && !/^(-|--)[^-]/.test(args[i + 1]) && !flags.bools[key] && (aliases[key] ? !aliasIsBoolean(key) : true)) {
            setArg(key, args[i + 1], arg);
            i++;
          } else if (args[i + 1] && /true|false/.test(args[i + 1])) {
            setArg(key, args[i + 1] === 'true', arg);
            i++;
          } else {
            setArg(key, flags.strings[key] ? '' : true, arg);
          }
        }
      } else {
        if (!flags.unknownFn || flags.unknownFn(arg) !== false) {
          argv._.push(flags.strings['_'] || !isNumber(arg) ? arg : Number(arg));
        }
        if (opts.stopEarly) {
          argv._.push.apply(argv._, args.slice(i + 1));
          break;
        }
      }
    }
    Object.keys(defaults).forEach(function(key) {
      if (!hasKey(argv, key.split('.'))) {
        setKey(argv, key.split('.'), defaults[key]);
        (aliases[key] || []).forEach(function(x) {
          setKey(argv, x.split('.'), defaults[key]);
        });
      }
    });
    if (opts['--']) {
      argv['--'] = new Array();
      notFlags.forEach(function(key) {
        argv['--'].push(key);
      });
    } else {
      notFlags.forEach(function(key) {
        argv._.push(key);
      });
    }
    return argv;
  };
  function hasKey(obj, keys) {
    var o = obj;
    keys.slice(0, -1).forEach(function(key) {
      o = (o[key] || {});
    });
    var key = keys[keys.length - 1];
    return key in o;
  }
  function isNumber(x) {
    if (typeof x === 'number')
      return true;
    if (/^0x[0-9a-f]+$/i.test(x))
      return true;
    return /^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(x);
  }
  return module.exports;
});

$__System.registerDynamic("48", ["c6"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('c6');
  return module.exports;
});

$__System.registerDynamic("1", ["83", "4c", "c0", "c5", "48"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  const gutil = $__require('83');
  const through = $__require('4c');
  const spawn = $__require('c0');
  const Q = $__require('c5');
  const argv = $__require('48')(process.argv.slice(2));
  const PLUGIN = 'gulp-elm-test';
  function init() {
    const deferred = Q.defer();
    const proc = spawn('elm-make', ['--yes']);
    var bStderr = new Buffer(0);
    proc.stderr.on('data', (stderr) => {
      if (argv.verbose) {
        console.log(`${stderr}`);
      }
      bStderr = Buffer.concat([bStderr, new Buffer(stderr)]);
    });
    proc.on('close', (code) => {
      if (code > 0) {
        deferred.reject(new gutil.PluginError(PLUGIN, bStderr.toString()));
      } else {
        deferred.resolve();
      }
    });
    return deferred.promise;
  }
  function runTest(file) {
    const deferred = Q.defer();
    const proc = spawn('elm-test', [file.path]);
    var bStderr = new Buffer(0);
    var bStdout = new Buffer(0);
    proc.stderr.on('data', (stderr) => {
      bStderr = Buffer.concat([bStderr, new Buffer(stderr)]);
    });
    proc.stdout.on('data', (data) => {
      if (argv.verbose) {
        console.log(`${data}`);
      }
      bStdout = Buffer.concat([bStdout, new Buffer(data)]);
    });
    proc.on('close', (code) => {
      if (code > 0) {
        deferred.reject(new gutil.PluginError(PLUGIN, "failed test"));
      } else {
        deferred.resolve(bStdout.toString());
      }
    });
    return deferred.promise;
  }
  function task() {
    return through.obj((file, encoding, callback) => {
      init().then(() => runTest(file)).then((output) => callback(null, output)).catch((error) => callback(error));
    });
  }
  module.exports = task;
  module.exports.init = init;
  return module.exports;
});

})
(function(factory) {
  module.exports = factory();
});