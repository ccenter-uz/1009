"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mime-types";
exports.ids = ["vendor-chunks/mime-types"];
exports.modules = {

/***/ "(ssr)/./node_modules/mime-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/mime-types/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("/*!\n * mime-types\n * Copyright(c) 2014 Jonathan Ong\n * Copyright(c) 2015 Douglas Christopher Wilson\n * MIT Licensed\n */ \n/**\n * Module dependencies.\n * @private\n */ var db = __webpack_require__(/*! mime-db */ \"(ssr)/./node_modules/mime-db/index.js\");\nvar extname = (__webpack_require__(/*! path */ \"path\").extname);\n/**\n * Module variables.\n * @private\n */ var EXTRACT_TYPE_REGEXP = /^\\s*([^;\\s]*)(?:;|\\s|$)/;\nvar TEXT_TYPE_REGEXP = /^text\\//i;\n/**\n * Module exports.\n * @public\n */ exports.charset = charset;\nexports.charsets = {\n    lookup: charset\n};\nexports.contentType = contentType;\nexports.extension = extension;\nexports.extensions = Object.create(null);\nexports.lookup = lookup;\nexports.types = Object.create(null);\n// Populate the extensions/types maps\npopulateMaps(exports.extensions, exports.types);\n/**\n * Get the default charset for a MIME type.\n *\n * @param {string} type\n * @return {boolean|string}\n */ function charset(type) {\n    if (!type || typeof type !== \"string\") {\n        return false;\n    }\n    // TODO: use media-typer\n    var match = EXTRACT_TYPE_REGEXP.exec(type);\n    var mime = match && db[match[1].toLowerCase()];\n    if (mime && mime.charset) {\n        return mime.charset;\n    }\n    // default text/* to utf-8\n    if (match && TEXT_TYPE_REGEXP.test(match[1])) {\n        return \"UTF-8\";\n    }\n    return false;\n}\n/**\n * Create a full Content-Type header given a MIME type or extension.\n *\n * @param {string} str\n * @return {boolean|string}\n */ function contentType(str) {\n    // TODO: should this even be in this module?\n    if (!str || typeof str !== \"string\") {\n        return false;\n    }\n    var mime = str.indexOf(\"/\") === -1 ? exports.lookup(str) : str;\n    if (!mime) {\n        return false;\n    }\n    // TODO: use content-type or other module\n    if (mime.indexOf(\"charset\") === -1) {\n        var charset = exports.charset(mime);\n        if (charset) mime += \"; charset=\" + charset.toLowerCase();\n    }\n    return mime;\n}\n/**\n * Get the default extension for a MIME type.\n *\n * @param {string} type\n * @return {boolean|string}\n */ function extension(type) {\n    if (!type || typeof type !== \"string\") {\n        return false;\n    }\n    // TODO: use media-typer\n    var match = EXTRACT_TYPE_REGEXP.exec(type);\n    // get extensions\n    var exts = match && exports.extensions[match[1].toLowerCase()];\n    if (!exts || !exts.length) {\n        return false;\n    }\n    return exts[0];\n}\n/**\n * Lookup the MIME type for a file path/extension.\n *\n * @param {string} path\n * @return {boolean|string}\n */ function lookup(path) {\n    if (!path || typeof path !== \"string\") {\n        return false;\n    }\n    // get the extension (\"ext\" or \".ext\" or full path)\n    var extension = extname(\"x.\" + path).toLowerCase().substr(1);\n    if (!extension) {\n        return false;\n    }\n    return exports.types[extension] || false;\n}\n/**\n * Populate the extensions and types maps.\n * @private\n */ function populateMaps(extensions, types) {\n    // source preference (least -> most)\n    var preference = [\n        \"nginx\",\n        \"apache\",\n        undefined,\n        \"iana\"\n    ];\n    Object.keys(db).forEach(function forEachMimeType(type) {\n        var mime = db[type];\n        var exts = mime.extensions;\n        if (!exts || !exts.length) {\n            return;\n        }\n        // mime -> extensions\n        extensions[type] = exts;\n        // extension -> mime\n        for(var i = 0; i < exts.length; i++){\n            var extension = exts[i];\n            if (types[extension]) {\n                var from = preference.indexOf(db[types[extension]].source);\n                var to = preference.indexOf(mime.source);\n                if (types[extension] !== \"application/octet-stream\" && (from > to || from === to && types[extension].substr(0, 12) === \"application/\")) {\n                    continue;\n                }\n            }\n            // set the extension -> mime\n            types[extension] = type;\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWltZS10eXBlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Q0FLQyxHQUVEO0FBRUE7OztDQUdDLEdBRUQsSUFBSUEsS0FBS0MsbUJBQU9BLENBQUM7QUFDakIsSUFBSUMsVUFBVUQsaURBQXVCO0FBRXJDOzs7Q0FHQyxHQUVELElBQUlFLHNCQUFzQjtBQUMxQixJQUFJQyxtQkFBbUI7QUFFdkI7OztDQUdDLEdBRURDLGVBQWUsR0FBR0M7QUFDbEJELGdCQUFnQixHQUFHO0lBQUVHLFFBQVFGO0FBQVE7QUFDckNELG1CQUFtQixHQUFHSTtBQUN0QkosaUJBQWlCLEdBQUdLO0FBQ3BCTCxrQkFBa0IsR0FBR08sT0FBT0MsTUFBTSxDQUFDO0FBQ25DUixjQUFjLEdBQUdHO0FBQ2pCSCxhQUFhLEdBQUdPLE9BQU9DLE1BQU0sQ0FBQztBQUU5QixxQ0FBcUM7QUFDckNFLGFBQWFWLFFBQVFNLFVBQVUsRUFBRU4sUUFBUVMsS0FBSztBQUU5Qzs7Ozs7Q0FLQyxHQUVELFNBQVNSLFFBQVNVLElBQUk7SUFDcEIsSUFBSSxDQUFDQSxRQUFRLE9BQU9BLFNBQVMsVUFBVTtRQUNyQyxPQUFPO0lBQ1Q7SUFFQSx3QkFBd0I7SUFDeEIsSUFBSUMsUUFBUWQsb0JBQW9CZSxJQUFJLENBQUNGO0lBQ3JDLElBQUlHLE9BQU9GLFNBQVNqQixFQUFFLENBQUNpQixLQUFLLENBQUMsRUFBRSxDQUFDRyxXQUFXLEdBQUc7SUFFOUMsSUFBSUQsUUFBUUEsS0FBS2IsT0FBTyxFQUFFO1FBQ3hCLE9BQU9hLEtBQUtiLE9BQU87SUFDckI7SUFFQSwwQkFBMEI7SUFDMUIsSUFBSVcsU0FBU2IsaUJBQWlCaUIsSUFBSSxDQUFDSixLQUFLLENBQUMsRUFBRSxHQUFHO1FBQzVDLE9BQU87SUFDVDtJQUVBLE9BQU87QUFDVDtBQUVBOzs7OztDQUtDLEdBRUQsU0FBU1IsWUFBYWEsR0FBRztJQUN2Qiw0Q0FBNEM7SUFDNUMsSUFBSSxDQUFDQSxPQUFPLE9BQU9BLFFBQVEsVUFBVTtRQUNuQyxPQUFPO0lBQ1Q7SUFFQSxJQUFJSCxPQUFPRyxJQUFJQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQzdCbEIsUUFBUUcsTUFBTSxDQUFDYyxPQUNmQTtJQUVKLElBQUksQ0FBQ0gsTUFBTTtRQUNULE9BQU87SUFDVDtJQUVBLHlDQUF5QztJQUN6QyxJQUFJQSxLQUFLSSxPQUFPLENBQUMsZUFBZSxDQUFDLEdBQUc7UUFDbEMsSUFBSWpCLFVBQVVELFFBQVFDLE9BQU8sQ0FBQ2E7UUFDOUIsSUFBSWIsU0FBU2EsUUFBUSxlQUFlYixRQUFRYyxXQUFXO0lBQ3pEO0lBRUEsT0FBT0Q7QUFDVDtBQUVBOzs7OztDQUtDLEdBRUQsU0FBU1QsVUFBV00sSUFBSTtJQUN0QixJQUFJLENBQUNBLFFBQVEsT0FBT0EsU0FBUyxVQUFVO1FBQ3JDLE9BQU87SUFDVDtJQUVBLHdCQUF3QjtJQUN4QixJQUFJQyxRQUFRZCxvQkFBb0JlLElBQUksQ0FBQ0Y7SUFFckMsaUJBQWlCO0lBQ2pCLElBQUlRLE9BQU9QLFNBQVNaLFFBQVFNLFVBQVUsQ0FBQ00sS0FBSyxDQUFDLEVBQUUsQ0FBQ0csV0FBVyxHQUFHO0lBRTlELElBQUksQ0FBQ0ksUUFBUSxDQUFDQSxLQUFLQyxNQUFNLEVBQUU7UUFDekIsT0FBTztJQUNUO0lBRUEsT0FBT0QsSUFBSSxDQUFDLEVBQUU7QUFDaEI7QUFFQTs7Ozs7Q0FLQyxHQUVELFNBQVNoQixPQUFRa0IsSUFBSTtJQUNuQixJQUFJLENBQUNBLFFBQVEsT0FBT0EsU0FBUyxVQUFVO1FBQ3JDLE9BQU87SUFDVDtJQUVBLG1EQUFtRDtJQUNuRCxJQUFJaEIsWUFBWVIsUUFBUSxPQUFPd0IsTUFDNUJOLFdBQVcsR0FDWE8sTUFBTSxDQUFDO0lBRVYsSUFBSSxDQUFDakIsV0FBVztRQUNkLE9BQU87SUFDVDtJQUVBLE9BQU9MLFFBQVFTLEtBQUssQ0FBQ0osVUFBVSxJQUFJO0FBQ3JDO0FBRUE7OztDQUdDLEdBRUQsU0FBU0ssYUFBY0osVUFBVSxFQUFFRyxLQUFLO0lBQ3RDLG9DQUFvQztJQUNwQyxJQUFJYyxhQUFhO1FBQUM7UUFBUztRQUFVQztRQUFXO0tBQU87SUFFdkRqQixPQUFPa0IsSUFBSSxDQUFDOUIsSUFBSStCLE9BQU8sQ0FBQyxTQUFTQyxnQkFBaUJoQixJQUFJO1FBQ3BELElBQUlHLE9BQU9uQixFQUFFLENBQUNnQixLQUFLO1FBQ25CLElBQUlRLE9BQU9MLEtBQUtSLFVBQVU7UUFFMUIsSUFBSSxDQUFDYSxRQUFRLENBQUNBLEtBQUtDLE1BQU0sRUFBRTtZQUN6QjtRQUNGO1FBRUEscUJBQXFCO1FBQ3JCZCxVQUFVLENBQUNLLEtBQUssR0FBR1E7UUFFbkIsb0JBQW9CO1FBQ3BCLElBQUssSUFBSVMsSUFBSSxHQUFHQSxJQUFJVCxLQUFLQyxNQUFNLEVBQUVRLElBQUs7WUFDcEMsSUFBSXZCLFlBQVljLElBQUksQ0FBQ1MsRUFBRTtZQUV2QixJQUFJbkIsS0FBSyxDQUFDSixVQUFVLEVBQUU7Z0JBQ3BCLElBQUl3QixPQUFPTixXQUFXTCxPQUFPLENBQUN2QixFQUFFLENBQUNjLEtBQUssQ0FBQ0osVUFBVSxDQUFDLENBQUN5QixNQUFNO2dCQUN6RCxJQUFJQyxLQUFLUixXQUFXTCxPQUFPLENBQUNKLEtBQUtnQixNQUFNO2dCQUV2QyxJQUFJckIsS0FBSyxDQUFDSixVQUFVLEtBQUssOEJBQ3RCd0IsQ0FBQUEsT0FBT0UsTUFBT0YsU0FBU0UsTUFBTXRCLEtBQUssQ0FBQ0osVUFBVSxDQUFDaUIsTUFBTSxDQUFDLEdBQUcsUUFBUSxjQUFjLEdBQUk7b0JBRW5GO2dCQUNGO1lBQ0Y7WUFFQSw0QkFBNEI7WUFDNUJiLEtBQUssQ0FBQ0osVUFBVSxHQUFHTTtRQUNyQjtJQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb250YWN0LWNlbnRlci8uL25vZGVfbW9kdWxlcy9taW1lLXR5cGVzL2luZGV4LmpzP2M2ZDEiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBtaW1lLXR5cGVzXG4gKiBDb3B5cmlnaHQoYykgMjAxNCBKb25hdGhhbiBPbmdcbiAqIENvcHlyaWdodChjKSAyMDE1IERvdWdsYXMgQ2hyaXN0b3BoZXIgV2lsc29uXG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG4ndXNlIHN0cmljdCdcblxuLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICogQHByaXZhdGVcbiAqL1xuXG52YXIgZGIgPSByZXF1aXJlKCdtaW1lLWRiJylcbnZhciBleHRuYW1lID0gcmVxdWlyZSgncGF0aCcpLmV4dG5hbWVcblxuLyoqXG4gKiBNb2R1bGUgdmFyaWFibGVzLlxuICogQHByaXZhdGVcbiAqL1xuXG52YXIgRVhUUkFDVF9UWVBFX1JFR0VYUCA9IC9eXFxzKihbXjtcXHNdKikoPzo7fFxcc3wkKS9cbnZhciBURVhUX1RZUEVfUkVHRVhQID0gL150ZXh0XFwvL2lcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqIEBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLmNoYXJzZXQgPSBjaGFyc2V0XG5leHBvcnRzLmNoYXJzZXRzID0geyBsb29rdXA6IGNoYXJzZXQgfVxuZXhwb3J0cy5jb250ZW50VHlwZSA9IGNvbnRlbnRUeXBlXG5leHBvcnRzLmV4dGVuc2lvbiA9IGV4dGVuc2lvblxuZXhwb3J0cy5leHRlbnNpb25zID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuZXhwb3J0cy5sb29rdXAgPSBsb29rdXBcbmV4cG9ydHMudHlwZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbi8vIFBvcHVsYXRlIHRoZSBleHRlbnNpb25zL3R5cGVzIG1hcHNcbnBvcHVsYXRlTWFwcyhleHBvcnRzLmV4dGVuc2lvbnMsIGV4cG9ydHMudHlwZXMpXG5cbi8qKlxuICogR2V0IHRoZSBkZWZhdWx0IGNoYXJzZXQgZm9yIGEgTUlNRSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gKiBAcmV0dXJuIHtib29sZWFufHN0cmluZ31cbiAqL1xuXG5mdW5jdGlvbiBjaGFyc2V0ICh0eXBlKSB7XG4gIGlmICghdHlwZSB8fCB0eXBlb2YgdHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIFRPRE86IHVzZSBtZWRpYS10eXBlclxuICB2YXIgbWF0Y2ggPSBFWFRSQUNUX1RZUEVfUkVHRVhQLmV4ZWModHlwZSlcbiAgdmFyIG1pbWUgPSBtYXRjaCAmJiBkYlttYXRjaFsxXS50b0xvd2VyQ2FzZSgpXVxuXG4gIGlmIChtaW1lICYmIG1pbWUuY2hhcnNldCkge1xuICAgIHJldHVybiBtaW1lLmNoYXJzZXRcbiAgfVxuXG4gIC8vIGRlZmF1bHQgdGV4dC8qIHRvIHV0Zi04XG4gIGlmIChtYXRjaCAmJiBURVhUX1RZUEVfUkVHRVhQLnRlc3QobWF0Y2hbMV0pKSB7XG4gICAgcmV0dXJuICdVVEYtOCdcbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG4vKipcbiAqIENyZWF0ZSBhIGZ1bGwgQ29udGVudC1UeXBlIGhlYWRlciBnaXZlbiBhIE1JTUUgdHlwZSBvciBleHRlbnNpb24uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHJldHVybiB7Ym9vbGVhbnxzdHJpbmd9XG4gKi9cblxuZnVuY3Rpb24gY29udGVudFR5cGUgKHN0cikge1xuICAvLyBUT0RPOiBzaG91bGQgdGhpcyBldmVuIGJlIGluIHRoaXMgbW9kdWxlP1xuICBpZiAoIXN0ciB8fCB0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgdmFyIG1pbWUgPSBzdHIuaW5kZXhPZignLycpID09PSAtMVxuICAgID8gZXhwb3J0cy5sb29rdXAoc3RyKVxuICAgIDogc3RyXG5cbiAgaWYgKCFtaW1lKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvLyBUT0RPOiB1c2UgY29udGVudC10eXBlIG9yIG90aGVyIG1vZHVsZVxuICBpZiAobWltZS5pbmRleE9mKCdjaGFyc2V0JykgPT09IC0xKSB7XG4gICAgdmFyIGNoYXJzZXQgPSBleHBvcnRzLmNoYXJzZXQobWltZSlcbiAgICBpZiAoY2hhcnNldCkgbWltZSArPSAnOyBjaGFyc2V0PScgKyBjaGFyc2V0LnRvTG93ZXJDYXNlKClcbiAgfVxuXG4gIHJldHVybiBtaW1lXG59XG5cbi8qKlxuICogR2V0IHRoZSBkZWZhdWx0IGV4dGVuc2lvbiBmb3IgYSBNSU1FIHR5cGUuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqIEByZXR1cm4ge2Jvb2xlYW58c3RyaW5nfVxuICovXG5cbmZ1bmN0aW9uIGV4dGVuc2lvbiAodHlwZSkge1xuICBpZiAoIXR5cGUgfHwgdHlwZW9mIHR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvLyBUT0RPOiB1c2UgbWVkaWEtdHlwZXJcbiAgdmFyIG1hdGNoID0gRVhUUkFDVF9UWVBFX1JFR0VYUC5leGVjKHR5cGUpXG5cbiAgLy8gZ2V0IGV4dGVuc2lvbnNcbiAgdmFyIGV4dHMgPSBtYXRjaCAmJiBleHBvcnRzLmV4dGVuc2lvbnNbbWF0Y2hbMV0udG9Mb3dlckNhc2UoKV1cblxuICBpZiAoIWV4dHMgfHwgIWV4dHMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gZXh0c1swXVxufVxuXG4vKipcbiAqIExvb2t1cCB0aGUgTUlNRSB0eXBlIGZvciBhIGZpbGUgcGF0aC9leHRlbnNpb24uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGhcbiAqIEByZXR1cm4ge2Jvb2xlYW58c3RyaW5nfVxuICovXG5cbmZ1bmN0aW9uIGxvb2t1cCAocGF0aCkge1xuICBpZiAoIXBhdGggfHwgdHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvLyBnZXQgdGhlIGV4dGVuc2lvbiAoXCJleHRcIiBvciBcIi5leHRcIiBvciBmdWxsIHBhdGgpXG4gIHZhciBleHRlbnNpb24gPSBleHRuYW1lKCd4LicgKyBwYXRoKVxuICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgLnN1YnN0cigxKVxuXG4gIGlmICghZXh0ZW5zaW9uKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gZXhwb3J0cy50eXBlc1tleHRlbnNpb25dIHx8IGZhbHNlXG59XG5cbi8qKlxuICogUG9wdWxhdGUgdGhlIGV4dGVuc2lvbnMgYW5kIHR5cGVzIG1hcHMuXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBvcHVsYXRlTWFwcyAoZXh0ZW5zaW9ucywgdHlwZXMpIHtcbiAgLy8gc291cmNlIHByZWZlcmVuY2UgKGxlYXN0IC0+IG1vc3QpXG4gIHZhciBwcmVmZXJlbmNlID0gWyduZ2lueCcsICdhcGFjaGUnLCB1bmRlZmluZWQsICdpYW5hJ11cblxuICBPYmplY3Qua2V5cyhkYikuZm9yRWFjaChmdW5jdGlvbiBmb3JFYWNoTWltZVR5cGUgKHR5cGUpIHtcbiAgICB2YXIgbWltZSA9IGRiW3R5cGVdXG4gICAgdmFyIGV4dHMgPSBtaW1lLmV4dGVuc2lvbnNcblxuICAgIGlmICghZXh0cyB8fCAhZXh0cy5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIG1pbWUgLT4gZXh0ZW5zaW9uc1xuICAgIGV4dGVuc2lvbnNbdHlwZV0gPSBleHRzXG5cbiAgICAvLyBleHRlbnNpb24gLT4gbWltZVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXh0cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGV4dGVuc2lvbiA9IGV4dHNbaV1cblxuICAgICAgaWYgKHR5cGVzW2V4dGVuc2lvbl0pIHtcbiAgICAgICAgdmFyIGZyb20gPSBwcmVmZXJlbmNlLmluZGV4T2YoZGJbdHlwZXNbZXh0ZW5zaW9uXV0uc291cmNlKVxuICAgICAgICB2YXIgdG8gPSBwcmVmZXJlbmNlLmluZGV4T2YobWltZS5zb3VyY2UpXG5cbiAgICAgICAgaWYgKHR5cGVzW2V4dGVuc2lvbl0gIT09ICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nICYmXG4gICAgICAgICAgKGZyb20gPiB0byB8fCAoZnJvbSA9PT0gdG8gJiYgdHlwZXNbZXh0ZW5zaW9uXS5zdWJzdHIoMCwgMTIpID09PSAnYXBwbGljYXRpb24vJykpKSB7XG4gICAgICAgICAgLy8gc2tpcCB0aGUgcmVtYXBwaW5nXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBzZXQgdGhlIGV4dGVuc2lvbiAtPiBtaW1lXG4gICAgICB0eXBlc1tleHRlbnNpb25dID0gdHlwZVxuICAgIH1cbiAgfSlcbn1cbiJdLCJuYW1lcyI6WyJkYiIsInJlcXVpcmUiLCJleHRuYW1lIiwiRVhUUkFDVF9UWVBFX1JFR0VYUCIsIlRFWFRfVFlQRV9SRUdFWFAiLCJleHBvcnRzIiwiY2hhcnNldCIsImNoYXJzZXRzIiwibG9va3VwIiwiY29udGVudFR5cGUiLCJleHRlbnNpb24iLCJleHRlbnNpb25zIiwiT2JqZWN0IiwiY3JlYXRlIiwidHlwZXMiLCJwb3B1bGF0ZU1hcHMiLCJ0eXBlIiwibWF0Y2giLCJleGVjIiwibWltZSIsInRvTG93ZXJDYXNlIiwidGVzdCIsInN0ciIsImluZGV4T2YiLCJleHRzIiwibGVuZ3RoIiwicGF0aCIsInN1YnN0ciIsInByZWZlcmVuY2UiLCJ1bmRlZmluZWQiLCJrZXlzIiwiZm9yRWFjaCIsImZvckVhY2hNaW1lVHlwZSIsImkiLCJmcm9tIiwic291cmNlIiwidG8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/mime-types/index.js\n");

/***/ }),

