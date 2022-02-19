module.exports = (function (e) {
  var t = {}
  function n(r) {
    if (t[r]) return t[r].exports
    var o = (t[r] = { i: r, l: !1, exports: {} })
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports
  }
  return (
    (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r })
    }),
    (n.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e
      var r = Object.create(null)
      if (
        (n.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function (t) {
              return e[t]
            }.bind(null, o),
          )
      return r
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default
            }
          : function () {
              return e
            }
      return n.d(t, 'a', t), t
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }),
    (n.p = ''),
    n((n.s = 10))
  )
})([
  function (e, t) {
    e.exports = require('react')
  },
  function (e, t, n) {
    'use strict'
    var r,
      o = function () {
        return (
          void 0 === r &&
            (r = Boolean(window && document && document.all && !window.atob)),
          r
        )
      },
      a = (function () {
        var e = {}
        return function (t) {
          if (void 0 === e[t]) {
            var n = document.querySelector(t)
            if (
              window.HTMLIFrameElement &&
              n instanceof window.HTMLIFrameElement
            )
              try {
                n = n.contentDocument.head
              } catch (e) {
                n = null
              }
            e[t] = n
          }
          return e[t]
        }
      })(),
      i = []
    function l(e) {
      for (var t = -1, n = 0; n < i.length; n++)
        if (i[n].identifier === e) {
          t = n
          break
        }
      return t
    }
    function u(e, t) {
      for (var n = {}, r = [], o = 0; o < e.length; o++) {
        var a = e[o],
          u = t.base ? a[0] + t.base : a[0],
          s = n[u] || 0,
          c = ''.concat(u, ' ').concat(s)
        n[u] = s + 1
        var d = l(c),
          f = { css: a[1], media: a[2], sourceMap: a[3] }
        ;-1 !== d
          ? (i[d].references++, i[d].updater(f))
          : i.push({ identifier: c, updater: g(f, t), references: 1 }),
          r.push(c)
      }
      return r
    }
    function s(e) {
      var t = document.createElement('style'),
        r = e.attributes || {}
      if (void 0 === r.nonce) {
        var o = n.nc
        o && (r.nonce = o)
      }
      if (
        (Object.keys(r).forEach(function (e) {
          t.setAttribute(e, r[e])
        }),
        'function' == typeof e.insert)
      )
        e.insert(t)
      else {
        var i = a(e.insert || 'head')
        if (!i)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
          )
        i.appendChild(t)
      }
      return t
    }
    var c,
      d =
        ((c = []),
        function (e, t) {
          return (c[e] = t), c.filter(Boolean).join('\n')
        })
    function f(e, t, n, r) {
      var o = n
        ? ''
        : r.media
        ? '@media '.concat(r.media, ' {').concat(r.css, '}')
        : r.css
      if (e.styleSheet) e.styleSheet.cssText = d(t, o)
      else {
        var a = document.createTextNode(o),
          i = e.childNodes
        i[t] && e.removeChild(i[t]),
          i.length ? e.insertBefore(a, i[t]) : e.appendChild(a)
      }
    }
    function p(e, t, n) {
      var r = n.css,
        o = n.media,
        a = n.sourceMap
      if (
        (o ? e.setAttribute('media', o) : e.removeAttribute('media'),
        a &&
          'undefined' != typeof btoa &&
          (r += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
            ' */',
          )),
        e.styleSheet)
      )
        e.styleSheet.cssText = r
      else {
        for (; e.firstChild; ) e.removeChild(e.firstChild)
        e.appendChild(document.createTextNode(r))
      }
    }
    var b = null,
      h = 0
    function g(e, t) {
      var n, r, o
      if (t.singleton) {
        var a = h++
        ;(n = b || (b = s(t))),
          (r = f.bind(null, n, a, !1)),
          (o = f.bind(null, n, a, !0))
      } else
        (n = s(t)),
          (r = p.bind(null, n, t)),
          (o = function () {
            !(function (e) {
              if (null === e.parentNode) return !1
              e.parentNode.removeChild(e)
            })(n)
          })
      return (
        r(e),
        function (t) {
          if (t) {
            if (
              t.css === e.css &&
              t.media === e.media &&
              t.sourceMap === e.sourceMap
            )
              return
            r((e = t))
          } else o()
        }
      )
    }
    e.exports = function (e, t) {
      ;(t = t || {}).singleton ||
        'boolean' == typeof t.singleton ||
        (t.singleton = o())
      var n = u((e = e || []), t)
      return function (e) {
        if (
          ((e = e || []),
          '[object Array]' === Object.prototype.toString.call(e))
        ) {
          for (var r = 0; r < n.length; r++) {
            var o = l(n[r])
            i[o].references--
          }
          for (var a = u(e, t), s = 0; s < n.length; s++) {
            var c = l(n[s])
            0 === i[c].references && (i[c].updater(), i.splice(c, 1))
          }
          n = a
        }
      }
    }
  },
  function (e, t, n) {
    'use strict'
    e.exports = function (e) {
      var t = []
      return (
        (t.toString = function () {
          return this.map(function (t) {
            var n = e(t)
            return t[2] ? '@media '.concat(t[2], ' {').concat(n, '}') : n
          }).join('')
        }),
        (t.i = function (e, n, r) {
          'string' == typeof e && (e = [[null, e, '']])
          var o = {}
          if (r)
            for (var a = 0; a < this.length; a++) {
              var i = this[a][0]
              null != i && (o[i] = !0)
            }
          for (var l = 0; l < e.length; l++) {
            var u = [].concat(e[l])
            ;(r && o[u[0]]) ||
              (n &&
                (u[2]
                  ? (u[2] = ''.concat(n, ' and ').concat(u[2]))
                  : (u[2] = n)),
              t.push(u))
          }
        }),
        t
      )
    }
  },
  function (e, t, n) {
    'use strict'
    var r = n(2),
      o = n.n(r)()(function (e) {
        return e[1]
      })
    o.push([
      e.i,
      '.TableQL {\n  background-color: transparent;\n  width: 100%;\n  margin: 0.5rem 0;\n  text-align: left;\n  padding: 0 0.4rem;\n  border-collapse: collapse;\n  display: table;\n  border-spacing: 2px;\n}\n\n.TableQL-thead {\n  display: table-header-group;\n  vertical-align: middle;\n  border-color: inherit;\n}\n\n.TableQL-thead-th {\n  vertical-align: bottom;\n  border-bottom: 2px solid #dee2e6;\n}\n\n.TableQL-thead-th-sort {\n  cursor: pointer;\n}\n\n.TableQL-thead-th-sort:hover {\n  background-color: #f1f3f5;\n}\n\n.TableQL-tr {\n  display: table-row;\n  vertical-align: inherit;\n  border-color: inherit;\n}\n\ntbody .TableQL-tr:hover {\n  background-color: #f1f3f5;\n}\n\n.TableQL-thead-th {\n  text-align: inherit;\n  font-weight: bold;\n}\n\n.TableQL-tbody {\n  display: table-row-group;\n  vertical-align: middle;\n  border-color: inherit;\n}\n\n.TableQL-td,\n.TableQL-thead-th {\n  padding: 0.69rem;\n  vertical-align: top;\n  border-top: 1px solid #dee2e6;\n  display: table-cell;\n  vertical-align: inherit;\n}\n\n/* PAGINATION */\n.PaginationContainer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n}\n\n.PaginationContainer button {\n  color: black;\n  float: left;\n  padding: 8px 16px;\n  margin: 0;\n  text-decoration: none;\n  border: 1px solid #ddd;\n  outline: 0;\n  background-color: white;\n}\n\n.PaginationContainer button.active {\n  background-color: gray;\n  color: white;\n  border: 1px solid gray;\n}\n\n.PaginationContainer button:hover:not(.active) {\n  background-color: #ddd;\n}\n\n.PaginationContainer button:first-child {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n\n.PaginationContainer button:last-child {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n\n.PaginationContainer button:disabled {\n  background-color: lightgray;\n}\n/* ========== */\n',
      '',
    ]),
      (t.a = o)
  },
  function (e, t, n) {
    'use strict'
    var r = n(2),
      o = n.n(r)()(function (e) {
        return e[1]
      })
    o.push([
      e.i,
      '.PaginationContainer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n}\n\n.PaginationContainer button {\n  color: black;\n  float: left;\n  padding: 8px 16px;\n  margin: 0;\n  text-decoration: none;\n  border: 1px solid #ddd;\n  outline: 0;\n  background-color: white;\n}\n\n.PaginationContainer button.active {\n  background-color: gray;\n  color: white;\n  border: 1px solid gray;\n}\n\n.PaginationContainer button:hover:not(.active) {\n  background-color: #ddd;\n}\n\n.PaginationContainer button:first-child {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n\n.PaginationContainer button:last-child {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n\n.PaginationContainer button:disabled {\n  background-color: lightgray;\n}\n',
      '',
    ]),
      (t.a = o)
  },
  function (e, t, n) {
    'use strict'
    var r = n(2),
      o = n.n(r)()(function (e) {
        return e[1]
      })
    o.push([
      e.i,
      '.TableQL-thead-th-sort-arrows {\n  float: right;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  height: 100%;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\n.TableQL-thead-th-sort-arrow-up {\n  width: 0;\n  height: 0;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-top: 5px solid transparent;\n\n  border-bottom: 5px solid #787c80;\n  margin-bottom: 1px;\n}\n\n.TableQL-thead-th-sort-arrow-down {\n  width: 0;\n  height: 0;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n\n  border-top: 5px solid #787c80;\n  margin-top: 1px;\n}\n',
      '',
    ]),
      (t.a = o)
  },
  function (e, t, n) {
    'use strict'
    var r = n(2),
      o = n.n(r)()(function (e) {
        return e[1]
      })
    o.push([
      e.i,
      '.rtql-loader {\n  border: 5px solid #f3f3f3; /* Light grey */\n  border-top: 5px solid #3498db; /* Blue */\n  border-bottom: 5px solid #3498db;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  -webkit-animation: spin 1s linear infinite;\n  animation: spin 1s linear infinite;\n}\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n',
      '',
    ]),
      (t.a = o)
  },
  function (e, t, n) {
    'use strict'
    var r =
        (this && this.__createBinding) ||
        (Object.create
          ? function (e, t, n, r) {
              void 0 === r && (r = n),
                Object.defineProperty(e, r, {
                  enumerable: !0,
                  get: function () {
                    return t[n]
                  },
                })
            }
          : function (e, t, n, r) {
              void 0 === r && (r = n), (e[r] = t[n])
            }),
      o =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (e, t) {
              Object.defineProperty(e, 'default', { enumerable: !0, value: t })
            }
          : function (e, t) {
              e.default = t
            }),
      a =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e
          var t = {}
          if (null != e)
            for (var n in e)
              'default' !== n &&
                Object.prototype.hasOwnProperty.call(e, n) &&
                r(t, e, n)
          return o(t, e), t
        },
      i =
        (this && this.__spreadArray) ||
        function (e, t) {
          for (var n = 0, r = t.length, o = e.length; n < r; n++, o++)
            e[o] = t[n]
          return e
        },
      l =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e }
        }
    Object.defineProperty(t, '__esModule', { value: !0 })
    var u = a(n(0))
    n(8)
    var s = l(n(11)),
      c = l(n(13)),
      d = l(n(18)),
      f = l(n(9)),
      p = n(20)
    t.default = function (e) {
      var t = e.pagination,
        n = e.debug,
        r = e.errorMessage,
        o = e.columns,
        a = e.styles,
        l = e.onRowClick,
        b = e.loading,
        h = void 0 !== b && b,
        g = e.error,
        m = e.data,
        y = e.sort,
        v = e.onEmpty,
        _ = u.useState(
          t && 'boolean' != typeof t && t.currentPage ? t.currentPage : 1,
        ),
        x = _[0],
        O = _[1],
        w = u.useState(),
        P = w[0],
        j = w[1],
        T = u.useState([]),
        k = T[0],
        E = T[1],
        L = u.useState([]),
        C = L[0],
        M = L[1],
        N = u.useMemo(
          function () {
            return !((P && 0 !== P.length) || h || void 0 === P)
          },
          [P, h],
        )
      u.useEffect(
        function () {
          Q('Data or columns changed: ', { data: m, columns: o })
          var e = m ? p.traverseObjectForArray(m) : []
          j(e), E(e), M(o || S(e[0]))
        },
        [m, o],
      )
      var S = function (e) {
          Q('Get header labels.')
          var t = []
          for (var n in e) n.includes('__') || t.push(n)
          return t
        },
        Q = function (e, t) {
          void 0 === t && (t = ''), n && console.log(e, t)
        }
      if (void 0 === window || void 0 === document)
        return Q('Window or document are not defined.'), null
      if (
        (Q('Props: ', {
          pagination: t,
          debug: n,
          errorMessage: r,
          columns: o,
          styles: a,
          onRowClick: l,
        }),
        h || void 0 === P || void 0 === m)
      )
        return Q('Loading: ', h), u.default.createElement(f.default, null)
      if (g)
        return (
          Q('Error: ', g),
          u.default.createElement(
            'p',
            null,
            r || 'Error while loading TableQL: ' + g.message,
          )
        )
      if (Array.isArray(m) && 0 === m.length)
        return (
          Q('No data found!', m.length),
          v
            ? v({ reason: 'No data found!' })
            : u.default.createElement('p', null, 'No data found!')
        )
      Q('Data: ', m)
      var A = 10
      if (t && k && P) {
        A = 'boolean' != typeof t && t.pageLimit ? t.pageLimit : 10
        var R =
          (x - 1) * ('boolean' != typeof t && t.pageLimit ? t.pageLimit : A)
        if (!P || 0 === P.length)
          return (
            Q('No data found to paginate!', P),
            v
              ? v({ reason: 'No data found to paginate!' })
              : u.default.createElement('p', null, 'No data found!')
          )
        var D = k.slice(R).slice(0, A)
        JSON.stringify(P) !== JSON.stringify(D) && j(i([], D))
      }
      return (
        Q('Data to be displayed (array): ', P),
        Q('Data keys: ', C),
        N
          ? (Q('No data found! I am dumb shit', P),
            v
              ? v({ reason: 'No data found!' })
              : u.default.createElement('p', null, 'No data found!'))
          : u.default.createElement(
              d.default,
              null,
              u.default.createElement(c.default, {
                displayData: P,
                dataKeys: C,
                styles: a,
                log: Q,
                onRowClick: l,
                onSort: function (e) {
                  Q('Sort by column: ', e)
                  var t = 'string' == typeof e ? e : e.id,
                    n = k ? i([], k) : []
                  'string' != typeof e && e.sort && 'function' == typeof e.sort
                    ? (n = e.sort(n, t))
                    : (('string' != typeof e &&
                        e.sort &&
                        'boolean' == typeof e.sort) ||
                        y) &&
                      n.sort(function (e, n) {
                        return e[t] > n[t] ? 1 : -1
                      }),
                    JSON.stringify(n) === JSON.stringify(k) &&
                      (n = n.reverse()),
                    E(n),
                    j(n)
                },
                sort: y,
              }),
              t &&
                u.default.createElement(s.default, {
                  totalRecords: k.length,
                  pageLimit: A,
                  pageNeighbors:
                    'boolean' != typeof t ? t.pageNeighbors : void 0,
                  selectedPage: x,
                  onPageChanged: function (e) {
                    return (function (e) {
                      var n = e.currentPage,
                        r = e.totalPages,
                        o = e.pageLimit,
                        a = e.totalRecords
                      Q(
                        'On page changed: Current Page > ' +
                          n +
                          ', Total Pages > ' +
                          r +
                          ', Page Limit > ' +
                          o +
                          ', Total Records > ' +
                          a,
                      ),
                        n && O(n),
                        'object' == typeof t &&
                          t.onPageChanged &&
                          t.onPageChanged({
                            currentPage: n,
                            totalPages: r,
                            pageLimit: o,
                            totalRecords: a,
                          })
                    })(e)
                  },
                  styles: 'boolean' != typeof t ? t.styles : void 0,
                  log: Q,
                }),
            )
      )
    }
  },
  function (e, t, n) {
    'use strict'
    n.r(t)
    var r = n(1),
      o = n.n(r),
      a = n(3),
      i = { insert: 'head', singleton: !1 }
    o()(a.a, i)
    t.default = a.a.locals || {}
  },
  function (e, t, n) {
    'use strict'
    var r =
      (this && this.__importDefault) ||
      function (e) {
        return e && e.__esModule ? e : { default: e }
      }
    Object.defineProperty(t, '__esModule', { value: !0 })
    var o = r(n(0))
    n(19)
    t.default = function () {
      return o.default.createElement('div', { className: 'rtql-loader' })
    }
  },
  function (e, t, n) {
    'use strict'
    var r =
      (this && this.__importDefault) ||
      function (e) {
        return e && e.__esModule ? e : { default: e }
      }
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.Loader = t.ApolloTableQL = void 0)
    var o = r(n(7)),
      a = r(n(21))
    t.ApolloTableQL = a.default
    var i = r(n(9))
    ;(t.Loader = i.default), (t.default = o.default)
  },
  function (e, t, n) {
    'use strict'
    var r =
        (this && this.__assign) ||
        function () {
          return (r =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
              return e
            }).apply(this, arguments)
        },
      o =
        (this && this.__createBinding) ||
        (Object.create
          ? function (e, t, n, r) {
              void 0 === r && (r = n),
                Object.defineProperty(e, r, {
                  enumerable: !0,
                  get: function () {
                    return t[n]
                  },
                })
            }
          : function (e, t, n, r) {
              void 0 === r && (r = n), (e[r] = t[n])
            }),
      a =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (e, t) {
              Object.defineProperty(e, 'default', { enumerable: !0, value: t })
            }
          : function (e, t) {
              e.default = t
            }),
      i =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e
          var t = {}
          if (null != e)
            for (var n in e)
              'default' !== n &&
                Object.prototype.hasOwnProperty.call(e, n) &&
                o(t, e, n)
          return a(t, e), t
        },
      l =
        (this && this.__spreadArray) ||
        function (e, t) {
          for (var n = 0, r = t.length, o = e.length; n < r; n++, o++)
            e[o] = t[n]
          return e
        }
    Object.defineProperty(t, '__esModule', { value: !0 })
    var u = i(n(0))
    n(12)
    var s = function (e, t, n) {
      void 0 === n && (n = 1)
      for (var r = e, o = []; r <= t; ) o.push(r), (r += n)
      return o
    }
    t.default = function (e) {
      var t = e.totalRecords,
        n = e.pageLimit,
        o = void 0 === n ? 10 : n,
        a = e.pageNeighbors,
        i = void 0 === a ? 0 : a,
        c = e.onPageChanged,
        d = e.log,
        f = e.selectedPage,
        p = void 0 === f ? 1 : f,
        b = e.styles,
        h = u.useState(p),
        g = h[0],
        m = h[1],
        y = Math.ceil(t / o)
      ;(i = 'number' == typeof i ? Math.max(0, Math.min(i, 2)) : 0),
        u.useEffect(
          function () {
            var e = {
              currentPage: g,
              totalPages: y,
              pageLimit: o,
              totalRecords: t,
            }
            d('Pagination Return Data: ', r({}, e)), c && c(e)
          },
          [g],
        )
      var v = function (e) {
          m(Math.max(0, Math.min(e, y)))
        },
        _ = function () {
          d('Handle move left'), v(g - 1)
        },
        x = function () {
          d('Handle move left'), v(g + 1)
        }
      if (0 === t || 1 === y) return null
      var O = (function () {
        var e = 2 * i + 3
        if (y > e + 2) {
          var t = Math.max(2, g - i),
            n = Math.min(y - 1, g + i),
            r = s(t, n),
            o = t > 2,
            a = y - n > 1,
            u = e - (r.length + 1)
          switch (!0) {
            case o && !a:
              var c = s(t - u, t - 1)
              r = l(l(['LEFT'], c), r)
              break
            case !o && a:
              c = s(n + 1, n + u)
              r = l(l(l([], r), c), ['RIGHT'])
              break
            case o && a:
            default:
              r = l(l(['LEFT'], r), ['RIGHT'])
          }
          return d('Fetch page numbers, pages: ', r), l(l([1], r), [y])
        }
        return d('Fetch page numbers, pages: ', O), s(1, y)
      })()
      return u.default.createElement(
        'div',
        { className: b || 'PaginationContainer', 'data-testid': 'pagination' },
        O.map(function (e, t) {
          return 'LEFT' === e
            ? u.default.createElement(
                'button',
                { 'aria-label': 'Previous', onClick: _, key: t },
                '«',
              )
            : 'RIGHT' === e
            ? u.default.createElement(
                'button',
                { onClick: x, 'aria-label': 'Next', key: t },
                '»',
              )
            : u.default.createElement(
                'button',
                {
                  key: t,
                  className: g === e ? ' active' : '',
                  onClick: function () {
                    return (function (e) {
                      d('Handle pagination page click, page: ', e), v(e)
                    })(e)
                  },
                },
                e,
              )
        }),
      )
    }
  },
  function (e, t, n) {
    'use strict'
    n.r(t)
    var r = n(1),
      o = n.n(r),
      a = n(4),
      i = { insert: 'head', singleton: !1 }
    o()(a.a, i)
    t.default = a.a.locals || {}
  },
  function (e, t, n) {
    'use strict'
    var r =
      (this && this.__importDefault) ||
      function (e) {
        return e && e.__esModule ? e : { default: e }
      }
    Object.defineProperty(t, '__esModule', { value: !0 })
    var o = r(n(0)),
      a = r(n(14)),
      i = r(n(16))
    n(8)
    t.default = function (e) {
      var t = e.log,
        n = e.styles,
        r = void 0 === n ? {} : n,
        l = e.displayData,
        u = e.dataKeys,
        s = e.onRowClick,
        c = e.onSort,
        d = e.sort,
        f = function (e) {
          return (
            t('Format label called.'),
            e
              .replace(/([a-z\d])([A-Z])/g, '$1 $2')
              .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1 $2')
              .replace(/([-,_,~,=,+])/g, ' ')
              .split(' ')
              .map(function (e) {
                return e.charAt(0).toUpperCase() + e.slice(1)
              })
              .join(' ')
          )
        }
      return o.default.createElement(
        'table',
        { className: r.table || 'TableQL' },
        o.default.createElement(
          'thead',
          { className: r.thead || 'TableQL-thead' },
          o.default.createElement(
            'tr',
            { className: r.theadTr || 'TableQL-tr' },
            (function (e) {
              return e.map(function (e, n) {
                return o.default.createElement(
                  'th',
                  {
                    className:
                      (r.theadTh || 'TableQL-thead-th') +
                      ' ' +
                      (e && 'string' != typeof e && e.headerStyle
                        ? e.headerStyle
                        : '') +
                      ' ' +
                      ((e && 'string' != typeof e && e.sort) || d
                        ? 'TableQL-thead-th-sort'
                        : ''),
                    key:
                      'TableQLHeader' + ('string' == typeof e ? e : e.id + n),
                    onClick: function () {
                      ;('string' == typeof e || e.sort || d || void 0 !== c) &&
                        (t('Header sort was clicked: ', e),
                        void 0 !== c && c(e))
                    },
                  },
                  'string' == typeof e ? f(e) : e.label || f(e.id),
                  (('string' != typeof e && e.sort) || d) &&
                    o.default.createElement(a.default, null),
                )
              })
            })(u),
          ),
        ),
        o.default.createElement(
          'tbody',
          { className: r.tbody || 'TableQL-tbody' },
          (function (e, t) {
            return e.map(function (e) {
              return o.default.createElement(
                'tr',
                {
                  key: 'TableQLRow' + JSON.stringify(e),
                  className: r.tbodyTr || 'TableQL-tr',
                  onClick: s
                    ? function () {
                        return s(e)
                      }
                    : void 0,
                },
                t.map(function (t, n) {
                  return o.default.createElement(i.default, {
                    key: 'TableCell' + JSON.stringify(t),
                    column: t,
                    styles: r,
                    columnIndex: n,
                    data: e,
                  })
                }),
              )
            })
          })(l, u),
        ),
      )
    }
  },
  function (e, t, n) {
    'use strict'
    var r =
      (this && this.__importDefault) ||
      function (e) {
        return e && e.__esModule ? e : { default: e }
      }
    Object.defineProperty(t, '__esModule', { value: !0 })
    var o = r(n(0))
    n(15)
    t.default = function () {
      return o.default.createElement(
        'div',
        { className: 'TableQL-thead-th-sort-arrows' },
        o.default.createElement('div', {
          className: 'TableQL-thead-th-sort-arrow-up',
        }),
        o.default.createElement('div', {
          className: 'TableQL-thead-th-sort-arrow-down',
        }),
      )
    }
  },
  function (e, t, n) {
    'use strict'
    n.r(t)
    var r = n(1),
      o = n.n(r),
      a = n(5),
      i = { insert: 'head', singleton: !1 }
    o()(a.a, i)
    t.default = a.a.locals || {}
  },
  function (e, t, n) {
    'use strict'
    var r =
      (this && this.__importDefault) ||
      function (e) {
        return e && e.__esModule ? e : { default: e }
      }
    Object.defineProperty(t, '__esModule', { value: !0 })
    var o = r(n(17))
    t.default = o.default
  },
  function (e, t, n) {
    'use strict'
    var r =
      (this && this.__importDefault) ||
      function (e) {
        return e && e.__esModule ? e : { default: e }
      }
    Object.defineProperty(t, '__esModule', { value: !0 })
    var o = r(n(0))
    t.default = function (e) {
      var t = e.column,
        n = e.columnIndex,
        r = e.styles,
        a = e.data
      return o.default.createElement(
        'td',
        {
          className:
            '\n        ' +
            (r.tbodyTd || 'TableQL-td') +
            '\n        ' +
            (function (e, t) {
              if (!e || 'string' == typeof e) return ''
              var n = e.nodeStyle
              return n ? ('function' == typeof n ? n(t) : n) : ''
            })(t, a) +
            '\n      ',
          key: 'TableQLNode' + (('string' == typeof t ? t : t.id) + n),
        },
        (function (e, t) {
          if ('string' != typeof e && e.customColumn) {
            if (!e.component)
              throw new Error(
                'When customColumn true, component property must be provided!',
              )
            return e.component(t)
          }
          var n = t
          return (
            ('string' == typeof e ? e.split('.') : e.id.split('.')).forEach(
              function (e) {
                n = n[e]
              },
            ),
            'string' != typeof e && e.component
              ? e.component(n)
              : JSON.stringify(n)
          )
        })(t, a),
      )
    }
  },
  function (e, t, n) {
    'use strict'
    var r,
      o =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
            })(e, t)
        }),
        function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Class extends value ' +
                String(t) +
                ' is not a constructor or null',
            )
          function n() {
            this.constructor = e
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()))
        }),
      a =
        (this && this.__assign) ||
        function () {
          return (a =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
              return e
            }).apply(this, arguments)
        },
      i =
        (this && this.__createBinding) ||
        (Object.create
          ? function (e, t, n, r) {
              void 0 === r && (r = n),
                Object.defineProperty(e, r, {
                  enumerable: !0,
                  get: function () {
                    return t[n]
                  },
                })
            }
          : function (e, t, n, r) {
              void 0 === r && (r = n), (e[r] = t[n])
            }),
      l =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (e, t) {
              Object.defineProperty(e, 'default', { enumerable: !0, value: t })
            }
          : function (e, t) {
              e.default = t
            }),
      u =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e
          var t = {}
          if (null != e)
            for (var n in e)
              'default' !== n &&
                Object.prototype.hasOwnProperty.call(e, n) &&
                i(t, e, n)
          return l(t, e), t
        }
    Object.defineProperty(t, '__esModule', { value: !0 })
    var s = u(n(0)),
      c = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this
          return (t.state = { hasError: !1, error: new Error() }), t
        }
        return (
          o(t, e),
          (t.prototype.componentDidCatch = function (e, t) {
            this.setState(a(a({}, this.state), { hasError: !0, error: e })),
              console.log(
                'React-TableQL Error: ',
                e,
                '\nMore info about error: ',
                t,
              )
          }),
          (t.prototype.render = function () {
            var e = this.state,
              t = e.error
            return e.hasError
              ? s.default.createElement(
                  'div',
                  { className: 'ErrorBoundary' },
                  s.default.createElement('h1', null, 'Something went wrong!'),
                  s.default.createElement(
                    'p',
                    { style: { color: 'red' } },
                    s.default.createElement('b', null, 'ERROR: '),
                    t.message,
                  ),
                )
              : this.props.children
          }),
          t
        )
      })(s.Component)
    t.default = c
  },
  function (e, t, n) {
    'use strict'
    n.r(t)
    var r = n(1),
      o = n.n(r),
      a = n(6),
      i = { insert: 'head', singleton: !1 }
    o()(a.a, i)
    t.default = a.a.locals || {}
  },
  function (e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.traverseObjectForArray = t.formatStringToTitleCase = void 0)
    t.formatStringToTitleCase = function (e) {
      return e
        .replace(/([a-z\d])([A-Z])/g, '$1 $2')
        .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1 $2')
        .replace(/([-,_,~,=,+])/g, ' ')
        .replace(/\w\S*/g, function (e) {
          return '' + e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()
        })
    }
    t.traverseObjectForArray = function (e, n) {
      if ((void 0 === n && (n = []), Array.isArray(e))) return e
      if ('object' != typeof e) return n
      for (var r in e) {
        if (Array.isArray(e[r])) return e[r]
        if ('object' == typeof e[r]) {
          var o = t.traverseObjectForArray(e[r], !1)
          if (Array.isArray(o)) return o
        }
      }
      return n
    }
  },
  function (e, t, n) {
    'use strict'
    var r =
        (this && this.__assign) ||
        function () {
          return (r =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
              return e
            }).apply(this, arguments)
        },
      o =
        (this && this.__rest) ||
        function (e, t) {
          var n = {}
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r])
          if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
            var o = 0
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              t.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]])
          }
          return n
        },
      a =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e }
        }
    Object.defineProperty(t, '__esModule', { value: !0 })
    var i = a(n(0)),
      l = n(22),
      u = a(n(7))
    t.default = function (e) {
      var t = e.query,
        n = o(e, ['query']),
        a = l.useQuery('string' == typeof t ? l.gql(t) : t, r({}, n)),
        s = a.loading,
        c = a.error,
        d = a.data
      return i.default.createElement(
        u.default,
        r({ loading: s, data: d, error: c }, n),
      )
    }
  },
  function (e, t) {
    e.exports = require('@apollo/client')
  },
])