/***/ "(action-browser)/./node_modules/mime-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/mime-types/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("/*!\n * mime-types\n * Copyright(c) 2014 Jonathan Ong\n * Copyright(c) 2015 Douglas Christopher Wilson\n * MIT Licensed\n */ \n/**\n * Module dependencies.\n * @private\n */ var db = __webpack_require__(/*! mime-db */ \"(action-browser)/./node_modules/mime-db/index.js\");\nvar extname = (__webpack_require__(/*! path */ \"path\").extname);\n/**\n * Module variables.\n * @private\n */ var EXTRACT_TYPE_REGEXP = /^\\s*([^;\\s]*)(?:;|\\s|$)/;\nvar TEXT_TYPE_REGEXP = /^text\\//i;\n/**\n * Module exports.\n * @public\n */ exports.charset = charset;\nexports.charsets = {\n    lookup: charset\n};\nexports.contentType = contentType;\nexports.extension = extension;\nexports.extensions = Object.create(null);\nexports.lookup = lookup;\nexports.types = Object.create(null);\n// Populate the extensions/types maps\npopulateMaps(exports.extensions, exports.types);\n/**\n * Get the default charset for a MIME type.\n *\n * @param {string} type\n * @return {boolean|string}\n */ function charset(type) {\n    if (!type || typeof type !== \"string\") {\n        return false;\n    }\n    // TODO: use media-typer\n    var match = EXTRACT_TYPE_REGEXP.exec(type);\n    var mime = match && db[match[1].toLowerCase()];\n    if (mime && mime.charset) {\n        return mime.charset;\n    }\n    // default text/* to utf-8\n    if (match && TEXT_TYPE_REGEXP.test(match[1])) {\n        return \"UTF-8\";\n    }\n    return false;\n}\n/**\n * Create a full Content-Type header given a MIME type or extension.\n *\n * @param {string} str\n * @return {boolean|string}\n */ function contentType(str) {\n    // TODO: should this even be in this module?\n    if (!str || typeof str !== \"string\") {\n        return false;\n    }\n    var mime = str.indexOf(\"/\") === -1 ? exports.lookup(str) : str;\n    if (!mime) {\n        return false;\n    }\n    // TODO: use content-type or other module\n    if (mime.indexOf(\"charset\") === -1) {\n        var charset = exports.charset(mime);\n        if (charset) mime += \"; charset=\" + charset.toLowerCase();\n    }\n    return mime;\n}\n/**\n * Get the default extension for a MIME type.\n *\n * @param {string} type\n * @return {boolean|string}\n */ function extension(type) {\n    if (!type || typeof type !== \"string\") {\n        return false;\n    }\n    // TODO: use media-typer\n    var match = EXTRACT_TYPE_REGEXP.exec(type);\n    // get extensions\n    var exts = match && exports.extensions[match[1].toLowerCase()];\n    if (!exts || !exts.length) {\n        return false;\n    }\n    return exts[0];\n}\n/**\n * Lookup the MIME type for a file path/extension.\n *\n * @param {string} path\n * @return {boolean|string}\n */ function lookup(path) {\n    if (!path || typeof path !== \"string\") {\n        return false;\n    }\n    // get the extension (\"ext\" or \".ext\" or full path)\n    var extension = extname(\"x.\" + path).toLowerCase().substr(1);\n    if (!extension) {\n        return false;\n    }\n    return exports.types[extension] || false;\n}\n/**\n * Populate the extensions and types maps.\n * @private\n */ function populateMaps(extensions, types) {\n    // source preference (least -> most)\n    var preference = [\n        \"nginx\",\n        \"apache\",\n        undefined,\n        \"iana\"\n    ];\n    Object.keys(db).forEach(function forEachMimeType(type) {\n        var mime = db[type];\n        var exts = mime.extensions;\n        if (!exts || !exts.length) {\n            return;\n        }\n        // mime -> extensions\n        extensions[type] = exts;\n        // extension -> mime\n        for(var i = 0; i < exts.length; i++){\n            var extension = exts[i];\n            if (types[extension]) {\n                var from = preference.indexOf(db[types[extension]].source);\n                var to = preference.indexOf(mime.source);\n                if (types[extension] !== \"application/octet-stream\" && (from > to || from === to && types[extension].substr(0, 12) === \"application/\")) {\n                    continue;\n                }\n            }\n            // set the extension -> mime\n            types[extension] = type;\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9taW1lLXR5cGVzL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBOzs7OztDQUtDLEdBRUQ7QUFFQTs7O0NBR0MsR0FFRCxJQUFJQSxLQUFLQyxtQkFBT0EsQ0FBQztBQUNqQixJQUFJQyxVQUFVRCxpREFBdUI7QUFFckM7OztDQUdDLEdBRUQsSUFBSUUsc0JBQXNCO0FBQzFCLElBQUlDLG1CQUFtQjtBQUV2Qjs7O0NBR0MsR0FFREMsZUFBZSxHQUFHQztBQUNsQkQsZ0JBQWdCLEdBQUc7SUFBRUcsUUFBUUY7QUFBUTtBQUNyQ0QsbUJBQW1CLEdBQUdJO0FBQ3RCSixpQkFBaUIsR0FBR0s7QUFDcEJMLGtCQUFrQixHQUFHTyxPQUFPQyxNQUFNLENBQUM7QUFDbkNSLGNBQWMsR0FBR0c7QUFDakJILGFBQWEsR0FBR08sT0FBT0MsTUFBTSxDQUFDO0FBRTlCLHFDQUFxQztBQUNyQ0UsYUFBYVYsUUFBUU0sVUFBVSxFQUFFTixRQUFRUyxLQUFLO0FBRTlDOzs7OztDQUtDLEdBRUQsU0FBU1IsUUFBU1UsSUFBSTtJQUNwQixJQUFJLENBQUNBLFFBQVEsT0FBT0EsU0FBUyxVQUFVO1FBQ3JDLE9BQU87SUFDVDtJQUVBLHdCQUF3QjtJQUN4QixJQUFJQyxRQUFRZCxvQkFBb0JlLElBQUksQ0FBQ0Y7SUFDckMsSUFBSUcsT0FBT0YsU0FBU2pCLEVBQUUsQ0FBQ2lCLEtBQUssQ0FBQyxFQUFFLENBQUNHLFdBQVcsR0FBRztJQUU5QyxJQUFJRCxRQUFRQSxLQUFLYixPQUFPLEVBQUU7UUFDeEIsT0FBT2EsS0FBS2IsT0FBTztJQUNyQjtJQUVBLDBCQUEwQjtJQUMxQixJQUFJVyxTQUFTYixpQkFBaUJpQixJQUFJLENBQUNKLEtBQUssQ0FBQyxFQUFFLEdBQUc7UUFDNUMsT0FBTztJQUNUO0lBRUEsT0FBTztBQUNUO0FBRUE7Ozs7O0NBS0MsR0FFRCxTQUFTUixZQUFhYSxHQUFHO0lBQ3ZCLDRDQUE0QztJQUM1QyxJQUFJLENBQUNBLE9BQU8sT0FBT0EsUUFBUSxVQUFVO1FBQ25DLE9BQU87SUFDVDtJQUVBLElBQUlILE9BQU9HLElBQUlDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFDN0JsQixRQUFRRyxNQUFNLENBQUNjLE9BQ2ZBO0lBRUosSUFBSSxDQUFDSCxNQUFNO1FBQ1QsT0FBTztJQUNUO0lBRUEseUNBQXlDO0lBQ3pDLElBQUlBLEtBQUtJLE9BQU8sQ0FBQyxlQUFlLENBQUMsR0FBRztRQUNsQyxJQUFJakIsVUFBVUQsUUFBUUMsT0FBTyxDQUFDYTtRQUM5QixJQUFJYixTQUFTYSxRQUFRLGVBQWViLFFBQVFjLFdBQVc7SUFDekQ7SUFFQSxPQUFPRDtBQUNUO0FBRUE7Ozs7O0NBS0MsR0FFRCxTQUFTVCxVQUFXTSxJQUFJO0lBQ3RCLElBQUksQ0FBQ0EsUUFBUSxPQUFPQSxTQUFTLFVBQVU7UUFDckMsT0FBTztJQUNUO0lBRUEsd0JBQXdCO0lBQ3hCLElBQUlDLFFBQVFkLG9CQUFvQmUsSUFBSSxDQUFDRjtJQUVyQyxpQkFBaUI7SUFDakIsSUFBSVEsT0FBT1AsU0FBU1osUUFBUU0sVUFBVSxDQUFDTSxLQUFLLENBQUMsRUFBRSxDQUFDRyxXQUFXLEdBQUc7SUFFOUQsSUFBSSxDQUFDSSxRQUFRLENBQUNBLEtBQUtDLE1BQU0sRUFBRTtRQUN6QixPQUFPO0lBQ1Q7SUFFQSxPQUFPRCxJQUFJLENBQUMsRUFBRTtBQUNoQjtBQUVBOzs7OztDQUtDLEdBRUQsU0FBU2hCLE9BQVFrQixJQUFJO0lBQ25CLElBQUksQ0FBQ0EsUUFBUSxPQUFPQSxTQUFTLFVBQVU7UUFDckMsT0FBTztJQUNUO0lBRUEsbURBQW1EO0lBQ25ELElBQUloQixZQUFZUixRQUFRLE9BQU93QixNQUM1Qk4sV0FBVyxHQUNYTyxNQUFNLENBQUM7SUFFVixJQUFJLENBQUNqQixXQUFXO1FBQ2QsT0FBTztJQUNUO0lBRUEsT0FBT0wsUUFBUVMsS0FBSyxDQUFDSixVQUFVLElBQUk7QUFDckM7QUFFQTs7O0NBR0MsR0FFRCxTQUFTSyxhQUFjSixVQUFVLEVBQUVHLEtBQUs7SUFDdEMsb0NBQW9DO0lBQ3BDLElBQUljLGFBQWE7UUFBQztRQUFTO1FBQVVDO1FBQVc7S0FBTztJQUV2RGpCLE9BQU9rQixJQUFJLENBQUM5QixJQUFJK0IsT0FBTyxDQUFDLFNBQVNDLGdCQUFpQmhCLElBQUk7UUFDcEQsSUFBSUcsT0FBT25CLEVBQUUsQ0FBQ2dCLEtBQUs7UUFDbkIsSUFBSVEsT0FBT0wsS0FBS1IsVUFBVTtRQUUxQixJQUFJLENBQUNhLFFBQVEsQ0FBQ0EsS0FBS0MsTUFBTSxFQUFFO1lBQ3pCO1FBQ0Y7UUFFQSxxQkFBcUI7UUFDckJkLFVBQVUsQ0FBQ0ssS0FBSyxHQUFHUTtRQUVuQixvQkFBb0I7UUFDcEIsSUFBSyxJQUFJUyxJQUFJLEdBQUdBLElBQUlULEtBQUtDLE1BQU0sRUFBRVEsSUFBSztZQUNwQyxJQUFJdkIsWUFBWWMsSUFBSSxDQUFDUyxFQUFFO1lBRXZCLElBQUluQixLQUFLLENBQUNKLFVBQVUsRUFBRTtnQkFDcEIsSUFBSXdCLE9BQU9OLFdBQVdMLE9BQU8sQ0FBQ3ZCLEVBQUUsQ0FBQ2MsS0FBSyxDQUFDSixVQUFVLENBQUMsQ0FBQ3lCLE1BQU07Z0JBQ3pELElBQUlDLEtBQUtSLFdBQVdMLE9BQU8sQ0FBQ0osS0FBS2dCLE1BQU07Z0JBRXZDLElBQUlyQixLQUFLLENBQUNKLFVBQVUsS0FBSyw4QkFDdEJ3QixDQUFBQSxPQUFPRSxNQUFPRixTQUFTRSxNQUFNdEIsS0FBSyxDQUFDSixVQUFVLENBQUNpQixNQUFNLENBQUMsR0FBRyxRQUFRLGNBQWMsR0FBSTtvQkFFbkY7Z0JBQ0Y7WUFDRjtZQUVBLDRCQUE0QjtZQUM1QmIsS0FBSyxDQUFDSixVQUFVLEdBQUdNO1FBQ3JCO0lBQ0Y7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbnRhY3QtY2VudGVyLy4vbm9kZV9tb2R1bGVzL21pbWUtdHlwZXMvaW5kZXguanM/YzZkMSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIG1pbWUtdHlwZXNcbiAqIENvcHlyaWdodChjKSAyMDE0IEpvbmF0aGFuIE9uZ1xuICogQ29weXJpZ2h0KGMpIDIwMTUgRG91Z2xhcyBDaHJpc3RvcGhlciBXaWxzb25cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbid1c2Ugc3RyaWN0J1xuXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBkYiA9IHJlcXVpcmUoJ21pbWUtZGInKVxudmFyIGV4dG5hbWUgPSByZXF1aXJlKCdwYXRoJykuZXh0bmFtZVxuXG4vKipcbiAqIE1vZHVsZSB2YXJpYWJsZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBFWFRSQUNUX1RZUEVfUkVHRVhQID0gL15cXHMqKFteO1xcc10qKSg/Ojt8XFxzfCQpL1xudmFyIFRFWFRfVFlQRV9SRUdFWFAgPSAvXnRleHRcXC8vaVxuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICogQHB1YmxpY1xuICovXG5cbmV4cG9ydHMuY2hhcnNldCA9IGNoYXJzZXRcbmV4cG9ydHMuY2hhcnNldHMgPSB7IGxvb2t1cDogY2hhcnNldCB9XG5leHBvcnRzLmNvbnRlbnRUeXBlID0gY29udGVudFR5cGVcbmV4cG9ydHMuZXh0ZW5zaW9uID0gZXh0ZW5zaW9uXG5leHBvcnRzLmV4dGVuc2lvbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5leHBvcnRzLmxvb2t1cCA9IGxvb2t1cFxuZXhwb3J0cy50eXBlcyA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuLy8gUG9wdWxhdGUgdGhlIGV4dGVuc2lvbnMvdHlwZXMgbWFwc1xucG9wdWxhdGVNYXBzKGV4cG9ydHMuZXh0ZW5zaW9ucywgZXhwb3J0cy50eXBlcylcblxuLyoqXG4gKiBHZXQgdGhlIGRlZmF1bHQgY2hhcnNldCBmb3IgYSBNSU1FIHR5cGUuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqIEByZXR1cm4ge2Jvb2xlYW58c3RyaW5nfVxuICovXG5cbmZ1bmN0aW9uIGNoYXJzZXQgKHR5cGUpIHtcbiAgaWYgKCF0eXBlIHx8IHR5cGVvZiB0eXBlICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gVE9ETzogdXNlIG1lZGlhLXR5cGVyXG4gIHZhciBtYXRjaCA9IEVYVFJBQ1RfVFlQRV9SRUdFWFAuZXhlYyh0eXBlKVxuICB2YXIgbWltZSA9IG1hdGNoICYmIGRiW21hdGNoWzFdLnRvTG93ZXJDYXNlKCldXG5cbiAgaWYgKG1pbWUgJiYgbWltZS5jaGFyc2V0KSB7XG4gICAgcmV0dXJuIG1pbWUuY2hhcnNldFxuICB9XG5cbiAgLy8gZGVmYXVsdCB0ZXh0LyogdG8gdXRmLThcbiAgaWYgKG1hdGNoICYmIFRFWFRfVFlQRV9SRUdFWFAudGVzdChtYXRjaFsxXSkpIHtcbiAgICByZXR1cm4gJ1VURi04J1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbi8qKlxuICogQ3JlYXRlIGEgZnVsbCBDb250ZW50LVR5cGUgaGVhZGVyIGdpdmVuIGEgTUlNRSB0eXBlIG9yIGV4dGVuc2lvbi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtib29sZWFufHN0cmluZ31cbiAqL1xuXG5mdW5jdGlvbiBjb250ZW50VHlwZSAoc3RyKSB7XG4gIC8vIFRPRE86IHNob3VsZCB0aGlzIGV2ZW4gYmUgaW4gdGhpcyBtb2R1bGU/XG4gIGlmICghc3RyIHx8IHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICB2YXIgbWltZSA9IHN0ci5pbmRleE9mKCcvJykgPT09IC0xXG4gICAgPyBleHBvcnRzLmxvb2t1cChzdHIpXG4gICAgOiBzdHJcblxuICBpZiAoIW1pbWUpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIFRPRE86IHVzZSBjb250ZW50LXR5cGUgb3Igb3RoZXIgbW9kdWxlXG4gIGlmIChtaW1lLmluZGV4T2YoJ2NoYXJzZXQnKSA9PT0gLTEpIHtcbiAgICB2YXIgY2hhcnNldCA9IGV4cG9ydHMuY2hhcnNldChtaW1lKVxuICAgIGlmIChjaGFyc2V0KSBtaW1lICs9ICc7IGNoYXJzZXQ9JyArIGNoYXJzZXQudG9Mb3dlckNhc2UoKVxuICB9XG5cbiAgcmV0dXJuIG1pbWVcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGRlZmF1bHQgZXh0ZW5zaW9uIGZvciBhIE1JTUUgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICogQHJldHVybiB7Ym9vbGVhbnxzdHJpbmd9XG4gKi9cblxuZnVuY3Rpb24gZXh0ZW5zaW9uICh0eXBlKSB7XG4gIGlmICghdHlwZSB8fCB0eXBlb2YgdHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIFRPRE86IHVzZSBtZWRpYS10eXBlclxuICB2YXIgbWF0Y2ggPSBFWFRSQUNUX1RZUEVfUkVHRVhQLmV4ZWModHlwZSlcblxuICAvLyBnZXQgZXh0ZW5zaW9uc1xuICB2YXIgZXh0cyA9IG1hdGNoICYmIGV4cG9ydHMuZXh0ZW5zaW9uc1ttYXRjaFsxXS50b0xvd2VyQ2FzZSgpXVxuXG4gIGlmICghZXh0cyB8fCAhZXh0cy5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBleHRzWzBdXG59XG5cbi8qKlxuICogTG9va3VwIHRoZSBNSU1FIHR5cGUgZm9yIGEgZmlsZSBwYXRoL2V4dGVuc2lvbi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aFxuICogQHJldHVybiB7Ym9vbGVhbnxzdHJpbmd9XG4gKi9cblxuZnVuY3Rpb24gbG9va3VwIChwYXRoKSB7XG4gIGlmICghcGF0aCB8fCB0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIGdldCB0aGUgZXh0ZW5zaW9uIChcImV4dFwiIG9yIFwiLmV4dFwiIG9yIGZ1bGwgcGF0aClcbiAgdmFyIGV4dGVuc2lvbiA9IGV4dG5hbWUoJ3guJyArIHBhdGgpXG4gICAgLnRvTG93ZXJDYXNlKClcbiAgICAuc3Vic3RyKDEpXG5cbiAgaWYgKCFleHRlbnNpb24pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBleHBvcnRzLnR5cGVzW2V4dGVuc2lvbl0gfHwgZmFsc2Vcbn1cblxuLyoqXG4gKiBQb3B1bGF0ZSB0aGUgZXh0ZW5zaW9ucyBhbmQgdHlwZXMgbWFwcy5cbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcG9wdWxhdGVNYXBzIChleHRlbnNpb25zLCB0eXBlcykge1xuICAvLyBzb3VyY2UgcHJlZmVyZW5jZSAobGVhc3QgLT4gbW9zdClcbiAgdmFyIHByZWZlcmVuY2UgPSBbJ25naW54JywgJ2FwYWNoZScsIHVuZGVmaW5lZCwgJ2lhbmEnXVxuXG4gIE9iamVjdC5rZXlzKGRiKS5mb3JFYWNoKGZ1bmN0aW9uIGZvckVhY2hNaW1lVHlwZSAodHlwZSkge1xuICAgIHZhciBtaW1lID0gZGJbdHlwZV1cbiAgICB2YXIgZXh0cyA9IG1pbWUuZXh0ZW5zaW9uc1xuXG4gICAgaWYgKCFleHRzIHx8ICFleHRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gbWltZSAtPiBleHRlbnNpb25zXG4gICAgZXh0ZW5zaW9uc1t0eXBlXSA9IGV4dHNcblxuICAgIC8vIGV4dGVuc2lvbiAtPiBtaW1lXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZXh0ZW5zaW9uID0gZXh0c1tpXVxuXG4gICAgICBpZiAodHlwZXNbZXh0ZW5zaW9uXSkge1xuICAgICAgICB2YXIgZnJvbSA9IHByZWZlcmVuY2UuaW5kZXhPZihkYlt0eXBlc1tleHRlbnNpb25dXS5zb3VyY2UpXG4gICAgICAgIHZhciB0byA9IHByZWZlcmVuY2UuaW5kZXhPZihtaW1lLnNvdXJjZSlcblxuICAgICAgICBpZiAodHlwZXNbZXh0ZW5zaW9uXSAhPT0gJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbScgJiZcbiAgICAgICAgICAoZnJvbSA+IHRvIHx8IChmcm9tID09PSB0byAmJiB0eXBlc1tleHRlbnNpb25dLnN1YnN0cigwLCAxMikgPT09ICdhcHBsaWNhdGlvbi8nKSkpIHtcbiAgICAgICAgICAvLyBza2lwIHRoZSByZW1hcHBpbmdcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIHNldCB0aGUgZXh0ZW5zaW9uIC0+IG1pbWVcbiAgICAgIHR5cGVzW2V4dGVuc2lvbl0gPSB0eXBlXG4gICAgfVxuICB9KVxufVxuIl0sIm5hbWVzIjpbImRiIiwicmVxdWlyZSIsImV4dG5hbWUiLCJFWFRSQUNUX1RZUEVfUkVHRVhQIiwiVEVYVF9UWVBFX1JFR0VYUCIsImV4cG9ydHMiLCJjaGFyc2V0IiwiY2hhcnNldHMiLCJsb29rdXAiLCJjb250ZW50VHlwZSIsImV4dGVuc2lvbiIsImV4dGVuc2lvbnMiLCJPYmplY3QiLCJjcmVhdGUiLCJ0eXBlcyIsInBvcHVsYXRlTWFwcyIsInR5cGUiLCJtYXRjaCIsImV4ZWMiLCJtaW1lIiwidG9Mb3dlckNhc2UiLCJ0ZXN0Iiwic3RyIiwiaW5kZXhPZiIsImV4dHMiLCJsZW5ndGgiLCJwYXRoIiwic3Vic3RyIiwicHJlZmVyZW5jZSIsInVuZGVmaW5lZCIsImtleXMiLCJmb3JFYWNoIiwiZm9yRWFjaE1pbWVUeXBlIiwiaSIsImZyb20iLCJzb3VyY2UiLCJ0byJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/mime-types/index.js\n");

/***/ })

};
;