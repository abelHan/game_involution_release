(function (root) {
  var exports = undefined,
      module = undefined,
      require = undefined;
  var define = undefined;
  var self = root,
      window = root,
      global = root,
      globalThis = root;
  (function () {
    /*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
    (window || global).gameproto = function ($protobuf) {
      "use strict"; // Common aliases

      var $Reader = $protobuf.Reader,
          $Writer = $protobuf.Writer,
          $util = $protobuf.util; // Exported root namespace

      var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

      $root.gameproto = function () {
        /**
         * Namespace gameproto.
         * @exports gameproto
         * @namespace
         */
        var gameproto = {};

        gameproto.RequestData = function () {
          /**
           * Properties of a RequestData.
           * @memberof gameproto
           * @interface IRequestData
           * @property {gameproto.RequestData.dataType} request RequestData request
           * @property {gameproto.IChallengeRequest|null} [challengeRequest] RequestData challengeRequest
           * @property {gameproto.ILoginRequest|null} [loginRequest] RequestData loginRequest
           * @property {gameproto.ISelectSkillRequest|null} [selectSkillRequest] RequestData selectSkillRequest
           * @property {gameproto.IWinnerMessageRequest|null} [winnerMessageRequest] RequestData winnerMessageRequest
           * @property {gameproto.ICreateRequest|null} [createRequest] RequestData createRequest
           * @property {gameproto.IFlushSkillRequest|null} [flushSkillRequest] RequestData flushSkillRequest
           * @property {gameproto.ISelectRoleRequest|null} [selectRoleRequest] RequestData selectRoleRequest
           * @property {gameproto.IFindAllRoleRequest|null} [findAllRoleRequest] RequestData findAllRoleRequest
           */

          /**
           * Constructs a new RequestData.
           * @memberof gameproto
           * @classdesc Represents a RequestData.
           * @implements IRequestData
           * @constructor
           * @param {gameproto.IRequestData=} [properties] Properties to set
           */
          function RequestData(properties) {
            if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
          }
          /**
           * RequestData request.
           * @member {gameproto.RequestData.dataType} request
           * @memberof gameproto.RequestData
           * @instance
           */


          RequestData.prototype.request = 100;
          /**
           * RequestData challengeRequest.
           * @member {gameproto.IChallengeRequest|null|undefined} challengeRequest
           * @memberof gameproto.RequestData
           * @instance
           */

          RequestData.prototype.challengeRequest = null;
          /**
           * RequestData loginRequest.
           * @member {gameproto.ILoginRequest|null|undefined} loginRequest
           * @memberof gameproto.RequestData
           * @instance
           */

          RequestData.prototype.loginRequest = null;
          /**
           * RequestData selectSkillRequest.
           * @member {gameproto.ISelectSkillRequest|null|undefined} selectSkillRequest
           * @memberof gameproto.RequestData
           * @instance
           */

          RequestData.prototype.selectSkillRequest = null;
          /**
           * RequestData winnerMessageRequest.
           * @member {gameproto.IWinnerMessageRequest|null|undefined} winnerMessageRequest
           * @memberof gameproto.RequestData
           * @instance
           */

          RequestData.prototype.winnerMessageRequest = null;
          /**
           * RequestData createRequest.
           * @member {gameproto.ICreateRequest|null|undefined} createRequest
           * @memberof gameproto.RequestData
           * @instance
           */

          RequestData.prototype.createRequest = null;
          /**
           * RequestData flushSkillRequest.
           * @member {gameproto.IFlushSkillRequest|null|undefined} flushSkillRequest
           * @memberof gameproto.RequestData
           * @instance
           */

          RequestData.prototype.flushSkillRequest = null;
          /**
           * RequestData selectRoleRequest.
           * @member {gameproto.ISelectRoleRequest|null|undefined} selectRoleRequest
           * @memberof gameproto.RequestData
           * @instance
           */

          RequestData.prototype.selectRoleRequest = null;
          /**
           * RequestData findAllRoleRequest.
           * @member {gameproto.IFindAllRoleRequest|null|undefined} findAllRoleRequest
           * @memberof gameproto.RequestData
           * @instance
           */

          RequestData.prototype.findAllRoleRequest = null; // OneOf field names bound to virtual getters and setters

          var $oneOfFields;
          /**
           * RequestData data.
           * @member {"challengeRequest"|"loginRequest"|"selectSkillRequest"|"winnerMessageRequest"|"createRequest"|"flushSkillRequest"|"selectRoleRequest"|"findAllRoleRequest"|undefined} data
           * @memberof gameproto.RequestData
           * @instance
           */

          Object.defineProperty(RequestData.prototype, "data", {
            get: $util.oneOfGetter($oneOfFields = ["challengeRequest", "loginRequest", "selectSkillRequest", "winnerMessageRequest", "createRequest", "flushSkillRequest", "selectRoleRequest", "findAllRoleRequest"]),
            set: $util.oneOfSetter($oneOfFields)
          });
          /**
           * Creates a new RequestData instance using the specified properties.
           * @function create
           * @memberof gameproto.RequestData
           * @static
           * @param {gameproto.IRequestData=} [properties] Properties to set
           * @returns {gameproto.RequestData} RequestData instance
           */

          RequestData.create = function create(properties) {
            return new RequestData(properties);
          };
          /**
           * Encodes the specified RequestData message. Does not implicitly {@link gameproto.RequestData.verify|verify} messages.
           * @function encode
           * @memberof gameproto.RequestData
           * @static
           * @param {gameproto.IRequestData} message RequestData message or plain object to encode
           * @param {$protobuf.Writer} [writer] Writer to encode to
           * @returns {$protobuf.Writer} Writer
           */


          RequestData.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            writer.uint32(
            /* id 1, wireType 0 =*/
            8).int32(message.request);
            if (message.challengeRequest != null && message.hasOwnProperty("challengeRequest")) $root.gameproto.ChallengeRequest.encode(message.challengeRequest, writer.uint32(
            /* id 2, wireType 2 =*/
            18).fork()).ldelim();
            if (message.loginRequest != null && message.hasOwnProperty("loginRequest")) $root.gameproto.LoginRequest.encode(message.loginRequest, writer.uint32(
            /* id 3, wireType 2 =*/
            26).fork()).ldelim();
            if (message.selectSkillRequest != null && message.hasOwnProperty("selectSkillRequest")) $root.gameproto.SelectSkillRequest.encode(message.selectSkillRequest, writer.uint32(
            /* id 4, wireType 2 =*/
            34).fork()).ldelim();
            if (message.winnerMessageRequest != null && message.hasOwnProperty("winnerMessageRequest")) $root.gameproto.WinnerMessageRequest.encode(message.winnerMessageRequest, writer.uint32(
            /* id 5, wireType 2 =*/
            42).fork()).ldelim();
            if (message.createRequest != null && message.hasOwnProperty("createRequest")) $root.gameproto.CreateRequest.encode(message.createRequest, writer.uint32(
            /* id 6, wireType 2 =*/
            50).fork()).ldelim();
            if (message.flushSkillRequest != null && message.hasOwnProperty("flushSkillRequest")) $root.gameproto.FlushSkillRequest.encode(message.flushSkillRequest, writer.uint32(
            /* id 7, wireType 2 =*/
            58).fork()).ldelim();
            if (message.selectRoleRequest != null && message.hasOwnProperty("selectRoleRequest")) $root.gameproto.SelectRoleRequest.encode(message.selectRoleRequest, writer.uint32(
            /* id 8, wireType 2 =*/
            66).fork()).ldelim();
            if (message.findAllRoleRequest != null && message.hasOwnProperty("findAllRoleRequest")) $root.gameproto.FindAllRoleRequest.encode(message.findAllRoleRequest, writer.uint32(
            /* id 9, wireType 2 =*/
            74).fork()).ldelim();
            return writer;
          };
          /**
           * Encodes the specified RequestData message, length delimited. Does not implicitly {@link gameproto.RequestData.verify|verify} messages.
           * @function encodeDelimited
           * @memberof gameproto.RequestData
           * @static
           * @param {gameproto.IRequestData} message RequestData message or plain object to encode
           * @param {$protobuf.Writer} [writer] Writer to encode to
           * @returns {$protobuf.Writer} Writer
           */


          RequestData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
          };
          /**
           * Decodes a RequestData message from the specified reader or buffer.
           * @function decode
           * @memberof gameproto.RequestData
           * @static
           * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
           * @param {number} [length] Message length if known beforehand
           * @returns {gameproto.RequestData} RequestData
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */


          RequestData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.gameproto.RequestData();

            while (reader.pos < end) {
              var tag = reader.uint32();

              switch (tag >>> 3) {
                case 1:
                  message.request = reader.int32();
                  break;

                case 2:
                  message.challengeRequest = $root.gameproto.ChallengeRequest.decode(reader, reader.uint32());
                  break;

                case 3:
                  message.loginRequest = $root.gameproto.LoginRequest.decode(reader, reader.uint32());
                  break;

                case 4:
                  message.selectSkillRequest = $root.gameproto.SelectSkillRequest.decode(reader, reader.uint32());
                  break;

                case 5:
                  message.winnerMessageRequest = $root.gameproto.WinnerMessageRequest.decode(reader, reader.uint32());
                  break;

                case 6:
                  message.createRequest = $root.gameproto.CreateRequest.decode(reader, reader.uint32());
                  break;

                case 7:
                  message.flushSkillRequest = $root.gameproto.FlushSkillRequest.decode(reader, reader.uint32());
                  break;

                case 8:
                  message.selectRoleRequest = $root.gameproto.SelectRoleRequest.decode(reader, reader.uint32());
                  break;

                case 9:
                  message.findAllRoleRequest = $root.gameproto.FindAllRoleRequest.decode(reader, reader.uint32());
                  break;

                default:
                  reader.skipType(tag & 7);
                  break;
              }
            }

            if (!message.hasOwnProperty("request")) throw $util.ProtocolError("missing required 'request'", {
              instance: message
            });
            return message;
          };
          /**
           * Decodes a RequestData message from the specified reader or buffer, length delimited.
           * @function decodeDelimited
           * @memberof gameproto.RequestData
           * @static
           * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
           * @returns {gameproto.RequestData} RequestData
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */


          RequestData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader)) reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
          };
          /**
           * Verifies a RequestData message.
           * @function verify
           * @memberof gameproto.RequestData
           * @static
           * @param {Object.<string,*>} message Plain object to verify
           * @returns {string|null} `null` if valid, otherwise the reason why it is not
           */


          RequestData.verify = function verify(message) {
            if (typeof message !== "object" || message === null) return "object expected";
            var properties = {};

            switch (message.request) {
              default:
                return "request: enum value expected";

              case 100:
              case 0:
              case 1:
              case 3:
              case 4:
              case 5:
              case 6:
              case 7:
              case 8:
                break;
            }

            if (message.challengeRequest != null && message.hasOwnProperty("challengeRequest")) {
              properties.data = 1;
              {
                var error = $root.gameproto.ChallengeRequest.verify(message.challengeRequest);
                if (error) return "challengeRequest." + error;
              }
            }

            if (message.loginRequest != null && message.hasOwnProperty("loginRequest")) {
              if (properties.data === 1) return "data: multiple values";
              properties.data = 1;
              {
                var error = $root.gameproto.LoginRequest.verify(message.loginRequest);
                if (error) return "loginRequest." + error;
              }
            }

            if (message.selectSkillRequest != null && message.hasOwnProperty("selectSkillRequest")) {
              if (properties.data === 1) return "data: multiple values";
              properties.data = 1;
              {
                var error = $root.gameproto.SelectSkillRequest.verify(message.selectSkillRequest);
                if (error) return "selectSkillRequest." + error;
              }
            }

            if (message.winnerMessageRequest != null && message.hasOwnProperty("winnerMessageRequest")) {
              if (properties.data === 1) return "data: multiple values";
              properties.data = 1;
              {
                var error = $root.gameproto.WinnerMessageRequest.verify(message.winnerMessageRequest);
                if (error) return "winnerMessageRequest." + error;
              }
            }

            if (message.createRequest != null && message.hasOwnProperty("createRequest")) {
              if (properties.data === 1) return "data: multiple values";
              properties.data = 1;
              {
                var error = $root.gameproto.CreateRequest.verify(message.createRequest);
                if (error) return "createRequest." + error;
              }
            }

            if (message.flushSkillRequest != null && message.hasOwnProperty("flushSkillRequest")) {
              if (properties.data === 1) return "data: multiple values";
              properties.data = 1;
              {
                var error = $root.gameproto.FlushSkillRequest.verify(message.flushSkillRequest);
                if (error) return "flushSkillRequest." + error;
              }
            }

            if (message.selectRoleRequest != null && message.hasOwnProperty("selectRoleRequest")) {
              if (properties.data === 1) return "data: multiple values";
              properties.data = 1;
              {
                var error = $root.gameproto.SelectRoleRequest.verify(message.selectRoleRequest);
                if (error) return "selectRoleRequest." + error;
              }
            }

            if (message.findAllRoleRequest != null && message.hasOwnProperty("findAllRoleRequest")) {
              if (properties.data === 1) return "data: multiple values";
              properties.data = 1;
              {
                var error = $root.gameproto.FindAllRoleRequest.verify(message.findAllRoleRequest);
                if (error) return "findAllRoleRequest." + error;
              }
            }

            return null;
          };
          /**
           * Creates a RequestData message from a plain object. Also converts values to their respective internal types.
           * @function fromObject
           * @memberof gameproto.RequestData
           * @static
           * @param {Object.<string,*>} object Plain object
           * @returns {gameproto.RequestData} RequestData
           */


          RequestData.fromObject = function fromObject(object) {
            if (object instanceof $root.gameproto.RequestData) return object;
            var message = new $root.gameproto.RequestData();

            switch (object.request) {
              case "challenge":
              case 100:
                message.request = 100;
                break;

              case "login":
              case 0:
                message.request = 0;
                break;

              case "selectSkill":
              case 1:
                message.request = 1;
                break;

              case "ranking":
              case 3:
                message.request = 3;
                break;

              case "winnerMessage":
              case 4:
                message.request = 4;
                break;

              case "create":
              case 5:
                message.request = 5;
                break;

              case "flushSkill":
              case 6:
                message.request = 6;
                break;

              case "selectRole":
              case 7:
                message.request = 7;
                break;

              case "findAllRole":
              case 8:
                message.request = 8;
                break;
            }

            if (object.challengeRequest != null) {
              if (typeof object.challengeRequest !== "object") throw TypeError(".gameproto.RequestData.challengeRequest: object expected");
              message.challengeRequest = $root.gameproto.ChallengeRequest.fromObject(object.challengeRequest);
            }

            if (object.loginRequest != null) {
              if (typeof object.loginRequest !== "object") throw TypeError(".gameproto.RequestData.loginRequest: object expected");
              message.loginRequest = $root.gameproto.LoginRequest.fromObject(object.loginRequest);
            }

            if (object.selectSkillRequest != null) {
              if (typeof object.selectSkillRequest !== "object") throw TypeError(".gameproto.RequestData.selectSkillRequest: object expected");
              message.selectSkillRequest = $root.gameproto.SelectSkillRequest.fromObject(object.selectSkillRequest);
            }

            if (object.winnerMessageRequest != null) {
              if (typeof object.winnerMessageRequest !== "object") throw TypeError(".gameproto.RequestData.winnerMessageRequest: object expected");
              message.winnerMessageRequest = $root.gameproto.WinnerMessageRequest.fromObject(object.winnerMessageRequest);
            }

            if (object.createRequest != null) {
              if (typeof object.createRequest !== "object") throw TypeError(".gameproto.RequestData.createRequest: object expected");
              message.createRequest = $root.gameproto.CreateRequest.fromObject(object.createRequest);
            }

            if (object.flushSkillRequest != null) {
              if (typeof object.flushSkillRequest !== "object") throw TypeError(".gameproto.RequestData.flushSkillRequest: object expected");
              message.flushSkillRequest = $root.gameproto.FlushSkillRequest.fromObject(object.flushSkillRequest);
            }

            if (object.selectRoleRequest != null) {
              if (typeof object.selectRoleRequest !== "object") throw TypeError(".gameproto.RequestData.selectRoleRequest: object expected");
              message.selectRoleRequest = $root.gameproto.SelectRoleRequest.fromObject(object.selectRoleRequest);
            }

            if (object.findAllRoleRequest != null) {
              if (typeof object.findAllRoleRequest !== "object") throw TypeError(".gameproto.RequestData.findAllRoleRequest: object expected");
              message.findAllRoleRequest = $root.gameproto.FindAllRoleRequest.fromObject(object.findAllRoleRequest);
            }

            return message;
          };
          /**
           * Creates a plain object from a RequestData message. Also converts values to other types if specified.
           * @function toObject
           * @memberof gameproto.RequestData
           * @static
           * @param {gameproto.RequestData} message RequestData
           * @param {$protobuf.IConversionOptions} [options] Conversion options
           * @returns {Object.<string,*>} Plain object
           */


          RequestData.toObject = function toObject(message, options) {
            if (!options) options = {};
            var object = {};
            if (options.defaults) object.request = options.enums === String ? "challenge" : 100;
            if (message.request != null && message.hasOwnProperty("request")) object.request = options.enums === String ? $root.gameproto.RequestData.dataType[message.request] : message.request;

            if (message.challengeRequest != null && message.hasOwnProperty("challengeRequest")) {
              object.challengeRequest = $root.gameproto.ChallengeRequest.toObject(message.challengeRequest, options);
              if (options.oneofs) object.data = "challengeRequest";
            }

            if (message.loginRequest != null && message.hasOwnProperty("loginRequest")) {
              object.loginRequest = $root.gameproto.LoginRequest.toObject(message.loginRequest, options);
              if (options.oneofs) object.data = "loginRequest";
            }

            if (message.selectSkillRequest != null && message.hasOwnProperty("selectSkillRequest")) {
              object.selectSkillRequest = $root.gameproto.SelectSkillRequest.toObject(message.selectSkillRequest, options);
              if (options.oneofs) object.data = "selectSkillRequest";
            }

            if (message.winnerMessageRequest != null && message.hasOwnProperty("winnerMessageRequest")) {
              object.winnerMessageRequest = $root.gameproto.WinnerMessageRequest.toObject(message.winnerMessageRequest, options);
              if (options.oneofs) object.data = "winnerMessageRequest";
            }

            if (message.createRequest != null && message.hasOwnProperty("createRequest")) {
              object.createRequest = $root.gameproto.CreateRequest.toObject(message.createRequest, options);
              if (options.oneofs) object.data = "createRequest";
            }

            if (message.flushSkillRequest != null && message.hasOwnProperty("flushSkillRequest")) {
              object.flushSkillRequest = $root.gameproto.FlushSkillRequest.toObject(message.flushSkillRequest, options);
              if (options.oneofs) object.data = "flushSkillRequest";
            }

            if (message.selectRoleRequest != null && message.hasOwnProperty("selectRoleRequest")) {
              object.selectRoleRequest = $root.gameproto.SelectRoleRequest.toObject(message.selectRoleRequest, options);
              if (options.oneofs) object.data = "selectRoleRequest";
            }

            if (message.findAllRoleRequest != null && message.hasOwnProperty("findAllRoleRequest")) {
              object.findAllRoleRequest = $root.gameproto.FindAllRoleRequest.toObject(message.findAllRoleRequest, options);
              if (options.oneofs) object.data = "findAllRoleRequest";
            }

            return object;
          };
          /**
           * Converts this RequestData to JSON.
           * @function toJSON
           * @memberof gameproto.RequestData
           * @instance
           * @returns {Object.<string,*>} JSON object
           */


          RequestData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
          };
          /**
           * dataType enum.
           * @name gameproto.RequestData.dataType
           * @enum {string}
           * @property {number} challenge=100 challenge value
           * @property {number} login=0 login value
           * @property {number} selectSkill=1 selectSkill value
           * @property {number} ranking=3 ranking value
           * @property {number} winnerMessage=4 winnerMessage value
           * @property {number} create=5 create value
           * @property {number} flushSkill=6 flushSkill value
           * @property {number} selectRole=7 selectRole value
           * @property {number} findAllRole=8 findAllRole value
           */


          RequestData.dataType = function () {
            var valuesById = {},
                values = Object.create(valuesById);
            values[valuesById[100] = "challenge"] = 100;
            values[valuesById[0] = "login"] = 0;
            values[valuesById[1] = "selectSkill"] = 1;
            values[valuesById[3] = "ranking"] = 3;
            values[valuesById[4] = "winnerMessage"] = 4;
            values[valuesById[5] = "create"] = 5;
            values[valuesById[6] = "flushSkill"] = 6;
            values[valuesById[7] = "selectRole"] = 7;
            values[valuesById[8] = "findAllRole"] = 8;
            return values;
          }();

          return RequestData;
        }();

        gameproto.ResultData = function () {
          /**
           * Properties of a ResultData.
           * @memberof gameproto
           * @interface IResultData
           * @property {gameproto.ResultData.dataType} result ResultData result
           * @property {gameproto.IChallengeResult|null} [challengeResult] ResultData challengeResult
           * @property {gameproto.IErrorResult|null} [errorResult] ResultData errorResult
           * @property {gameproto.ILoginResult|null} [loginResult] ResultData loginResult
           * @property {gameproto.ISelectSkillResult|null} [selectSkillResult] ResultData selectSkillResult
           * @property {gameproto.IWinnerMessageResult|null} [winnerMessageResult] ResultData winnerMessageResult
           * @property {gameproto.IRankingResult|null} [rankingResult] ResultData rankingResult
           * @property {gameproto.ICreateResult|null} [createResult] ResultData createResult
           * @property {gameproto.IFlushSkillResult|null} [flushSkillResult] ResultData flushSkillResult
           * @property {gameproto.ISelectRoleResult|null} [selectRoleResult] ResultData selectRoleResult
           * @property {gameproto.IFindAllRoleResult|null} [findAllRoleResult] ResultData findAllRoleResult
           */

          /**
           * Constructs a new ResultData.
           * @memberof gameproto
           * @classdesc Represents a ResultData.
           * @implements IResultData
           * @constructor
           * @param {gameproto.IResultData=} [properties] Properties to set
           */
          function ResultData(properties) {
            if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
          }
          /**
           * ResultData result.
           * @member {gameproto.ResultData.dataType} result
           * @memberof gameproto.ResultData
           * @instance
           */


          ResultData.prototype.result = 100;
          /**
           * ResultData challengeResult.
           * @member {gameproto.IChallengeResult|null|undefined} challengeResult
           * @memberof gameproto.ResultData
           * @instance
           */

          ResultData.prototype.challengeResult = null;
          /**
           * ResultData errorResult.
           * @member {gameproto.IErrorResult|null|undefined} errorResult
           * @memberof gameproto.ResultData
           * @instance
           */

          ResultData.prototype.errorResult = null;
          /**
           * ResultData loginResult.
           * @member {gameproto.ILoginResult|null|undefined} loginResult
           * @memberof gameproto.ResultData
           * @instance
           */

          ResultData.prototype.loginResult = null;
          /**
           * ResultData selectSkillResult.
           * @member {gameproto.ISelectSkillResult|null|undefined} selectSkillResult
           * @memberof gameproto.ResultData
           * @instance
           */

          ResultData.prototype.selectSkillResult = null;
          /**
           * ResultData winnerMessageResult.
           * @member {gameproto.IWinnerMessageResult|null|undefined} winnerMessageResult
           * @memberof gameproto.ResultData
           * @instance
           */

          ResultData.prototype.winnerMessageResult = null;
          /**
           * ResultData rankingResult.
           * @member {gameproto.IRankingResult|null|undefined} rankingResult
           * @memberof gameproto.ResultData
           * @instance
           */

          ResultData.prototype.rankingResult = null;
          /**
           * ResultData createResult.
           * @member {gameproto.ICreateResult|null|undefined} createResult
           * @memberof gameproto.ResultData
           * @instance
           */

          ResultData.prototype.createResult = null;
          /**
           * ResultData flushSkillResult.
           * @member {gameproto.IFlushSkillResult|null|undefined} flushSkillResult
           * @memberof gameproto.ResultData
           * @instance
           */

          ResultData.prototype.flushSkillResult = null;
          /**
           * ResultData selectRoleResult.
           * @member {gameproto.ISelectRoleResult|null|undefined} selectRoleResult
           * @memberof gameproto.ResultData
           * @instance
           */

          ResultData.prototype.selectRoleResult = null;
          /**
           * ResultData findAllRoleResult.
           * @member {gameproto.IFindAllRoleResult|null|undefined} findAllRoleResult
           * @memberof gameproto.ResultData
           * @instance
           */

          ResultData.prototype.findAllRoleResult = null; // OneOf field names bound to virtual getters and setters

          var $oneOfFields;
          /**
           * ResultData data.
           * @member {"challengeResult"|"errorResult"|"loginResult"|"selectSkillResult"|"winnerMessageResult"|"rankingResult"|"createResult"|"flushSkillResult"|"selectRoleResult"|"findAllRoleResult"|undefined} data
           * @memberof gameproto.ResultData
           * @instance
           */

          Object.defineProperty(ResultData.prototype, "data", {
            get: $util.oneOfGetter($oneOfFields = ["challengeResult", "errorResult", "loginResult", "selectSkillResult", "winnerMessageResult", "rankingResult", "createResult", "flushSkillResult", "selectRoleResult", "findAllRoleResult"]),
            set: $util.oneOfSetter($oneOfFields)
          });
          /**
           * Creates a new ResultData instance using the specified properties.
           * @function create
           * @memberof gameproto.ResultData
           * @static
           * @param {gameproto.IResultData=} [properties] Properties to set
           * @returns {gameproto.ResultData} ResultData instance
           */

          ResultData.create = function create(properties) {
            return new ResultData(properties);
          };
          /**
           * Encodes the specified ResultData message. Does not implicitly {@link gameproto.ResultData.verify|verify} messages.
           * @function encode
           * @memberof gameproto.ResultData
           * @static
           * @param {gameproto.IResultData} message ResultData message or plain object to encode
           * @param {$protobuf.Writer} [writer] Writer to encode to
           * @returns {$protobuf.Writer} Writer
           */


          ResultData.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            writer.uint32(
            /* id 1, wireType 0 =*/
            8).int32(message.result);
            if (message.challengeResult != null && message.hasOwnProperty("challengeResult")) $root.gameproto.ChallengeResult.encode(message.challengeResult, writer.uint32(
            /* id 2, wireType 2 =*/
            18).fork()).ldelim();
            if (message.errorResult != null && message.hasOwnProperty("errorResult")) $root.gameproto.ErrorResult.encode(message.errorResult, writer.uint32(
            /* id 3, wireType 2 =*/
            26).fork()).ldelim();
            if (message.loginResult != null && message.hasOwnProperty("loginResult")) $root.gameproto.LoginResult.encode(message.loginResult, writer.uint32(
            /* id 4, wireType 2 =*/
            34).fork()).ldelim();
            if (message.selectSkillResult != null && message.hasOwnProperty("selectSkillResult")) $root.gameproto.SelectSkillResult.encode(message.selectSkillResult, writer.uint32(
            /* id 5, wireType 2 =*/
            42).fork()).ldelim();
            if (message.winnerMessageResult != null && message.hasOwnProperty("winnerMessageResult")) $root.gameproto.WinnerMessageResult.encode(message.winnerMessageResult, writer.uint32(
            /* id 6, wireType 2 =*/
            50).fork()).ldelim();
            if (message.rankingResult != null && message.hasOwnProperty("rankingResult")) $root.gameproto.RankingResult.encode(message.rankingResult, writer.uint32(
            /* id 7, wireType 2 =*/
            58).fork()).ldelim();
            if (message.createResult != null && message.hasOwnProperty("createResult")) $root.gameproto.CreateResult.encode(message.createResult, writer.uint32(
            /* id 9, wireType 2 =*/
            74).fork()).ldelim();
            if (message.flushSkillResult != null && message.hasOwnProperty("flushSkillResult")) $root.gameproto.FlushSkillResult.encode(message.flushSkillResult, writer.uint32(
            /* id 10, wireType 2 =*/
            82).fork()).ldelim();
            if (message.selectRoleResult != null && message.hasOwnProperty("selectRoleResult")) $root.gameproto.SelectRoleResult.encode(message.selectRoleResult, writer.uint32(
            /* id 11, wireType 2 =*/
            90).fork()).ldelim();
            if (message.findAllRoleResult != null && message.hasOwnProperty("findAllRoleResult")) $root.gameproto.FindAllRoleResult.encode(message.findAllRoleResult, writer.uint32(
            /* id 12, wireType 2 =*/
            98).fork()).ldelim();
            return writer;
          };
          /**
           * Encodes the specified ResultData message, length delimited. Does not implicitly {@link gameproto.ResultData.verify|verify} messages.
           * @function encodeDelimited
           * @memberof gameproto.ResultData
           * @static
           * @param {gameproto.IResultData} message ResultData message or plain object to encode
           * @param {$protobuf.Writer} [writer] Writer to encode to
           * @returns {$protobuf.Writer} Writer
           */


          ResultData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
          };
          /**
           * Decodes a ResultData message from the specified reader or buffer.
           * @function decode
           * @memberof gameproto.ResultData
           * @static
           * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
           * @param {number} [length] Message length if known beforehand
           * @returns {gameproto.ResultData} ResultData
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */


          ResultData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.gameproto.ResultData();

            while (reader.pos < end) {
              var tag = reader.uint32();

              switch (tag >>> 3) {
                case 1:
                  message.result = reader.int32();
                  break;

                case 2:
                  message.challengeResult = $root.gameproto.ChallengeResult.decode(reader, reader.uint32());
                  break;

                case 3:
                  message.errorResult = $root.gameproto.ErrorResult.decode(reader, reader.uint32());
                  break;

                case 4:
                  message.loginResult = $root.gameproto.LoginResult.decode(reader, reader.uint32());
                  break;

                case 5:
                  message.selectSkillResult = $root.gameproto.SelectSkillResult.decode(reader, reader.uint32());
                  break;

                case 6:
                  message.winnerMessageResult = $root.gameproto.WinnerMessageResult.decode(reader, reader.uint32());
                  break;

                case 7:
                  message.rankingResult = $root.gameproto.RankingResult.decode(reader, reader.uint32());
                  break;

                case 9:
                  message.createResult = $root.gameproto.CreateResult.decode(reader, reader.uint32());
                  break;

                case 10:
                  message.flushSkillResult = $root.gameproto.FlushSkillResult.decode(reader, reader.uint32());
                  break;

                case 11:
                  message.selectRoleResult = $root.gameproto.SelectRoleResult.decode(reader, reader.uint32());
                  break;

                case 12:
                  message.findAllRoleResult = $root.gameproto.FindAllRoleResult.decode(reader, reader.uint32());
                  break;

                default:
                  reader.skipType(tag & 7);
                  break;
              }
            }

            if (!message.hasOwnProperty("result")) throw $util.ProtocolError("missing required 'result'", {
              instance: message
            });
            return message;
          };
          /**
           * Decodes a ResultData message from the specified reader or buffer, length delimited.
           * @function decodeDelimited
           * @memberof gameproto.ResultData
           * @static
           * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
           * @returns {gameproto.ResultData} ResultData
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */


          ResultData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader)) reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
          };
          /**
           * Verifies a ResultData message.
           * @function verify
           * @memberof gameproto.ResultData
           * @static
           * @param {Object.<string,*>} message Plain object to verify
           * @returns {string|null} `null` if valid, otherwise the reason why it is not
           */


          ResultData.verify = function verify(message) {
            if (typeof message !== "object" || message === null) return "object expected";
            var properties = {};

            switch (message.result) {
              default:
                return "result: enum value expected";

              case 100:
              case 1000:
              case 0:
              case 1:
              case 3:
              case 4:
              case 5:
              case 6:
              case 7:
              case 8:
                break;
            }

            if (message.challengeResult != null && message.hasOwnProperty("challengeResult")) {
              properties.data = 1;
              {
                var error = $root.gameproto.ChallengeResult.verify(message.challengeResult);
                if (error) return "challengeResult." + error;
              }
            }

            if (message.errorResult != null && message.hasOwnProperty("errorResult")) {
              if (properties.data === 1) return "data: multiple values";
              properties.data = 1;
              {
                var error = $root.gameproto.ErrorResult.verify(message.errorResult);
                if (error) return "errorResult." + error;
              }
            }

            if (message.loginResult != null && message.hasOwnProperty("loginResult")) {
              if (properties.data === 1) return "data: multiple values";
              properties.data = 1;
              {
                var error = $root.gameproto.LoginResult.verify(message.loginResult);
                if (error) return "loginResult." + error;
              }
            }

            if (message.selectSkillResult != null && message.hasOwnProperty("selectSkillResult")) {
              if (properties.data === 1) return "data: multiple values";
              properties.data = 1;
              {
                var error = $root.gameproto.SelectSkillResult.verify(message.selectSkillResult);
                if (error) return "selectSkillResult." + error;
              }
            }

            if (message.winnerMessageResult != null && message.hasOwnProperty("winnerMessageResult")) {
              if (properties.data === 1) return "data: multiple values";
              properties.data = 1;
              {
                var error = $root.gameproto.WinnerMessageResult.verify(message.winnerMessageResult);
                if (error) return "winnerMessageResult." + error;
              }
            }

            if (message.rankingResult != null && message.hasOwnProperty("rankingResult")) {
              if (properties.data === 1) return "data: multiple values";
              properties.data = 1;
              {
                var error = $root.gameproto.RankingResult.verify(message.rankingResult);
                if (error) return "rankingResult." + error;
              }
            }

            if (message.createResult != null && message.hasOwnProperty("createResult")) {
              if (properties.data === 1) return "data: multiple values";
              properties.data = 1;
              {
                var error = $root.gameproto.CreateResult.verify(message.createResult);
                if (error) return "createResult." + error;
              }
            }

            if (message.flushSkillResult != null && message.hasOwnProperty("flushSkillResult")) {
              if (properties.data === 1) return "data: multiple values";
              properties.data = 1;
              {
                var error = $root.gameproto.FlushSkillResult.verify(message.flushSkillResult);
                if (error) return "flushSkillResult." + error;
              }
            }

            if (message.selectRoleResult != null && message.hasOwnProperty("selectRoleResult")) {
              if (properties.data === 1) return "data: multiple values";
              properties.data = 1;
              {
                var error = $root.gameproto.SelectRoleResult.verify(message.selectRoleResult);
                if (error) return "selectRoleResult." + error;
              }
            }

            if (message.findAllRoleResult != null && message.hasOwnProperty("findAllRoleResult")) {
              if (properties.data === 1) return "data: multiple values";
              properties.data = 1;
              {
                var error = $root.gameproto.FindAllRoleResult.verify(message.findAllRoleResult);
                if (error) return "findAllRoleResult." + error;
              }
            }

            return null;
          };
          /**
           * Creates a ResultData message from a plain object. Also converts values to their respective internal types.
           * @function fromObject
           * @memberof gameproto.ResultData
           * @static
           * @param {Object.<string,*>} object Plain object
           * @returns {gameproto.ResultData} ResultData
           */


          ResultData.fromObject = function fromObject(object) {
            if (object instanceof $root.gameproto.ResultData) return object;
            var message = new $root.gameproto.ResultData();

            switch (object.result) {
              case "challenge":
              case 100:
                message.result = 100;
                break;

              case "error":
              case 1000:
                message.result = 1000;
                break;

              case "login":
              case 0:
                message.result = 0;
                break;

              case "selectSkill":
              case 1:
                message.result = 1;
                break;

              case "ranking":
              case 3:
                message.result = 3;
                break;

              case "winnerMessage":
              case 4:
                message.result = 4;
                break;

              case "create":
              case 5:
                message.result = 5;
                break;

              case "flushSkill":
              case 6:
                message.result = 6;
                break;

              case "selectRole":
              case 7:
                message.result = 7;
                break;

              case "findAllRole":
              case 8:
                message.result = 8;
                break;
            }

            if (object.challengeResult != null) {
              if (typeof object.challengeResult !== "object") throw TypeError(".gameproto.ResultData.challengeResult: object expected");
              message.challengeResult = $root.gameproto.ChallengeResult.fromObject(object.challengeResult);
            }

            if (object.errorResult != null) {
              if (typeof object.errorResult !== "object") throw TypeError(".gameproto.ResultData.errorResult: object expected");
              message.errorResult = $root.gameproto.ErrorResult.fromObject(object.errorResult);
            }

            if (object.loginResult != null) {
              if (typeof object.loginResult !== "object") throw TypeError(".gameproto.ResultData.loginResult: object expected");
              message.loginResult = $root.gameproto.LoginResult.fromObject(object.loginResult);
            }

            if (object.selectSkillResult != null) {
              if (typeof object.selectSkillResult !== "object") throw TypeError(".gameproto.ResultData.selectSkillResult: object expected");
              message.selectSkillResult = $root.gameproto.SelectSkillResult.fromObject(object.selectSkillResult);
            }

            if (object.winnerMessageResult != null) {
              if (typeof object.winnerMessageResult !== "object") throw TypeError(".gameproto.ResultData.winnerMessageResult: object expected");
              message.winnerMessageResult = $root.gameproto.WinnerMessageResult.fromObject(object.winnerMessageResult);
            }

            if (object.rankingResult != null) {
              if (typeof object.rankingResult !== "object") throw TypeError(".gameproto.ResultData.rankingResult: object expected");
              message.rankingResult = $root.gameproto.RankingResult.fromObject(object.rankingResult);
            }

            if (object.createResult != null) {
              if (typeof object.createResult !== "object") throw TypeError(".gameproto.ResultData.createResult: object expected");
              message.createResult = $root.gameproto.CreateResult.fromObject(object.createResult);
            }

            if (object.flushSkillResult != null) {
              if (typeof object.flushSkillResult !== "object") throw TypeError(".gameproto.ResultData.flushSkillResult: object expected");
              message.flushSkillResult = $root.gameproto.FlushSkillResult.fromObject(object.flushSkillResult);
            }

            if (object.selectRoleResult != null) {
              if (typeof object.selectRoleResult !== "object") throw TypeError(".gameproto.ResultData.selectRoleResult: object expected");
              message.selectRoleResult = $root.gameproto.SelectRoleResult.fromObject(object.selectRoleResult);
            }

            if (object.findAllRoleResult != null) {
              if (typeof object.findAllRoleResult !== "object") throw TypeError(".gameproto.ResultData.findAllRoleResult: object expected");
              message.findAllRoleResult = $root.gameproto.FindAllRoleResult.fromObject(object.findAllRoleResult);
            }

            return message;
          };
          /**
           * Creates a plain object from a ResultData message. Also converts values to other types if specified.
           * @function toObject
           * @memberof gameproto.ResultData
           * @static
           * @param {gameproto.ResultData} message ResultData
           * @param {$protobuf.IConversionOptions} [options] Conversion options
           * @returns {Object.<string,*>} Plain object
           */


          ResultData.toObject = function toObject(message, options) {
            if (!options) options = {};
            var object = {};
            if (options.defaults) object.result = options.enums === String ? "challenge" : 100;
            if (message.result != null && message.hasOwnProperty("result")) object.result = options.enums === String ? $root.gameproto.ResultData.dataType[message.result] : message.result;

            if (message.challengeResult != null && message.hasOwnProperty("challengeResult")) {
              object.challengeResult = $root.gameproto.ChallengeResult.toObject(message.challengeResult, options);
              if (options.oneofs) object.data = "challengeResult";
            }

            if (message.errorResult != null && message.hasOwnProperty("errorResult")) {
              object.errorResult = $root.gameproto.ErrorResult.toObject(message.errorResult, options);
              if (options.oneofs) object.data = "errorResult";
            }

            if (message.loginResult != null && message.hasOwnProperty("loginResult")) {
              object.loginResult = $root.gameproto.LoginResult.toObject(message.loginResult, options);
              if (options.oneofs) object.data = "loginResult";
            }

            if (message.selectSkillResult != null && message.hasOwnProperty("selectSkillResult")) {
              object.selectSkillResult = $root.gameproto.SelectSkillResult.toObject(message.selectSkillResult, options);
              if (options.oneofs) object.data = "selectSkillResult";
            }

            if (message.winnerMessageResult != null && message.hasOwnProperty("winnerMessageResult")) {
              object.winnerMessageResult = $root.gameproto.WinnerMessageResult.toObject(message.winnerMessageResult, options);
              if (options.oneofs) object.data = "winnerMessageResult";
            }

            if (message.rankingResult != null && message.hasOwnProperty("rankingResult")) {
              object.rankingResult = $root.gameproto.RankingResult.toObject(message.rankingResult, options);
              if (options.oneofs) object.data = "rankingResult";
            }

            if (message.createResult != null && message.hasOwnProperty("createResult")) {
              object.createResult = $root.gameproto.CreateResult.toObject(message.createResult, options);
              if (options.oneofs) object.data = "createResult";
            }

            if (message.flushSkillResult != null && message.hasOwnProperty("flushSkillResult")) {
              object.flushSkillResult = $root.gameproto.FlushSkillResult.toObject(message.flushSkillResult, options);
              if (options.oneofs) object.data = "flushSkillResult";
            }

            if (message.selectRoleResult != null && message.hasOwnProperty("selectRoleResult")) {
              object.selectRoleResult = $root.gameproto.SelectRoleResult.toObject(message.selectRoleResult, options);
              if (options.oneofs) object.data = "selectRoleResult";
            }

            if (message.findAllRoleResult != null && message.hasOwnProperty("findAllRoleResult")) {
              object.findAllRoleResult = $root.gameproto.FindAllRoleResult.toObject(message.findAllRoleResult, options);
              if (options.oneofs) object.data = "findAllRoleResult";
            }

            return object;
          };
          /**
           * Converts this ResultData to JSON.
           * @function toJSON
           * @memberof gameproto.ResultData
           * @instance
           * @returns {Object.<string,*>} JSON object
           */


          ResultData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
          };
          /**
           * dataType enum.
           * @name gameproto.ResultData.dataType
           * @enum {string}
           * @property {number} challenge=100 challenge value
           * @property {number} error=1000 error value
           * @property {number} login=0 login value
           * @property {number} selectSkill=1 selectSkill value
           * @property {number} ranking=3 ranking value
           * @property {number} winnerMessage=4 winnerMessage value
           * @property {number} create=5 create value
           * @property {number} flushSkill=6 flushSkill value
           * @property {number} selectRole=7 selectRole value
           * @property {number} findAllRole=8 findAllRole value
           */


          ResultData.dataType = function () {
            var valuesById = {},
                values = Object.create(valuesById);
            values[valuesById[100] = "challenge"] = 100;
            values[valuesById[1000] = "error"] = 1000;
            values[valuesById[0] = "login"] = 0;
            values[valuesById[1] = "selectSkill"] = 1;
            values[valuesById[3] = "ranking"] = 3;
            values[valuesById[4] = "winnerMessage"] = 4;
            values[valuesById[5] = "create"] = 5;
            values[valuesById[6] = "flushSkill"] = 6;
            values[valuesById[7] = "selectRole"] = 7;
            values[valuesById[8] = "findAllRole"] = 8;
            return values;
          }();

          return ResultData;
        }();

        gameproto.ErrorResult = function () {
          /**
           * Properties of an ErrorResult.
           * @memberof gameproto
           * @interface IErrorResult
           * @property {number} errorCode ErrorResult errorCode
           */

          /**
           * Constructs a new ErrorResult.
           * @memberof gameproto
           * @classdesc Represents an ErrorResult.
           * @implements IErrorResult
           * @constructor
           * @param {gameproto.IErrorResult=} [properties] Properties to set
           */
          function ErrorResult(properties) {
            if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
          }
          /**
           * ErrorResult errorCode.
           * @member {number} errorCode
           * @memberof gameproto.ErrorResult
           * @instance
           */


          ErrorResult.prototype.errorCode = 0;
          /**
           * Creates a new ErrorResult instance using the specified properties.
           * @function create
           * @memberof gameproto.ErrorResult
           * @static
           * @param {gameproto.IErrorResult=} [properties] Properties to set
           * @returns {gameproto.ErrorResult} ErrorResult instance
           */

          ErrorResult.create = function create(properties) {
            return new ErrorResult(properties);
          };
          /**
           * Encodes the specified ErrorResult message. Does not implicitly {@link gameproto.ErrorResult.verify|verify} messages.
           * @function encode
           * @memberof gameproto.ErrorResult
           * @static
           * @param {gameproto.IErrorResult} message ErrorResult message or plain object to encode
           * @param {$protobuf.Writer} [writer] Writer to encode to
           * @returns {$protobuf.Writer} Writer
           */


          ErrorResult.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            writer.uint32(
            /* id 1, wireType 0 =*/
            8).int32(message.errorCode);
            return writer;
          };
          /**
           * Encodes the specified ErrorResult message, length delimited. Does not implicitly {@link gameproto.ErrorResult.verify|verify} messages.
           * @function encodeDelimited
           * @memberof gameproto.ErrorResult
           * @static
           * @param {gameproto.IErrorResult} message ErrorResult message or plain object to encode
           * @param {$protobuf.Writer} [writer] Writer to encode to
           * @returns {$protobuf.Writer} Writer
           */


          ErrorResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
          };
          /**
           * Decodes an ErrorResult message from the specified reader or buffer.
           * @function decode
           * @memberof gameproto.ErrorResult
           * @static
           * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
           * @param {number} [length] Message length if known beforehand
           * @returns {gameproto.ErrorResult} ErrorResult
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */


          ErrorResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.gameproto.ErrorResult();

            while (reader.pos < end) {
              var tag = reader.uint32();

              switch (tag >>> 3) {
                case 1:
                  message.errorCode = reader.int32();
                  break;

                default:
                  reader.skipType(tag & 7);
                  break;
              }
            }

            if (!message.hasOwnProperty("errorCode")) throw $util.ProtocolError("missing required 'errorCode'", {
              instance: message
            });
            return message;
          };
          /**
           * Decodes an ErrorResult message from the specified reader or buffer, length delimited.
           * @function decodeDelimited
           * @memberof gameproto.ErrorResult
           * @static
           * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
           * @returns {gameproto.ErrorResult} ErrorResult
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */


          ErrorResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader)) reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
          };
          /**
           * Verifies an ErrorResult message.
           * @function verify
           * @memberof gameproto.ErrorResult
           * @static
           * @param {Object.<string,*>} message Plain object to verify
           * @returns {string|null} `null` if valid, otherwise the reason why it is not
           */


          ErrorResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null) return "object expected";
            if (!$util.isInteger(message.errorCode)) return "errorCode: integer expected";
            return null;
          };
          /**
           * Creates an ErrorResult message from a plain object. Also converts values to their respective internal types.
           * @function fromObject
           * @memberof gameproto.ErrorResult
           * @static
           * @param {Object.<string,*>} object Plain object
           * @returns {gameproto.ErrorResult} ErrorResult
           */


          ErrorResult.fromObject = function fromObject(object) {
            if (object instanceof $root.gameproto.ErrorResult) return object;
            var message = new $root.gameproto.ErrorResult();
            if (object.errorCode != null) message.errorCode = object.errorCode | 0;
            return message;
          };
          /**
           * Creates a plain object from an ErrorResult message. Also converts values to other types if specified.
           * @function toObject
           * @memberof gameproto.ErrorResult
           * @static
           * @param {gameproto.ErrorResult} message ErrorResult
           * @param {$protobuf.IConversionOptions} [options] Conversion options
           * @returns {Object.<string,*>} Plain object
           */


          ErrorResult.toObject = function toObject(message, options) {
            if (!options) options = {};
            var object = {};
            if (options.defaults) object.errorCode = 0;
            if (message.errorCode != null && message.hasOwnProperty("errorCode")) object.errorCode = message.errorCode;
            return object;
          };
          /**
           * Converts this ErrorResult to JSON.
           * @function toJSON
           * @memberof gameproto.ErrorResult
           * @instance
           * @returns {Object.<string,*>} JSON object
           */


          ErrorResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
          };

          return ErrorResult;
        }();

        gameproto.FindAllRoleRequest = function () {
          /**
           * Properties of a FindAllRoleRequest.
           * @memberof gameproto
           * @interface IFindAllRoleRequest
           * @property {number|Long} playerId FindAllRoleRequest playerId
           */

          /**
           * Constructs a new FindAllRoleRequest.
           * @memberof gameproto
           * @classdesc Represents a FindAllRoleRequest.
           * @implements IFindAllRoleRequest
           * @constructor
           * @param {gameproto.IFindAllRoleRequest=} [properties] Properties to set
           */
          function FindAllRoleRequest(properties) {
            if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
          }
          /**
           * FindAllRoleRequest playerId.
           * @member {number|Long} playerId
           * @memberof gameproto.FindAllRoleRequest
           * @instance
           */


          FindAllRoleRequest.prototype.playerId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
          /**
           * Creates a new FindAllRoleRequest instance using the specified properties.
           * @function create
           * @memberof gameproto.FindAllRoleRequest
           * @static
           * @param {gameproto.IFindAllRoleRequest=} [properties] Properties to set
           * @returns {gameproto.FindAllRoleRequest} FindAllRoleRequest instance
           */

          FindAllRoleRequest.create = function create(properties) {
            return new FindAllRoleRequest(properties);
          };
          /**
           * Encodes the specified FindAllRoleRequest message. Does not implicitly {@link gameproto.FindAllRoleRequest.verify|verify} messages.
           * @function encode
           * @memberof gameproto.FindAllRoleRequest
           * @static
           * @param {gameproto.IFindAllRoleRequest} message FindAllRoleRequest message or plain object to encode
           * @param {$protobuf.Writer} [writer] Writer to encode to
           * @returns {$protobuf.Writer} Writer
           */


          FindAllRoleRequest.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            writer.uint32(
            /* id 1, wireType 0 =*/
            8).int64(message.playerId);
            return writer;
          };
          /**
           * Encodes the specified FindAllRoleRequest message, length delimited. Does not implicitly {@link gameproto.FindAllRoleRequest.verify|verify} messages.
           * @function encodeDelimited
           * @memberof gameproto.FindAllRoleRequest
           * @static
           * @param {gameproto.IFindAllRoleRequest} message FindAllRoleRequest message or plain object to encode
           * @param {$protobuf.Writer} [writer] Writer to encode to
           * @returns {$protobuf.Writer} Writer
           */


          FindAllRoleRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
          };
          /**
           * Decodes a FindAllRoleRequest message from the specified reader or buffer.
           * @function decode
           * @memberof gameproto.FindAllRoleRequest
           * @static
           * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
           * @param {number} [length] Message length if known beforehand
           * @returns {gameproto.FindAllRoleRequest} FindAllRoleRequest
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */


          FindAllRoleRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.gameproto.FindAllRoleRequest();

            while (reader.pos < end) {
              var tag = reader.uint32();

              switch (tag >>> 3) {
                case 1:
                  message.playerId = reader.int64();
                  break;

                default:
                  reader.skipType(tag & 7);
                  break;
              }
            }

            if (!message.hasOwnProperty("playerId")) throw $util.ProtocolError("missing required 'playerId'", {
              instance: message
            });
            return message;
          };
          /**
           * Decodes a FindAllRoleRequest message from the specified reader or buffer, length delimited.
           * @function decodeDelimited
           * @memberof gameproto.FindAllRoleRequest
           * @static
           * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
           * @returns {gameproto.FindAllRoleRequest} FindAllRoleRequest
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */


          FindAllRoleRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader)) reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
          };
          /**
           * Verifies a FindAllRoleRequest message.
           * @function verify
           * @memberof gameproto.FindAllRoleRequest
           * @static
           * @param {Object.<string,*>} message Plain object to verify
           * @returns {string|null} `null` if valid, otherwise the reason why it is not
           */


          FindAllRoleRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null) return "object expected";
            if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high))) return "playerId: integer|Long expected";
            return null;
          };
          /**
           * Creates a FindAllRoleRequest message from a plain object. Also converts values to their respective internal types.
           * @function fromObject
           * @memberof gameproto.FindAllRoleRequest
           * @static
           * @param {Object.<string,*>} object Plain object
           * @returns {gameproto.FindAllRoleRequest} FindAllRoleRequest
           */


          FindAllRoleRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.gameproto.FindAllRoleRequest) return object;
            var message = new $root.gameproto.FindAllRoleRequest();
            if (object.playerId != null) if ($util.Long) (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = false;else if (typeof object.playerId === "string") message.playerId = parseInt(object.playerId, 10);else if (typeof object.playerId === "number") message.playerId = object.playerId;else if (typeof object.playerId === "object") message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber();
            return message;
          };
          /**
           * Creates a plain object from a FindAllRoleRequest message. Also converts values to other types if specified.
           * @function toObject
           * @memberof gameproto.FindAllRoleRequest
           * @static
           * @param {gameproto.FindAllRoleRequest} message FindAllRoleRequest
           * @param {$protobuf.IConversionOptions} [options] Conversion options
           * @returns {Object.<string,*>} Plain object
           */


          FindAllRoleRequest.toObject = function toObject(message, options) {
            if (!options) options = {};
            var object = {};
            if (options.defaults) if ($util.Long) {
              var long = new $util.Long(0, 0, false);
              object.playerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else object.playerId = options.longs === String ? "0" : 0;
            if (message.playerId != null && message.hasOwnProperty("playerId")) if (typeof message.playerId === "number") object.playerId = options.longs === String ? String(message.playerId) : message.playerId;else object.playerId = options.longs === String ? $util.Long.prototype.toString.call(message.playerId) : options.longs === Number ? new $util.LongBits(message.playerId.low >>> 0, message.playerId.high >>> 0).toNumber() : message.playerId;
            return object;
          };
          /**
           * Converts this FindAllRoleRequest to JSON.
           * @function toJSON
           * @memberof gameproto.FindAllRoleRequest
           * @instance
           * @returns {Object.<string,*>} JSON object
           */


          FindAllRoleRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
          };

          return FindAllRoleRequest;
        }();

        gameproto.FindAllRoleResult = function () {
          /**
           * Properties of a FindAllRoleResult.
           * @memberof gameproto
           * @interface IFindAllRoleResult
           * @property {Array.<gameproto.IRole>|null} [role] FindAllRoleResult role
           */

          /**
           * Constructs a new FindAllRoleResult.
           * @memberof gameproto
           * @classdesc Represents a FindAllRoleResult.
           * @implements IFindAllRoleResult
           * @constructor
           * @param {gameproto.IFindAllRoleResult=} [properties] Properties to set
           */
          function FindAllRoleResult(properties) {
            this.role = [];
            if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
          }
          /**
           * FindAllRoleResult role.
           * @member {Array.<gameproto.IRole>} role
           * @memberof gameproto.FindAllRoleResult
           * @instance
           */


          FindAllRoleResult.prototype.role = $util.emptyArray;
          /**
           * Creates a new FindAllRoleResult instance using the specified properties.
           * @function create
           * @memberof gameproto.FindAllRoleResult
           * @static
           * @param {gameproto.IFindAllRoleResult=} [properties] Properties to set
           * @returns {gameproto.FindAllRoleResult} FindAllRoleResult instance
           */

          FindAllRoleResult.create = function create(properties) {
            return new FindAllRoleResult(properties);
          };
          /**
           * Encodes the specified FindAllRoleResult message. Does not implicitly {@link gameproto.FindAllRoleResult.verify|verify} messages.
           * @function encode
           * @memberof gameproto.FindAllRoleResult
           * @static
           * @param {gameproto.IFindAllRoleResult} message FindAllRoleResult message or plain object to encode
           * @param {$protobuf.Writer} [writer] Writer to encode to
           * @returns {$protobuf.Writer} Writer
           */


          FindAllRoleResult.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            if (message.role != null && message.role.length) for (var i = 0; i < message.role.length; ++i) $root.gameproto.Role.encode(message.role[i], writer.uint32(
            /* id 2, wireType 2 =*/
            18).fork()).ldelim();
            return writer;
          };
          /**
           * Encodes the specified FindAllRoleResult message, length delimited. Does not implicitly {@link gameproto.FindAllRoleResult.verify|verify} messages.
           * @function encodeDelimited
           * @memberof gameproto.FindAllRoleResult
           * @static
           * @param {gameproto.IFindAllRoleResult} message FindAllRoleResult message or plain object to encode
           * @param {$protobuf.Writer} [writer] Writer to encode to
           * @returns {$protobuf.Writer} Writer
           */


          FindAllRoleResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
          };
          /**
           * Decodes a FindAllRoleResult message from the specified reader or buffer.
           * @function decode
           * @memberof gameproto.FindAllRoleResult
           * @static
           * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
           * @param {number} [length] Message length if known beforehand
           * @returns {gameproto.FindAllRoleResult} FindAllRoleResult
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */


          FindAllRoleResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.gameproto.FindAllRoleResult();

            while (reader.pos < end) {
              var tag = reader.uint32();

              switch (tag >>> 3) {
                case 2:
                  if (!(message.role && message.role.length)) message.role = [];
                  message.role.push($root.gameproto.Role.decode(reader, reader.uint32()));
                  break;

                default:
                  reader.skipType(tag & 7);
                  break;
              }
            }

            return message;
          };
          /**
           * Decodes a FindAllRoleResult message from the specified reader or buffer, length delimited.
           * @function decodeDelimited
           * @memberof gameproto.FindAllRoleResult
           * @static
           * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
           * @returns {gameproto.FindAllRoleResult} FindAllRoleResult
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */


          FindAllRoleResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader)) reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
          };
          /**
           * Verifies a FindAllRoleResult message.
           * @function verify
           * @memberof gameproto.FindAllRoleResult
           * @static
           * @param {Object.<string,*>} message Plain object to verify
           * @returns {string|null} `null` if valid, otherwise the reason why it is not
           */


          FindAllRoleResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null) return "object expected";

            if (message.role != null && message.hasOwnProperty("role")) {
              if (!Array.isArray(message.role)) return "role: array expected";

              for (var i = 0; i < message.role.length; ++i) {
                var error = $root.gameproto.Role.verify(message.role[i]);
                if (error) return "role." + error;
              }
            }

            return null;
          };
          /**
           * Creates a FindAllRoleResult message from a plain object. Also converts values to their respective internal types.
           * @function fromObject
           * @memberof gameproto.FindAllRoleResult
           * @static
           * @param {Object.<string,*>} object Plain object
           * @returns {gameproto.FindAllRoleResult} FindAllRoleResult
           */


          FindAllRoleResult.fromObject = function fromObject(object) {
            if (object instanceof $root.gameproto.FindAllRoleResult) return object;
            var message = new $root.gameproto.FindAllRoleResult();

            if (object.role) {
              if (!Array.isArray(object.role)) throw TypeError(".gameproto.FindAllRoleResult.role: array expected");
              message.role = [];

              for (var i = 0; i < object.role.length; ++i) {
                if (typeof object.role[i] !== "object") throw TypeError(".gameproto.FindAllRoleResult.role: object expected");
                message.role[i] = $root.gameproto.Role.fromObject(object.role[i]);
              }
            }

            return message;
          };
          /**
           * Creates a plain object from a FindAllRoleResult message. Also converts values to other types if specified.
           * @function toObject
           * @memberof gameproto.FindAllRoleResult
           * @static
           * @param {gameproto.FindAllRoleResult} message FindAllRoleResult
           * @param {$protobuf.IConversionOptions} [options] Conversion options
           * @returns {Object.<string,*>} Plain object
           */


          FindAllRoleResult.toObject = function toObject(message, options) {
            if (!options) options = {};
            var object = {};
            if (options.arrays || options.defaults) object.role = [];

            if (message.role && message.role.length) {
              object.role = [];

              for (var j = 0; j < message.role.length; ++j) object.role[j] = $root.gameproto.Role.toObject(message.role[j], options);
            }

            return object;
          };
          /**
           * Converts this FindAllRoleResult to JSON.
           * @function toJSON
           * @memberof gameproto.FindAllRoleResult
           * @instance
           * @returns {Object.<string,*>} JSON object
           */


          FindAllRoleResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
          };

          return FindAllRoleResult;
        }();

        gameproto.SelectRoleRequest = function () {
          /**
           * Properties of a SelectRoleRequest.
           * @memberof gameproto
           * @interface ISelectRoleRequest
           * @property {number|Long} playerId SelectRoleRequest playerId
           * @property {number} index SelectRoleRequest index
           */

          /**
           * Constructs a new SelectRoleRequest.
           * @memberof gameproto
           * @classdesc Represents a SelectRoleRequest.
           * @implements ISelectRoleRequest
           * @constructor
           * @param {gameproto.ISelectRoleRequest=} [properties] Properties to set
           */
          function SelectRoleRequest(properties) {
            if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
          }
          /**
           * SelectRoleRequest playerId.
           * @member {number|Long} playerId
           * @memberof gameproto.SelectRoleRequest
           * @instance
           */


          SelectRoleRequest.prototype.playerId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
          /**
           * SelectRoleRequest index.
           * @member {number} index
           * @memberof gameproto.SelectRoleRequest
           * @instance
           */

          SelectRoleRequest.prototype.index = 0;
          /**
           * Creates a new SelectRoleRequest instance using the specified properties.
           * @function create
           * @memberof gameproto.SelectRoleRequest
           * @static
           * @param {gameproto.ISelectRoleRequest=} [properties] Properties to set
           * @returns {gameproto.SelectRoleRequest} SelectRoleRequest instance
           */

          SelectRoleRequest.create = function create(properties) {
            return new SelectRoleRequest(properties);
          };
          /**
           * Encodes the specified SelectRoleRequest message. Does not implicitly {@link gameproto.SelectRoleRequest.verify|verify} messages.
           * @function encode
           * @memberof gameproto.SelectRoleRequest
           * @static
           * @param {gameproto.ISelectRoleRequest} message SelectRoleRequest message or plain object to encode
           * @param {$protobuf.Writer} [writer] Writer to encode to
           * @returns {$protobuf.Writer} Writer
           */


          SelectRoleRequest.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            writer.uint32(
            /* id 1, wireType 0 =*/
            8).int64(message.playerId);
            writer.uint32(
            /* id 2, wireType 0 =*/
            16).int32(message.index);
            return writer;
          };
          /**
           * Encodes the specified SelectRoleRequest message, length delimited. Does not implicitly {@link gameproto.SelectRoleRequest.verify|verify} messages.
           * @function encodeDelimited
           * @memberof gameproto.SelectRoleRequest
           * @static
           * @param {gameproto.ISelectRoleRequest} message SelectRoleRequest message or plain object to encode
           * @param {$protobuf.Writer} [writer] Writer to encode to
           * @returns {$protobuf.Writer} Writer
           */


          SelectRoleRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
          };
          /**
           * Decodes a SelectRoleRequest message from the specified reader or buffer.
           * @function decode
           * @memberof gameproto.SelectRoleRequest
           * @static
           * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
           * @param {number} [length] Message length if known beforehand
           * @returns {gameproto.SelectRoleRequest} SelectRoleRequest
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */


          SelectRoleRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.gameproto.SelectRoleRequest();

            while (reader.pos < end) {
              var tag = reader.uint32();

              switch (tag >>> 3) {
                case 1:
                  message.playerId = reader.int64();
                  break;

                case 2:
                  message.index = reader.int32();
                  break;

                default:
                  reader.skipType(tag & 7);
                  break;
              }
            }

            if (!message.hasOwnProperty("playerId")) throw $util.ProtocolError("missing required 'playerId'", {
              instance: message
            });
            if (!message.hasOwnProperty("index")) throw $util.ProtocolError("missing required 'index'", {
              instance: message
            });
            return message;
          };
          /**
           * Decodes a SelectRoleRequest message from the specified reader or buffer, length delimited.
           * @function decodeDelimited
           * @memberof gameproto.SelectRoleRequest
           * @static
           * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
           * @returns {gameproto.SelectRoleRequest} SelectRoleRequest
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */


          SelectRoleRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader)) reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
          };
          /**
           * Verifies a SelectRoleRequest message.
           * @function verify
           * @memberof gameproto.SelectRoleRequest
           * @static
           * @param {Object.<string,*>} message Plain object to verify
           * @returns {string|null} `null` if valid, otherwise the reason why it is not
           */


          SelectRoleRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null) return "object expected";
            if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high))) return "playerId: integer|Long expected";
            if (!$util.isInteger(message.index)) return "index: integer expected";
            return null;
          };
          /**
           * Creates a SelectRoleRequest message from a plain object. Also converts values to their respective internal types.
           * @function fromObject
           * @memberof gameproto.SelectRoleRequest
           * @static
           * @param {Object.<string,*>} object Plain object
           * @returns {gameproto.SelectRoleRequest} SelectRoleRequest
           */


          SelectRoleRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.gameproto.SelectRoleRequest) return object;
            var message = new $root.gameproto.SelectRoleRequest();
            if (object.playerId != null) if ($util.Long) (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = false;else if (typeof object.playerId === "string") message.playerId = parseInt(object.playerId, 10);else if (typeof object.playerId === "number") message.playerId = object.playerId;else if (typeof object.playerId === "object") message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber();
            if (object.index != null) message.index = object.index | 0;
            return message;
          };
          /**
           * Creates a plain object from a SelectRoleRequest message. Also converts values to other types if specified.
           * @function toObject
           * @memberof gameproto.SelectRoleRequest
           * @static
           * @param {gameproto.SelectRoleRequest} message SelectRoleRequest
           * @param {$protobuf.IConversionOptions} [options] Conversion options
           * @returns {Object.<string,*>} Plain object
           */


          SelectRoleRequest.toObject = function toObject(message, options) {
            if (!options) options = {};
            var object = {};

            if (options.defaults) {
              if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.playerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
              } else object.playerId = options.longs === String ? "0" : 0;

              object.index = 0;
            }

            if (message.playerId != null && message.hasOwnProperty("playerId")) if (typeof message.playerId === "number") object.playerId = options.longs === String ? String(message.playerId) : message.playerId;else object.playerId = options.longs === String ? $util.Long.prototype.toString.call(message.playerId) : options.longs === Number ? new $util.LongBits(message.playerId.low >>> 0, message.playerId.high >>> 0).toNumber() : message.playerId;
            if (message.index != null && message.hasOwnProperty("index")) object.index = message.index;
            return object;
          };
          /**
           * Converts this SelectRoleRequest to JSON.
           * @function toJSON
           * @memberof gameproto.SelectRoleRequest
           * @instance
           * @returns {Object.<string,*>} JSON object
           */


          SelectRoleRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
          };

          return SelectRoleRequest;
        }();

        gameproto.SelectRoleResult = function () {
          /**
           * Properties of a SelectRoleResult.
           * @memberof gameproto
           * @interface ISelectRoleResult
           * @property {gameproto.IPlayer} player SelectRoleResult player
           */

          /**
           * Constructs a new SelectRoleResult.
           * @memberof gameproto
           * @classdesc Represents a SelectRoleResult.
           * @implements ISelectRoleResult
           * @constructor
           * @param {gameproto.ISelectRoleResult=} [properties] Properties to set
           */
          function SelectRoleResult(properties) {
            if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
          }
          /**
           * SelectRoleResult player.
           * @member {gameproto.IPlayer} player
           * @memberof gameproto.SelectRoleResult
           * @instance
           */


          SelectRoleResult.prototype.player = null;
          /**
           * Creates a new SelectRoleResult instance using the specified properties.
           * @function create
           * @memberof gameproto.SelectRoleResult
           * @static
           * @param {gameproto.ISelectRoleResult=} [properties] Properties to set
           * @returns {gameproto.SelectRoleResult} SelectRoleResult instance
           */

          SelectRoleResult.create = function create(properties) {
            return new SelectRoleResult(properties);
          };
          /**
           * Encodes the specified SelectRoleResult message. Does not implicitly {@link gameproto.SelectRoleResult.verify|verify} messages.
           * @function encode
           * @memberof gameproto.SelectRoleResult
           * @static
           * @param {gameproto.ISelectRoleResult} message SelectRoleResult message or plain object to encode
           * @param {$protobuf.Writer} [writer] Writer to encode to
           * @returns {$protobuf.Writer} Writer
           */


          SelectRoleResult.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            $root.gameproto.Player.encode(message.player, writer.uint32(
            /* id 1, wireType 2 =*/
            10).fork()).ldelim();
            return writer;
          };
          /**
           * Encodes the specified SelectRoleResult message, length delimited. Does not implicitly {@link gameproto.SelectRoleResult.verify|verify} messages.
           * @function encodeDelimited
           * @memberof gameproto.SelectRoleResult
           * @static
           * @param {gameproto.ISelectRoleResult} message SelectRoleResult message or plain object to encode
           * @param {$protobuf.Writer} [writer] Writer to encode to
           * @returns {$protobuf.Writer} Writer
           */


          SelectRoleResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
          };
          /**
           * Decodes a SelectRoleResult message from the specified reader or buffer.
           * @function decode
           * @memberof gameproto.SelectRoleResult
           * @static
           * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
           * @param {number} [length] Message length if known beforehand
           * @returns {gameproto.SelectRoleResult} SelectRoleResult
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */


          SelectRoleResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.gameproto.SelectRoleResult();

            while (reader.pos < end) {
              var tag = reader.uint32();

              switch (tag >>> 3) {
                case 1:
                  message.player = $root.gameproto.Player.decode(reader, reader.uint32());
                  break;

                default:
                  reader.skipType(tag & 7);
                  break;
              }
            }

            if (!message.hasOwnProperty("player")) throw $util.ProtocolError("missing required 'player'", {
              instance: message
            });
            return message;
          };
          /**
           * Decodes a SelectRoleResult message from the specified reader or buffer, length delimited.
           * @function decodeDelimited
           * @memberof gameproto.SelectRoleResult
           * @static
           * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
           * @returns {gameproto.SelectRoleResult} SelectRoleResult
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */


          SelectRoleResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader)) reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
          };
          /**
           * Verifies a SelectRoleResult message.
           * @function verify
           * @memberof gameproto.SelectRoleResult
           * @static
           * @param {Object.<string,*>} message Plain object to verify
           * @returns {string|null} `null` if valid, otherwise the reason why it is not
           */


          SelectRoleResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null) return "object expected";
            {
              var error = $root.gameproto.Player.verify(message.player);
              if (error) return "player." + error;
            }
            return null;
          };
          /**
           * Creates a SelectRoleResult message from a plain object. Also converts values to their respective internal types.
           * @function fromObject
           * @memberof gameproto.SelectRoleResult
           * @static
           * @param {Object.<string,*>} object Plain object
           * @returns {gameproto.SelectRoleResult} SelectRoleResult
           */


          SelectRoleResult.fromObject = function fromObject(object) {
            if (object instanceof $root.gameproto.SelectRoleResult) return object;
            var message = new $root.gameproto.SelectRoleResult();

            if (object.player != null) {
              if (typeof object.player !== "object") throw TypeError(".gameproto.SelectRoleResult.player: object expected");
              message.player = $root.gameproto.Player.fromObject(object.player);
            }

            return message;
          };
          /**
           * Creates a plain object from a SelectRoleResult message. Also converts values to other types if specified.
           * @function toObject
           * @memberof gameproto.SelectRoleResult
           * @static
           * @param {gameproto.SelectRoleResult} message SelectRoleResult
           * @param {$protobuf.IConversionOptions} [options] Conversion options
           * @returns {Object.<string,*>} Plain object
           */


          SelectRoleResult.toObject = function toObject(message, options) {
            if (!options) options = {};
            var object = {};
            if (options.defaults) object.player = null;
            if (message.player != null && message.hasOwnProperty("player")) object.player = $root.gameproto.Player.toObject(message.player, options);
            return object;
          };
          /**
           * Converts this SelectRoleResult to JSON.
           * @function toJSON
           * @memberof gameproto.SelectRoleResult
           * @instance
           * @returns {Object.<string,*>} JSON object
           */


          SelectRoleResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
          };

          return SelectRoleResult;
        }();

        gameproto.LoginRequest = function () {
          /**
           * Properties of a LoginRequest.
           * @memberof gameproto
           * @interface ILoginRequest
           * @property {string} username LoginRequest username
           * @property {string} password LoginRequest password
           */

          /**
           * Constructs a new LoginRequest.
           * @memberof gameproto
           * @classdesc Represents a LoginRequest.
           * @implements ILoginRequest
           * @constructor
           * @param {gameproto.ILoginRequest=} [properties] Properties to set
           */
          function LoginRequest(properties) {
            if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
          }
          /**
           * LoginRequest username.
           * @member {string} username
           * @memberof gameproto.LoginRequest
           * @instance
           */


          LoginRequest.prototype.username = "";
          /**
           * LoginRequest password.
           * @member {string} password
           * @memberof gameproto.LoginRequest
           * @instance
           */

          LoginRequest.prototype.password = "";
          /**
           * Creates a new LoginRequest instance using the specified properties.
           * @function create
           * @memberof gameproto.LoginRequest
           * @static
           * @param {gameproto.ILoginRequest=} [properties] Properties to set
           * @returns {gameproto.LoginRequest} LoginRequest instance
           */

          LoginRequest.create = function create(properties) {
            return new LoginRequest(properties);
          };
          /**
           * Encodes the specified LoginRequest message. Does not implicitly {@link gameproto.LoginRequest.verify|verify} messages.
           * @function encode
           * @memberof gameproto.LoginRequest
           * @static
           * @param {gameproto.ILoginRequest} message LoginRequest message or plain object to encode
           * @param {$protobuf.Writer} [writer] Writer to encode to
           * @returns {$protobuf.Writer} Writer
           */


          LoginRequest.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            writer.uint32(
            /* id 1, wireType 2 =*/
            10).string(message.username);
            writer.uint32(
            /* id 2, wireType 2 =*/
            18).string(message.password);
            return writer;
          };
          /**
           * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link gameproto.LoginRequest.verify|verify} messages.
           * @function encodeDelimited
           * @memberof gameproto.LoginRequest
           * @static
           * @param {gameproto.ILoginRequest} message LoginRequest message or plain object to encode
           * @param {$protobuf.Writer} [writer] Writer to encode to
           * @returns {$protobuf.Writer} Writer
           */


          LoginRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
          };
          /**
           * Decodes a LoginRequest message from the specified reader or buffer.
           * @function decode
           * @memberof gameproto.LoginRequest
           * @static
           * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
           * @param {number} [length] Message length if known beforehand
           * @returns {gameproto.LoginRequest} LoginRequest
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */


          LoginRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.gameproto.LoginRequest();

            while (reader.pos < end) {
              var tag = reader.uint32();

              switch (tag >>> 3) {
                case 1:
                  message.username = reader.string();
                  break;

                case 2:
                  message.password = reader.string();
                  break;

                default:
                  reader.skipType(tag & 7);
                  break;
              }
            }

            if (!message.hasOwnProperty("username")) throw $util.ProtocolError("missing required 'username'", {
              instance: message
            });
            if (!message.hasOwnProperty("password")) throw $util.ProtocolError("missing required 'password'", {
              instance: message
            });
            return message;
          };
          /**
           * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
           * @function decodeDelimited
           * @memberof gameproto.LoginRequest
           * @static
           * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
           * @returns {gameproto.LoginRequest} LoginRequest
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */


          LoginRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader)) reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
          };
          /**
           * Verifies a LoginRequest message.
           * @function verify
           * @memberof gameproto.LoginRequest
           * @static
           * @param {Object.<string,*>} message Plain object to verify
           * @returns {string|null} `null` if valid, otherwise the reason why it is not
           */


          LoginRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null) return "object expected";
            if (!$util.isString(message.username)) return "username: string expected";
            if (!$util.isString(message.password)) return "password: string expected";
            return null;
          };
          /**
           * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
           * @function fromObject
           * @memberof gameproto.LoginRequest
           * @static
           * @param {Object.<string,*>} object Plain object
           * @returns {gameproto.LoginRequest} LoginRequest
           */


          LoginRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.gameproto.LoginRequest) return object;
            var message = new $root.gameproto.LoginRequest();
            if (object.username != null) message.username = String(object.username);
            if (object.password != null) message.password = String(object.password);
            return message;
          };
          /**
           * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
           * @function toObject
           * @memberof gameproto.LoginRequest
           * @static
           * @param {gameproto.LoginRequest} message LoginRequest
           * @param {$protobuf.IConversionOptions} [options] Conversion options
           * @returns {Object.<string,*>} Plain object
           */


          LoginRequest.toObject = function toObject(message, options) {
            if (!options) options = {};
            var object = {};

            if (options.defaults) {
              object.username = "";
              object.password = "";
            }

            if (message.username != null && message.hasOwnProperty("username")) object.username = message.username;
            if (message.password != null && message.hasOwnProperty("password")) object.password = message.password;
            return object;
          };
          /**
           * Converts this LoginRequest to JSON.
           * @function toJSON
           * @memberof gameproto.LoginRequest
           * @instance
           * @returns {Object.<string,*>} JSON object
           */


          LoginRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
          };

          return LoginRequest;
        }();

        gameproto.LoginResult = function () {
          /**
           * Properties of a LoginResult.
           * @memberof gameproto
           * @interface ILoginResult
           * @property {number|Long} playerId LoginResult playerId
           * @property {Array.<gameproto.IRole>|null} [role] LoginResult role
           */

          /**
           * Constructs a new LoginResult.
           * @memberof gameproto
           * @classdesc Represents a LoginResult.
           * @implements ILoginResult
           * @constructor
           * @param {gameproto.ILoginResult=} [properties] Properties to set
           */
          function LoginResult(properties) {
            this.role = [];
            if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
          }
          /**
           * LoginResult playerId.
           * @member {number|Long} playerId
           * @memberof gameproto.LoginResult
           * @instance
           */


          LoginResult.prototype.playerId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
          /**
           * LoginResult role.
           * @member {Array.<gameproto.IRole>} role
           * @memberof gameproto.LoginResult
           * @instance
           */

          LoginResult.prototype.role = $util.emptyArray;
          /**
           * Creates a new LoginResult instance using the specified properties.
           * @function create
           * @memberof gameproto.LoginResult
           * @static
           * @param {gameproto.ILoginResult=} [properties] Properties to set
           * @returns {gameproto.LoginResult} LoginResult instance
           */

          LoginResult.create = function create(properties) {
            return new LoginResult(properties);
          };
          /**
           * Encodes the specified LoginResult message. Does not implicitly {@link gameproto.LoginResult.verify|verify} messages.
           * @function encode
           * @memberof gameproto.LoginResult
           * @static
           * @param {gameproto.ILoginResult} message LoginResult message or plain object to encode
           * @param {$protobuf.Writer} [writer] Writer to encode to
           * @returns {$protobuf.Writer} Writer
           */


          LoginResult.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            writer.uint32(
            /* id 1, wireType 0 =*/
            8).int64(message.playerId);
            if (message.role != null && message.role.length) for (var i = 0; i < message.role.length; ++i) $root.gameproto.Role.encode(message.role[i], writer.uint32(
            /* id 2, wireType 2 =*/
            18).fork()).ldelim();
            return writer;
          };
          /**
           * Encodes the specified LoginResult message, length delimited. Does not implicitly {@link gameproto.LoginResult.verify|verify} messages.
           * @function encodeDelimited
           * @memberof gameproto.LoginResult
           * @static
           * @param {gameproto.ILoginResult} message LoginResult message or plain object to encode
           * @param {$protobuf.Writer} [writer] Writer to encode to
           * @returns {$protobuf.Writer} Writer
           */


          LoginResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
          };
          /**
           * Decodes a LoginResult message from the specified reader or buffer.
           * @function decode
           * @memberof gameproto.LoginResult
           * @static
           * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
           * @param {number} [length] Message length if known beforehand
           * @returns {gameproto.LoginResult} LoginResult
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */


          LoginResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.gameproto.LoginResult();

            while (reader.pos < end) {
              var tag = reader.uint32();

              switch (tag >>> 3) {
                case 1:
                  message.playerId = reader.int64();
                  break;

                case 2:
                  if (!(message.role && message.role.length)) message.role = [];
                  message.role.push($root.gameproto.Role.decode(reader, reader.uint32()));
                  break;

                default:
                  reader.skipType(tag & 7);
                  break;
              }
            }

            if (!message.hasOwnProperty("playerId")) throw $util.ProtocolError("missing required 'playerId'", {
              instance: message
            });
            return message;
          };
          /**
           * Decodes a LoginResult message from the specified reader or buffer, length delimited.
           * @function decodeDelimited
           * @memberof gameproto.LoginResult
           * @static
           * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
           * @returns {gameproto.LoginResult} LoginResult
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */


          LoginResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader)) reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
          };
          /**
           * Verifies a LoginResult message.
           * @function verify
           * @memberof gameproto.LoginResult
           * @static
           * @param {Object.<string,*>} message Plain object to verify
           * @returns {string|null} `null` if valid, otherwise the reason why it is not
           */


          LoginResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null) return "object expected";
            if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high))) return "playerId: integer|Long expected";

            if (message.role != null && message.hasOwnProperty("role")) {
              if (!Array.isArray(message.role)) return "role: array expected";

              for (var i = 0; i < message.role.length; ++i) {
                var error = $root.gameproto.Role.verify(message.role[i]);
                if (error) return "role." + error;
              }
            }

            return null;
          };
          /**
           * Creates a LoginResult message from a plain object. Also converts values to their respective internal types.
           * @function fromObject
           * @memberof gameproto.LoginResult
           * @static
           * @param {Object.<string,*>} object Plain object
           * @returns {gameproto.LoginResult} LoginResult
           */


          LoginResult.fromObject = function fromObject(object) {
            if (object instanceof $root.gameproto.LoginResult) return object;
            var message = new $root.gameproto.LoginResult();
            if (object.playerId != null) if ($util.Long) (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = false;else if (typeof object.playerId === "string") message.playerId = parseInt(object.playerId, 10);else if (typeof object.playerId === "number") message.playerId = object.playerId;else if (typeof object.playerId === "object") message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber();

            if (object.role) {
              if (!Array.isArray(object.role)) throw TypeError(".gameproto.LoginResult.role: array expected");
              message.role = [];

              for (var i = 0; i < object.role.length; ++i) {
                if (typeof object.role[i] !== "object") throw TypeError(".gameproto.LoginResult.role: object expected");
                message.role[i] = $root.gameproto.Role.fromObject(object.role[i]);
              }
            }

            return message;
          };
          /**
           * Creates a plain object from a LoginResult message. Also converts values to other types if specified.
           * @function toObject
           * @memberof gameproto.LoginResult
           * @static
           * @param {gameproto.LoginResult} message LoginResult
           * @param {$protobuf.IConversionOptions} [options] Conversion options
           * @returns {Object.<string,*>} Plain object
           */


          LoginResult.toObject = function toObject(message, options) {
            if (!options) options = {};
            var object = {};
            if (options.arrays || options.defaults) object.role = [];
            if (options.defaults) if ($util.Long) {
              var long = new $util.Long(0, 0, false);
              object.playerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else object.playerId = options.longs === String ? "0" : 0;
            if (message.playerId != null && message.hasOwnProperty("playerId")) if (typeof message.playerId === "number") object.playerId = options.longs === String ? String(message.playerId) : message.playerId;else object.playerId = options.longs === String ? $util.Long.prototype.toString.call(message.playerId) : options.longs === Number ? new $util.LongBits(message.playerId.low >>> 0, message.playerId.high >>> 0).toNumber() : message.playerId;

            if (message.role && message.role.length) {
              object.role = [];

              for (var j = 0; j < message.role.length; ++j) object.role[j] = $root.gameproto.Role.toObject(message.role[j], options);
            }

            return object;
          };
          /**
           * Converts this LoginResult to JSON.
           * @function toJSON
           * @memberof gameproto.LoginResult
           * @instance
           * @returns {Object.<string,*>} JSON object
           */


          LoginResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
          };

          return LoginResult;
        }();

        gameproto.Role = function () {
          /**
           * Properties of a Role.
           * @memberof gameproto
           * @interface IRole
           * @property {string} roleName Role roleName
           * @property {string} picture Role picture
           * @property {number} index Role index
           */

          /**
           * Constructs a new Role.
           * @memberof gameproto
           * @classdesc Represents a Role.
           * @implements IRole
           * @constructor
           * @param {gameproto.IRole=} [properties] Properties to set
           */
          function Role(properties) {
            if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
          }
          /**
           * Role roleName.
           * @member {string} roleName
           * @memberof gameproto.Role
           * @instance
           */


          Role.prototype.roleName = "";
          /**
           * Role picture.
           * @member {string} picture
           * @memberof gameproto.Role
           * @instance
           */

          Role.prototype.picture = "";
          /**
           * Role index.
           * @member {number} index
           * @memberof gameproto.Role
           * @instance
           */

          Role.prototype.index = 0;
          /**
           * Creates a new Role instance using the specified properties.
           * @function create
           * @memberof gameproto.Role
           * @static
           * @param {gameproto.IRole=} [properties] Properties to set
           * @returns {gameproto.Role} Role instance
           */

          Role.create = function create(properties) {
            return new Role(properties);
          };
          /**
           * Encodes the specified Role message. Does not implicitly {@link gameproto.Role.verify|verify} messages.
           * @function encode
           * @memberof gameproto.Role
           * @static
           * @param {gameproto.IRole} message Role message or plain object to encode
           * @param {$protobuf.Writer} [writer] Writer to encode to
           * @returns {$protobuf.Writer} Writer
           */


          Role.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            writer.uint32(
            /* id 1, wireType 2 =*/
            10).string(message.roleName);
            writer.uint32(
            /* id 2, wireType 2 =*/
            18).string(message.picture);
            writer.uint32(
            /* id 3, wireType 0 =*/
            24).int32(message.index);
            return writer;
          };
          /**
           * Encodes the specified Role message, length delimited. Does not implicitly {@link gameproto.Role.verify|verify} messages.
           * @function encodeDelimited
           * @memberof gameproto.Role
           * @static
           * @param {gameproto.IRole} message Role message or plain object to encode
           * @param {$protobuf.Writer} [writer] Writer to encode to
           * @returns {$protobuf.Writer} Writer
           */


          Role.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
          };
          /**
           * Decodes a Role message from the specified reader or buffer.
           * @function decode
           * @memberof gameproto.Role
           * @static
           * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
           * @param {number} [length] Message length if known beforehand
           * @returns {gameproto.Role} Role
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */


          Role.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.gameproto.Role();

            while (reader.pos < end) {
              var tag = reader.uint32();

              switch (tag >>> 3) {
                case 1:
                  message.roleName = reader.string();
                  break;

                case 2:
                  message.picture = reader.string();
                  break;

                case 3:
                  message.index = reader.int32();
                  break;

                default:
                  reader.skipType(tag & 7);
                  break;
              }
            }

            if (!message.hasOwnProperty("roleName")) throw $util.ProtocolError("missing required 'roleName'", {
              instance: message
            });
            if (!message.hasOwnProperty("picture")) throw $util.ProtocolError("missing required 'picture'", {
              instance: message
            });
            if (!message.hasOwnProperty("index")) throw $util.ProtocolError("missing required 'index'", {
              instance: message
            });
            return message;
          };
          /**
           * Decodes a Role message from the specified reader or buffer, length delimited.
           * @function decodeDelimited
           * @memberof gameproto.Role
           * @static
           * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
           * @returns {gameproto.Role} Role
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */


          Role.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader)) reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
          };
          /**
           * Verifies a Role message.
           * @function verify
           * @memberof gameproto.Role
           * @static
           * @param {Object.<string,*>} message Plain object to verify
           * @returns {string|null} `null` if valid, otherwise the reason why it is not
           */


          Role.verify = function verify(message) {
            if (typeof message !== "object" || message === null) return "object expected";
            if (!$util.isString(message.roleName)) return "roleName: string expected";
            if (!$util.isString(message.picture)) return "picture: string expected";
            if (!$util.isInteger(message.index)) return "index: integer expected";
            return null;
          };
          /**
           * Creates a Role message from a plain object. Also converts values to their respective internal types.
           * @function fromObject
           * @memberof gameproto.Role
           * @static
           * @param {Object.<string,*>} object Plain object
           * @returns {gameproto.Role} Role
           */


          Role.fromObject = function fromObject(object) {
            if (object instanceof $root.gameproto.Role) return object;
            var message = new $root.gameproto.Role();
            if (object.roleName != null) message.roleName = String(object.roleName);
            if (object.picture != null) message.picture = String(object.picture);
            if (object.index != null) message.index = object.index | 0;
            return message;
          };
          /**
           * Creates a plain object from a Role message. Also converts values to other types if specified.
           * @function toObject
           * @memberof gameproto.Role
           * @static
           * @param {gameproto.Role} message Role
           * @param {$protobuf.IConversionOptions} [options] Conversion options
           * @returns {Object.<string,*>} Plain object
           */


          Role.toObject = function toObject(message, options) {
            if (!options) options = {};
            var object = {};

            if (options.defaults) {
              object.roleName = "";
              object.picture = "";
              object.index = 0;
            }

            if (message.roleName != null && message.hasOwnProperty("roleName")) object.roleName = message.roleName;
            if (message.picture != null && message.hasOwnProperty("picture")) object.picture = message.picture;
            if (message.index != null && message.hasOwnProperty("index")) object.index = message.index;
            return object;
          };
          /**
           * Converts this Role to JSON.
           * @function toJSON
           * @memberof gameproto.Role
           * @instance
           * @returns {Object.<string,*>} JSON object
           */


          Role.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
          };

          return Role;
        }();

        gameproto.ChallengeRequest = function () {
          /**
           * Properties of a ChallengeRequest.
           * @memberof gameproto
           * @interface IChallengeRequest
           * @property {number|Long} playerId ChallengeRequest playerId
           * @property {number} index ChallengeRequest index
           */

          /**
           * Constructs a new ChallengeRequest.
           * @memberof gameproto
           * @classdesc Represents a ChallengeRequest.
           * @implements IChallengeRequest
           * @constructor
           * @param {gameproto.IChallengeRequest=} [properties] Properties to set
           */
          function ChallengeRequest(properties) {
            if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
          }
          /**
           * ChallengeRequest playerId.
           * @member {number|Long} playerId
           * @memberof gameproto.ChallengeRequest
           * @instance
           */


          ChallengeRequest.prototype.playerId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
          /**
           * ChallengeRequest index.
           * @member {number} index
           * @memberof gameproto.ChallengeRequest
           * @instance
           */

          ChallengeRequest.prototype.index = 0;
          /**
           * Creates a new ChallengeRequest instance using the specified properties.
           * @function create
           * @memberof gameproto.ChallengeRequest
           * @static
           * @param {gameproto.IChallengeRequest=} [properties] Properties to set
           * @returns {gameproto.ChallengeRequest} ChallengeRequest instance
           */

          ChallengeRequest.create = function create(properties) {
            return new ChallengeRequest(properties);
          };
          /**
           * Encodes the specified ChallengeRequest message. Does not implicitly {@link gameproto.ChallengeRequest.verify|verify} messages.
           * @function encode
           * @memberof gameproto.ChallengeRequest
           * @static
           * @param {gameproto.IChallengeRequest} message ChallengeRequest message or plain object to encode
           * @param {$protobuf.Writer} [writer] Writer to encode to
           * @returns {$protobuf.Writer} Writer
           */


          ChallengeRequest.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            writer.uint32(
            /* id 1, wireType 0 =*/
            8).int64(message.playerId);
            writer.uint32(
            /* id 2, wireType 0 =*/
            16).int32(message.index);
            return writer;
          };
          /**
           * Encodes the specified ChallengeRequest message, length delimited. Does not implicitly {@link gameproto.ChallengeRequest.verify|verify} messages.
           * @function encodeDelimited
           * @memberof gameproto.ChallengeRequest
           * @static
           * @param {gameproto.IChallengeRequest} message ChallengeRequest message or plain object to encode
           * @param {$protobuf.Writer} [writer] Writer to encode to
           * @returns {$protobuf.Writer} Writer
           */


          ChallengeRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
          };
          /**
           * Decodes a ChallengeRequest message from the specified reader or buffer.
           * @function decode
           * @memberof gameproto.ChallengeRequest
           * @static
           * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
           * @param {number} [length] Message length if known beforehand
           * @returns {gameproto.ChallengeRequest} ChallengeRequest
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */


          ChallengeRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.gameproto.ChallengeRequest();

            while (reader.pos < end) {
              var tag = reader.uint32();

              switch (tag >>> 3) {
                case 1:
                  message.playerId = reader.int64();
                  break;

                case 2:
                  message.index = reader.int32();
                  break;

                default:
                  reader.skipType(tag & 7);
                  break;
              }
            }

            if (!message.hasOwnProperty("playerId")) throw $util.ProtocolError("missing required 'playerId'", {
              instance: message
            });
            if (!message.hasOwnProperty("index")) throw $util.ProtocolError("missing required 'index'", {
              instance: message
            });
            return message;
          };
          /**
           * Decodes a ChallengeRequest message from the specified reader or buffer, length delimited.
           * @function decodeDelimited
           * @memberof gameproto.ChallengeRequest
           * @static
           * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
           * @returns {gameproto.ChallengeRequest} ChallengeRequest
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */


          ChallengeRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader)) reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
          };
          /**
           * Verifies a ChallengeRequest message.
           * @function verify
           * @memberof gameproto.ChallengeRequest
           * @static
           * @param {Object.<string,*>} message Plain object to verify
           * @returns {string|null} `null` if valid, otherwise the reason why it is not
           */


          ChallengeRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null) return "object expected";
            if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high))) return "playerId: integer|Long expected";
            if (!$util.isInteger(message.index)) return "index: integer expected";
            return null;
          };
          /**
           * Creates a ChallengeRequest message from a plain object. Also converts values to their respective internal types.
           * @function fromObject
           * @memberof gameproto.ChallengeRequest
           * @static
           * @param {Object.<string,*>} object Plain object
           * @returns {gameproto.ChallengeRequest} ChallengeRequest
           */


          ChallengeRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.gameproto.ChallengeRequest) return object;
            var message = new $root.gameproto.ChallengeRequest();
            if (object.playerId != null) if ($util.Long) (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = false;else if (typeof object.playerId === "string") message.playerId = parseInt(object.playerId, 10);else if (typeof object.playerId === "number") message.playerId = object.playerId;else if (typeof object.playerId === "object") message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber();
            if (object.index != null) message.index = object.index | 0;
            return message;
          };
          /**
           * Creates a plain object from a ChallengeRequest message. Also converts values to other types if specified.
           * @function toObject
           * @memberof gameproto.ChallengeRequest
           * @static
           * @param {gameproto.ChallengeRequest} message ChallengeRequest
           * @param {$protobuf.IConversionOptions} [options] Conversion options
           * @returns {Object.<string,*>} Plain object
           */


          ChallengeRequest.toObject = function toObject(message, options) {
            if (!options) options = {};
            var object = {};

            if (options.defaults) {
              if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.playerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
              } else object.playerId = options.longs === String ? "0" : 0;

              object.index = 0;
            }

            if (message.playerId != null && message.hasOwnProperty("playerId")) if (typeof message.playerId === "number") object.playerId = options.longs === String ? String(message.playerId) : message.playerId;else object.playerId = options.longs === String ? $util.Long.prototype.toString.call(message.playerId) : options.longs === Number ? new $util.LongBits(message.playerId.low >>> 0, message.playerId.high >>> 0).toNumber() : message.playerId;
            if (message.index != null && message.hasOwnProperty("index")) object.index = message.index;
            return object;
          };
          /**
           * Converts this ChallengeRequest to JSON.
           * @function toJSON
           * @memberof gameproto.ChallengeRequest
           * @instance
           * @returns {Object.<string,*>} JSON object
           */


          ChallengeRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
          };

          return ChallengeRequest;
        }();

        gameproto.ChallengeResult = function () {
          /**
           * Properties of a ChallengeResult.
           * @memberof gameproto
           * @interface IChallengeResult
           * @property {number} isWin ChallengeResult isWin
           * @property {Array.<gameproto.IFightResult>|null} [fightResult] ChallengeResult fightResult
           * @property {Array.<number>|null} [skillId] ChallengeResult skillId
           * @property {number} playerLife ChallengeResult playerLife
           * @property {number} targetLife ChallengeResult targetLife
           * @property {number} customsPass ChallengeResult customsPass
           * @property {gameproto.IPlayer} target ChallengeResult target
           * @property {string} winnerName ChallengeResult winnerName
           * @property {number|null} [resurgenceCount] ChallengeResult resurgenceCount
           * @property {number} flushCount ChallengeResult flushCount
           * @property {number} nowCustomsPass ChallengeResult nowCustomsPass
           * @property {number} playerBlue ChallengeResult playerBlue
           * @property {number} targetBlue ChallengeResult targetBlue
           */

          /**
           * Constructs a new ChallengeResult.
           * @memberof gameproto
           * @classdesc Represents a ChallengeResult.
           * @implements IChallengeResult
           * @constructor
           * @param {gameproto.IChallengeResult=} [properties] Properties to set
           */
          function ChallengeResult(properties) {
            this.fightResult = [];
            this.skillId = [];
            if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
          }
          /**
           * ChallengeResult isWin.
           * @member {number} isWin
           * @memberof gameproto.ChallengeResult
           * @instance
           */


          ChallengeResult.prototype.isWin = 0;
          /**
           * ChallengeResult fightResult.
           * @member {Array.<gameproto.IFightResult>} fightResult
           * @memberof gameproto.ChallengeResult
           * @instance
           */

          ChallengeResult.prototype.fightResult = $util.emptyArray;
          /**
           * ChallengeResult skillId.
           * @member {Array.<number>} skillId
           * @memberof gameproto.ChallengeResult
           * @instance
           */

          ChallengeResult.prototype.skillId = $util.emptyArray;
          /**
           * ChallengeResult playerLife.
           * @member {number} playerLife
           * @memberof gameproto.ChallengeResult
           * @instance
           */

          ChallengeResult.prototype.playerLife = 0;
          /**
           * ChallengeResult targetLife.
           * @member {number} targetLife
           * @memberof gameproto.ChallengeResult
           * @instance
           */

          ChallengeResult.prototype.targetLife = 0;
          /**
           * ChallengeResult customsPass.
           * @member {number} customsPass
           * @memberof gameproto.ChallengeResult
           * @instance
           */

          ChallengeResult.prototype.customsPass = 0;
          /**
           * ChallengeResult target.
           * @member {gameproto.IPlayer} target
           * @memberof gameproto.ChallengeResult
           * @instance
           */

          ChallengeResult.prototype.target = null;
          /**
           * ChallengeResult winnerName.
           * @member {string} winnerName
           * @memberof gameproto.ChallengeResult
           * @instance
           */

          ChallengeResult.prototype.winnerName = "";
          /**
           * ChallengeResult resurgenceCount.
           * @member {number} resurgenceCount
           * @memberof gameproto.ChallengeResult
           * @instance
           */

          ChallengeResult.prototype.resurgenceCount = 0;
          /**
           * ChallengeResult flushCount.
           * @member {number} flushCount
           * @memberof gameproto.ChallengeResult
           * @instance
           */

          ChallengeResult.prototype.flushCount = 0;
          /**
           * ChallengeResult nowCustomsPass.
           * @member {number} nowCustomsPass
           * @memberof gameproto.ChallengeResult
           * @instance
           */

          ChallengeResult.prototype.nowCustomsPass = 0;
          /**
           * ChallengeResult playerBlue.
           * @member {number} playerBlue
           * @memberof gameproto.ChallengeResult
           * @instance
           */

          ChallengeResult.prototype.playerBlue = 0;
          /**
           * ChallengeResult targetBlue.
           * @member {number} targetBlue
           * @memberof gameproto.ChallengeResult
           * @instance
           */

          ChallengeResult.prototype.targetBlue = 0;
          /**
           * Creates a new ChallengeResult instance using the specified properties.
           * @function create
           * @memberof gameproto.ChallengeResult
           * @static
           * @param {gameproto.IChallengeResult=} [properties] Properties to set
           * @returns {gameproto.ChallengeResult} ChallengeResult instance
           */

          ChallengeResult.create = function create(properties) {
            return new ChallengeResult(properties);
          };
          /**
           * Encodes the specified ChallengeResult message. Does not implicitly {@link gameproto.ChallengeResult.verify|verify} messages.
           * @function encode
           * @memberof gameproto.ChallengeResult
           * @static
           * @param {gameproto.IChallengeResult} message ChallengeResult message or plain object to encode
           * @param {$protobuf.Writer} [writer] Writer to encode to
           * @returns {$protobuf.Writer} Writer
           */


          ChallengeResult.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            writer.uint32(
            /* id 1, wireType 0 =*/
            8).int32(message.isWin);
            if (message.fightResult != null && message.fightResult.length) for (var i = 0; i < message.fightResult.length; ++i) $root.gameproto.FightResult.encode(message.fightResult[i], writer.uint32(
            /* id 2, wireType 2 =*/
            18).fork()).ldelim();
            if (message.skillId != null && message.skillId.length) for (var i = 0; i < message.skillId.length; ++i) writer.uint32(
            /* id 3, wireType 0 =*/
            24).int32(message.skillId[i]);
            writer.uint32(
            /* id 4, wireType 0 =*/
            32).int32(message.playerLife);
            writer.uint32(
            /* id 5, wireType 0 =*/
            40).int32(message.targetLife);
            writer.uint32(
            /* id 6, wireType 0 =*/
            48).int32(message.customsPass);
            $root.gameproto.Player.encode(message.target, writer.uint32(
            /* id 7, wireType 2 =*/
            58).fork()).ldelim();
            writer.uint32(
            /* id 8, wireType 2 =*/
            66).string(message.winnerName);
            if (message.resurgenceCount != null && message.hasOwnProperty("resurgenceCount")) writer.uint32(
            /* id 9, wireType 0 =*/
            72).int32(message.resurgenceCount);
            writer.uint32(
            /* id 10, wireType 0 =*/
            80).int32(message.flushCount);
            writer.uint32(
            /* id 11, wireType 0 =*/
            88).int32(message.nowCustomsPass);
            writer.uint32(
            /* id 12, wireType 0 =*/
            96).int32(message.playerBlue);
            writer.uint32(
            /* id 13, wireType 0 =*/
            104).int32(message.targetBlue);
            return writer;
          };
          /**
           * Encodes the specified ChallengeResult message, length delimited. Does not implicitly {@link gameproto.ChallengeResult.verify|verify} messages.
           * @function encodeDelimited
           * @memberof gameproto.ChallengeResult
           * @static
           * @param {gameproto.IChallengeResult} message ChallengeResult message or plain object to encode
           * @param {$protobuf.Writer} [writer] Writer to encode to
           * @returns {$protobuf.Writer} Writer
           */


          ChallengeResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
          };
          /**
           * Decodes a ChallengeResult message from the specified reader or buffer.
           * @function decode
           * @memberof gameproto.ChallengeResult
           * @static
           * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
           * @param {number} [length] Message length if known beforehand
           * @returns {gameproto.ChallengeResult} ChallengeResult
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */


          ChallengeResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.gameproto.ChallengeResult();

            while (reader.pos < end) {
              var tag = reader.uint32();

              switch (tag >>> 3) {
                case 1:
                  message.isWin = reader.int32();
                  break;

                case 2:
                  if (!(message.fightResult && message.fightResult.length)) message.fightResult = [];
                  message.fightResult.push($root.gameproto.FightResult.decode(reader, reader.uint32()));
                  break;

                case 3:
                  if (!(message.skillId && message.skillId.length)) message.skillId = [];

                  if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;

                    while (reader.pos < end2) message.skillId.push(reader.int32());
                  } else message.skillId.push(reader.int32());

                  break;

                case 4:
                  message.playerLife = reader.int32();
                  break;

                case 5:
                  message.targetLife = reader.int32();
                  break;

                case 6:
                  message.customsPass = reader.int32();
                  break;

                case 7:
                  message.target = $root.gameproto.Player.decode(reader, reader.uint32());
                  break;

                case 8:
                  message.winnerName = reader.string();
                  break;

                case 9:
                  message.resurgenceCount = reader.int32();
                  break;

                case 10:
                  message.flushCount = reader.int32();
                  break;

                case 11:
                  message.nowCustomsPass = reader.int32();
                  break;

                case 12:
                  message.playerBlue = reader.int32();
                  break;

                case 13:
                  message.targetBlue = reader.int32();
                  break;

                default:
                  reader.skipType(tag & 7);
                  break;
              }
            }

            if (!message.hasOwnProperty("isWin")) throw $util.ProtocolError("missing required 'isWin'", {
              instance: message
            });
            if (!message.hasOwnProperty("playerLife")) throw $util.ProtocolError("missing required 'playerLife'", {
              instance: message
            });
            if (!message.hasOwnProperty("targetLife")) throw $util.ProtocolError("missing required 'targetLife'", {
              instance: message
            });
            if (!message.hasOwnProperty("customsPass")) throw $util.ProtocolError("missing required 'customsPass'", {
              instance: message
            });
            if (!message.hasOwnProperty("target")) throw $util.ProtocolError("missing required 'target'", {
              instance: message
            });
            if (!message.hasOwnProperty("winnerName")) throw $util.ProtocolError("missing required 'winnerName'", {
              instance: message
            });
            if (!message.hasOwnProperty("flushCount")) throw $util.ProtocolError("missing required 'flushCount'", {
              instance: message
            });
            if (!message.hasOwnProperty("nowCustomsPass")) throw $util.ProtocolError("missing required 'nowCustomsPass'", {
              instance: message
            });
            if (!message.hasOwnProperty("playerBlue")) throw $util.ProtocolError("missing required 'playerBlue'", {
              instance: message
            });
            if (!message.hasOwnProperty("targetBlue")) throw $util.ProtocolError("missing required 'targetBlue'", {
              instance: message
            });
            return message;
          };
          /**
           * Decodes a ChallengeResult message from the specified reader or buffer, length delimited.
           * @function decodeDelimited
           * @memberof gameproto.ChallengeResult
           * @static
           * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
           * @returns {gameproto.ChallengeResult} ChallengeResult
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */


          ChallengeResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader)) reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
          };
          /**
           * Verifies a ChallengeResult message.
           * @function verify
           * @memberof gameproto.ChallengeResult
           * @static
           * @param {Object.<string,*>} message Plain object to verify
           * @returns {string|null} `null` if valid, otherwise the reason why it is not
           */


          ChallengeResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null) return "object expected";
            if (!$util.isInteger(message.isWin)) return "isWin: integer expected";

            if (message.fightResult != null && message.hasOwnProperty("fightResult")) {
              if (!Array.isArray(message.fightResult)) return "fightResult: array expected";

              for (var i = 0; i < message.fightResult.length; ++i) {
                var error = $root.gameproto.FightResult.verify(message.fightResult[i]);
                if (error) return "fightResult." + error;
              }
            }

            if (message.skillId != null && message.hasOwnProperty("skillId")) {
              if (!Array.isArray(message.skillId)) return "skillId: array expected";

              for (var i = 0; i < message.skillId.length; ++i) if (!$util.isInteger(message.skillId[i])) return "skillId: integer[] expected";
            }

            if (!$util.isInteger(message.playerLife)) return "playerLife: integer expected";
            if (!$util.isInteger(message.targetLife)) return "targetLife: integer expected";
            if (!$util.isInteger(message.customsPass)) return "customsPass: integer expected";
            {
              var error = $root.gameproto.Player.verify(message.target);
              if (error) return "target." + error;
            }
            if (!$util.isString(message.winnerName)) return "winnerName: string expected";
            if (message.resurgenceCount != null && message.hasOwnProperty("resurgenceCount")) if (!$util.isInteger(message.resurgenceCount)) return "resurgenceCount: integer expected";
            if (!$util.isInteger(message.flushCount)) return "flushCount: integer expected";
            if (!$util.isInteger(message.nowCustomsPass)) return "nowCustomsPass: integer expected";
            if (!$util.isInteger(message.playerBlue)) return "playerBlue: integer expected";
            if (!$util.isInteger(message.targetBlue)) return "targetBlue: integer expected";
            return null;
          };
          /**
           * Creates a ChallengeResult message from a plain object. Also converts values to their respective internal types.
           * @function fromObject
           * @memberof gameproto.ChallengeResult
           * @static
           * @param {Object.<string,*>} object Plain object
           * @returns {gameproto.ChallengeResult} ChallengeResult
           */


          ChallengeResult.fromObject = function fromObject(object) {
            if (object instanceof $root.gameproto.ChallengeResult) return object;
            var message = new $root.gameproto.ChallengeResult();
            if (object.isWin != null) message.isWin = object.isWin | 0;

            if (object.fightResult) {
              if (!Array.isArray(object.fightResult)) throw TypeError(".gameproto.ChallengeResult.fightResult: array expected");
              message.fightResult = [];

              for (var i = 0; i < object.fightResult.length; ++i) {
                if (typeof object.fightResult[i] !== "object") throw TypeError(".gameproto.ChallengeResult.fightResult: object expected");
                message.fightResult[i] = $root.gameproto.FightResult.fromObject(object.fightResult[i]);
              }
            }

            if (object.skillId) {
              if (!Array.isArray(object.skillId)) throw TypeError(".gameproto.ChallengeResult.skillId: array expected");
              message.skillId = [];

              for (var i = 0; i < object.skillId.length; ++i) message.skillId[i] = object.skillId[i] | 0;
            }

            if (object.playerLife != null) message.playerLife = object.playerLife | 0;
            if (object.targetLife != null) message.targetLife = object.targetLife | 0;
            if (object.customsPass != null) message.customsPass = object.customsPass | 0;

            if (object.target != null) {
              if (typeof object.target !== "object") throw TypeError(".gameproto.ChallengeResult.target: object expected");
              message.target = $root.gameproto.Player.fromObject(object.target);
            }

            if (object.winnerName != null) message.winnerName = String(object.winnerName);
            if (object.resurgenceCount != null) message.resurgenceCount = object.resurgenceCount | 0;
            if (object.flushCount != null) message.flushCount = object.flushCount | 0;
            if (object.nowCustomsPass != null) message.nowCustomsPass = object.nowCustomsPass | 0;
            if (object.playerBlue != null) message.playerBlue = object.playerBlue | 0;
            if (object.targetBlue != null) message.targetBlue = object.targetBlue | 0;
            return message;
          };
          /**
           * Creates a plain object from a ChallengeResult message. Also converts values to other types if specified.
           * @function toObject
           * @memberof gameproto.ChallengeResult
           * @static
           * @param {gameproto.ChallengeResult} message ChallengeResult
           * @param {$protobuf.IConversionOptions} [options] Conversion options
           * @returns {Object.<string,*>} Plain object
           */


          ChallengeResult.toObject = function toObject(message, options) {
            if (!options) options = {};
            var object = {};

            if (options.arrays || options.defaults) {
              object.fightResult = [];
              object.skillId = [];
            }

            if (options.defaults) {
              object.isWin = 0;
              object.playerLife = 0;
              object.targetLife = 0;
              object.customsPass = 0;
              object.target = null;
              object.winnerName = "";
              object.resurgenceCount = 0;
              object.flushCount = 0;
              object.nowCustomsPass = 0;
              object.playerBlue = 0;
              object.targetBlue = 0;
            }

            if (message.isWin != null && message.hasOwnProperty("isWin")) object.isWin = message.isWin;

            if (message.fightResult && message.fightResult.length) {
              object.fightResult = [];

              for (var j = 0; j < message.fightResult.length; ++j) object.fightResult[j] = $root.gameproto.FightResult.toObject(message.fightResult[j], options);
            }

            if (message.skillId && message.skillId.length) {
              object.skillId = [];

              for (var j = 0; j < message.skillId.length; ++j) object.skillId[j] = message.skillId[j];
            }

            if (message.playerLife != null && message.hasOwnProperty("playerLife")) object.playerLife = message.playerLife;
            if (message.targetLife != null && message.hasOwnProperty("targetLife")) object.targetLife = message.targetLife;
            if (message.customsPass != null && message.hasOwnProperty("customsPass")) object.customsPass = message.customsPass;
            if (message.target != null && message.hasOwnProperty("target")) object.target = $root.gameproto.Player.toObject(message.target, options);
            if (message.winnerName != null && message.hasOwnProperty("winnerName")) object.winnerName = message.winnerName;
            if (message.resurgenceCount != null && message.hasOwnProperty("resurgenceCount")) object.resurgenceCount = message.resurgenceCount;
            if (message.flushCount != null && message.hasOwnProperty("flushCount")) object.flushCount = message.flushCount;
            if (message.nowCustomsPass != null && message.hasOwnProperty("nowCustomsPass")) object.nowCustomsPass = message.nowCustomsPass;
            if (message.playerBlue != null && message.hasOwnProperty("playerBlue")) object.playerBlue = message.playerBlue;
            if (message.targetBlue != null && message.hasOwnProperty("targetBlue")) object.targetBlue = message.targetBlue;
            return object;
          };
          /**
           * Converts this ChallengeResult to JSON.
           * @function toJSON
           * @memberof gameproto.ChallengeResult
           * @instance
           * @returns {Object.<string,*>} JSON object
           */


          ChallengeResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
          };

          return ChallengeResult;
        }();

        gameproto.FightResult = function () {
          /**
           * Properties of a FightResult.
           * @memberof gameproto
           * @interface IFightResult
           * @property {number} sequence FightResult sequence
           * @property {Array.<gameproto.IFightCourse>|null} [course] FightResult course
           * @property {number|null} [playerLife] FightResult playerLife
           * @property {number|null} [targetLife] FightResult targetLife
           * @property {number|null} [playerBlue] FightResult playerBlue
           * @property {number|null} [targetBlue] FightResult targetBlue
           * @property {number|null} [playerActive] FightResult playerActive
           * @property {number|null} [targetActive] FightResult targetActive
           */

          /**
           * Constructs a new FightResult.
           * @memberof gameproto
           * @classdesc Represents a FightResult.
           * @implements IFightResult
           * @constructor
           * @param {gameproto.IFightResult=} [properties] Properties to set
           */
          function FightResult(properties) {
            this.course = [];
            if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
          }
          /**
           * FightResult sequence.
           * @member {number} sequence
           * @memberof gameproto.FightResult
           * @instance
           */


          FightResult.prototype.sequence = 0;
          /**
           * FightResult course.
           * @member {Array.<gameproto.IFightCourse>} course
           * @memberof gameproto.FightResult
           * @instance
           */

          FightResult.prototype.course = $util.emptyArray;
          /**
           * FightResult playerLife.
           * @member {number} playerLife
           * @memberof gameproto.FightResult
           * @instance
           */

          FightResult.prototype.playerLife = 0;
          /**
           * FightResult targetLife.
           * @member {number} targetLife
           * @memberof gameproto.FightResult
           * @instance
           */

          FightResult.prototype.targetLife = 0;
          /**
           * FightResult playerBlue.
           * @member {number} playerBlue
           * @memberof gameproto.FightResult
           * @instance
           */

          FightResult.prototype.playerBlue = 0;
          /**
           * FightResult targetBlue.
           * @member {number} targetBlue
           * @memberof gameproto.FightResult
           * @instance
           */

          FightResult.prototype.targetBlue = 0;
          /**
           * FightResult playerActive.
           * @member {number} playerActive
           * @memberof gameproto.FightResult
           * @instance
           */

          FightResult.prototype.playerActive = 0;
          /**
           * FightResult targetActive.
           * @member {number} targetActive
           * @memberof gameproto.FightResult
           * @instance
           */

          FightResult.prototype.targetActive = 0;
          /**
           * Creates a new FightResult instance using the specified properties.
           * @function create
           * @memberof gameproto.FightResult
           * @static
           * @param {gameproto.IFightResult=} [properties] Properties to set
           * @returns {gameproto.FightResult} FightResult instance
           */

          FightResult.create = function create(properties) {
            return new FightResult(properties);
          };
          /**
           * Encodes the specified FightResult message. Does not implicitly {@link gameproto.FightResult.verify|verify} messages.
           * @function encode
           * @memberof gameproto.FightResult
           * @static
           * @param {gameproto.IFightResult} message FightResult message or plain object to encode
           * @param {$protobuf.Writer} [writer] Writer to encode to
           * @returns {$protobuf.Writer} Writer
           */


          FightResult.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            writer.uint32(
            /* id 1, wireType 0 =*/
            8).int32(message.sequence);
            if (message.course != null && message.course.length) for (var i = 0; i < message.course.length; ++i) $root.gameproto.FightCourse.encode(message.course[i], writer.uint32(
            /* id 2, wireType 2 =*/
            18).fork()).ldelim();
            if (message.playerLife != null && message.hasOwnProperty("playerLife")) writer.uint32(
            /* id 3, wireType 0 =*/
            24).int32(message.playerLife);
            if (message.targetLife != null && message.hasOwnProperty("targetLife")) writer.uint32(
            /* id 4, wireType 0 =*/
            32).int32(message.targetLife);
            if (message.playerBlue != null && message.hasOwnProperty("playerBlue")) writer.uint32(
            /* id 5, wireType 0 =*/
            40).int32(message.playerBlue);
            if (message.targetBlue != null && message.hasOwnProperty("targetBlue")) writer.uint32(
            /* id 6, wireType 0 =*/
            48).int32(message.targetBlue);
            if (message.playerActive != null && message.hasOwnProperty("playerActive")) writer.uint32(
            /* id 7, wireType 0 =*/
            56).int32(message.playerActive);
            if (message.targetActive != null && message.hasOwnProperty("targetActive")) writer.uint32(
            /* id 8, wireType 0 =*/
            64).int32(message.targetActive);
            return writer;
          };
          /**
           * Encodes the specified FightResult message, length delimited. Does not implicitly {@link gameproto.FightResult.verify|verify} messages.
           * @function encodeDelimited
           * @memberof gameproto.FightResult
           * @static
           * @param {gameproto.IFightResult} message FightResult message or plain object to encode
           * @param {$protobuf.Writer} [writer] Writer to encode to
           * @returns {$protobuf.Writer} Writer
           */


          FightResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
          };
          /**
           * Decodes a FightResult message from the specified reader or buffer.
           * @function decode
           * @memberof gameproto.FightResult
           * @static
           * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
           * @param {number} [length] Message length if known beforehand
           * @returns {gameproto.FightResult} FightResult
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */


          FightResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.gameproto.FightResult();

            while (reader.pos < end) {
              var tag = reader.uint32();

              switch (tag >>> 3) {
                case 1:
                  message.sequence = reader.int32();
                  break;

                case 2:
                  if (!(message.course && message.course.length)) message.course = [];
                  message.course.push($root.gameproto.FightCourse.decode(reader, reader.uint32()));
                  break;

                case 3:
                  message.playerLife = reader.int32();
                  break;

                case 4:
                  message.targetLife = reader.int32();
                  break;

                case 5:
                  message.playerBlue = reader.int32();
                  break;

                case 6:
                  message.targetBlue = reader.int32();
                  break;

                case 7:
                  message.playerActive = reader.int32();
                  break;

                case 8:
                  message.targetActive = reader.int32();
                  break;

                default:
                  reader.skipType(tag & 7);
                  break;
              }
            }

            if (!message.hasOwnProperty("sequence")) throw $util.ProtocolError("missing required 'sequence'", {
              instance: message
            });
            return message;
          };
          /**
           * Decodes a FightResult message from the specified reader or buffer, length delimited.
           * @function decodeDelimited
           * @memberof gameproto.FightResult
           * @static
           * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
           * @returns {gameproto.FightResult} FightResult
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */


          FightResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader)) reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
          };
          /**
           * Verifies a FightResult message.
           * @function verify
           * @memberof gameproto.FightResult
           * @static
           * @param {Object.<string,*>} message Plain object to verify
           * @returns {string|null} `null` if valid, otherwise the reason why it is not
           */


          FightResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null) return "object expected";
            if (!$util.isInteger(message.sequence)) return "sequence: integer expected";

            if (message.course != null && message.hasOwnProperty("course")) {
              if (!Array.isArray(message.course)) return "course: array expected";

              for (var i = 0; i < message.course.length; ++i) {
                var error = $root.gameproto.FightCourse.verify(message.course[i]);
                if (error) return "course." + error;
              }
            }

            if (message.playerLife != null && message.hasOwnProperty("playerLife")) if (!$util.isInteger(message.playerLife)) return "playerLife: integer expected";
            if (message.targetLife != null && message.hasOwnProperty("targetLife")) if (!$util.isInteger(message.targetLife)) return "targetLife: integer expected";
            if (message.playerBlue != null && message.hasOwnProperty("playerBlue")) if (!$util.isInteger(message.playerBlue)) return "playerBlue: integer expected";
            if (message.targetBlue != null && message.hasOwnProperty("targetBlue")) if (!$util.isInteger(message.targetBlue)) return "targetBlue: integer expected";
            if (message.playerActive != null && message.hasOwnProperty("playerActive")) if (!$util.isInteger(message.playerActive)) return "playerActive: integer expected";
            if (message.targetActive != null && message.hasOwnProperty("targetActive")) if (!$util.isInteger(message.targetActive)) return "targetActive: integer expected";
            return null;
          };
          /**
           * Creates a FightResult message from a plain object. Also converts values to their respective internal types.
           * @function fromObject
           * @memberof gameproto.FightResult
           * @static
           * @param {Object.<string,*>} object Plain object
           * @returns {gameproto.FightResult} FightResult
           */


          FightResult.fromObject = function fromObject(object) {
            if (object instanceof $root.gameproto.FightResult) return object;
            var message = new $root.gameproto.FightResult();
            if (object.sequence != null) message.sequence = object.sequence | 0;

            if (object.course) {
              if (!Array.isArray(object.course)) throw TypeError(".gameproto.FightResult.course: array expected");
              message.course = [];

              for (var i = 0; i < object.course.length; ++i) {
                if (typeof object.course[i] !== "object") throw TypeError(".gameproto.FightResult.course: object expected");
                message.course[i] = $root.gameproto.FightCourse.fromObject(object.course[i]);
              }
            }

            if (object.playerLife != null) message.playerLife = object.playerLife | 0;
            if (object.targetLife != null) message.targetLife = object.targetLife | 0;
            if (object.playerBlue != null) message.playerBlue = object.playerBlue | 0;
            if (object.targetBlue != null) message.targetBlue = object.targetBlue | 0;
            if (object.playerActive != null) message.playerActive = object.playerActive | 0;
            if (object.targetActive != null) message.targetActive = object.targetActive | 0;
            return message;
          };
          /**
           * Creates a plain object from a FightResult message. Also converts values to other types if specified.
           * @function toObject
           * @memberof gameproto.FightResult
           * @static
           * @param {gameproto.FightResult} message FightResult
           * @param {$protobuf.IConversionOptions} [options] Conversion options
           * @returns {Object.<string,*>} Plain object
           */


          FightResult.toObject = function toObject(message, options) {
            if (!options) options = {};
            var object = {};
            if (options.arrays || options.defaults) object.course = [];

            if (options.defaults) {
              object.sequence = 0;
              object.playerLife = 0;
              object.targetLife = 0;
              object.playerBlue = 0;
              object.targetBlue = 0;
              object.playerActive = 0;
              object.targetActive = 0;
            }

            if (message.sequence != null && message.hasOwnProperty("sequence")) object.sequence = message.sequence;

            if (message.course && message.course.length) {
              object.course = [];

              for (var j = 0; j < message.course.length; ++j) object.course[j] = $root.gameproto.FightCourse.toObject(message.course[j], options);
            }

            if (message.playerLife != null && message.hasOwnProperty("playerLife")) object.playerLife = message.playerLife;
            if (message.targetLife != null && message.hasOwnProperty("targetLife")) object.targetLife = message.targetLife;
            if (message.playerBlue != null && message.hasOwnProperty("playerBlue")) object.playerBlue = message.playerBlue;
            if (message.targetBlue != null && message.hasOwnProperty("targetBlue")) object.targetBlue = message.targetBlue;
            if (message.playerActive != null && message.hasOwnProperty("playerActive")) object.playerActive = message.playerActive;
            if (message.targetActive != null && message.hasOwnProperty("targetActive")) object.targetActive = message.targetActive;
            return object;
          };
          /**
           * Converts this FightResult to JSON.
           * @function toJSON
           * @memberof gameproto.FightResult
           * @instance
           * @returns {Object.<string,*>} JSON object
           */


          FightResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
          };

          return FightResult;
        }();

        gameproto.Buff = function () {
          /**
           * Properties of a Buff.
           * @memberof gameproto
           * @interface IBuff
           * @property {number} skillId Buff skillId
           * @property {number} continueTime Buff continueTime
           */

          /**
           * Constructs a new Buff.
           * @memberof gameproto
           * @classdesc Represents a Buff.
           * @implements IBuff
           * @constructor
           * @param {gameproto.IBuff=} [properties] Properties to set
           */
          function Buff(properties) {
            if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
          }
          /**
           * Buff skillId.
           * @member {number} skillId
           * @memberof gameproto.Buff
           * @instance
           */


          Buff.prototype.skillId = 0;
          /**
           * Buff continueTime.
           * @member {number} continueTime
           * @memberof gameproto.Buff
           * @instance
           */

          Buff.prototype.continueTime = 0;
          /**
           * Creates a new Buff instance using the specified properties.
           * @function create
           * @memberof gameproto.Buff
           * @static
           * @param {gameproto.IBuff=} [properties] Properties to set
           * @returns {gameproto.Buff} Buff instance
           */

          Buff.create = function create(properties) {
            return new Buff(properties);
          };
          /**
           * Encodes the specified Buff message. Does not implicitly {@link gameproto.Buff.verify|verify} messages.
           * @function encode
           * @memberof gameproto.Buff
           * @static
           * @param {gameproto.IBuff} message Buff message or plain object to encode
           * @param {$protobuf.Writer} [writer] Writer to encode to
           * @returns {$protobuf.Writer} Writer
           */


          Buff.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            writer.uint32(
            /* id 1, wireType 0 =*/
            8).int32(message.skillId);
            writer.uint32(
            /* id 2, wireType 0 =*/
            16).int32(message.continueTime);
            return writer;
          };
          /**
           * Encodes the specified Buff message, length delimited. Does not implicitly {@link gameproto.Buff.verify|verify} messages.
           * @function encodeDelimited
           * @memberof gameproto.Buff
           * @static
           * @param {gameproto.IBuff} message Buff message or plain object to encode
           * @param {$protobuf.Writer} [writer] Writer to encode to
           * @returns {$protobuf.Writer} Writer
           */


          Buff.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
          };
          /**
           * Decodes a Buff message from the specified reader or buffer.
           * @function decode
           * @memberof gameproto.Buff
           * @static
           * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
           * @param {number} [length] Message length if known beforehand
           * @returns {gameproto.Buff} Buff
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */


          Buff.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.gameproto.Buff();

            while (reader.pos < end) {
              var tag = reader.uint32();

              switch (tag >>> 3) {
                case 1:
                  message.skillId = reader.int32();
                  break;

                case 2:
                  message.continueTime = reader.int32();
                  break;

                default:
                  reader.skipType(tag & 7);
                  break;
              }
            }

            if (!message.hasOwnProperty("skillId")) throw $util.ProtocolError("missing required 'skillId'", {
              instance: message
            });
            if (!message.hasOwnProperty("continueTime")) throw $util.ProtocolError("missing required 'continueTime'", {
              instance: message
            });
            return message;
          };
          /**
           * Decodes a Buff message from the specified reader or buffer, length delimited.
           * @function decodeDelimited
           * @memberof gameproto.Buff
           * @static
           * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
           * @returns {gameproto.Buff} Buff
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */


          Buff.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader)) reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
          };
          /**
           * Verifies a Buff message.
           * @function verify
           * @memberof gameproto.Buff
           * @static
           * @param {Object.<string,*>} message Plain object to verify
           * @returns {string|null} `null` if valid, otherwise the reason why it is not
           */


          Buff.verify = function verify(message) {
            if (typeof message !== "object" || message === null) return "object expected";
            if (!$util.isInteger(message.skillId)) return "skillId: integer expected";
            if (!$util.isInteger(message.continueTime)) return "continueTime: integer expected";
            return null;
          };
          /**
           * Creates a Buff message from a plain object. Also converts values to their respective internal types.
           * @function fromObject
           * @memberof gameproto.Buff
           * @static
           * @param {Object.<string,*>} object Plain object
           * @returns {gameproto.Buff} Buff
           */


          Buff.fromObject = function fromObject(object) {
            if (object instanceof $root.gameproto.Buff) return object;
            var message = new $root.gameproto.Buff();
            if (object.skillId != null) message.skillId = object.skillId | 0;
            if (object.continueTime != null) message.continueTime = object.continueTime | 0;
            return message;
          };
          /**
           * Creates a plain object from a Buff message. Also converts values to other types if specified.
           * @function toObject
           * @memberof gameproto.Buff
           * @static
           * @param {gameproto.Buff} message Buff
           * @param {$protobuf.IConversionOptions} [options] Conversion options
           * @returns {Object.<string,*>} Plain object
           */


          Buff.toObject = function toObject(message, options) {
            if (!options) options = {};
            var object = {};

            if (options.defaults) {
              object.skillId = 0;
              object.continueTime = 0;
            }

            if (message.skillId != null && message.hasOwnProperty("skillId")) object.skillId = message.skillId;
            if (message.continueTime != null && message.hasOwnProperty("continueTime")) object.continueTime = message.continueTime;
            return object;
          };
          /**
           * Converts this Buff to JSON.
           * @function toJSON
           * @memberof gameproto.Buff
           * @instance
           * @returns {Object.<string,*>} JSON object
           */


          Buff.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
          };

          return Buff;
        }();

        gameproto.FightCourse = function () {
          /**
           * Properties of a FightCourse.
           * @memberof gameproto
           * @interface IFightCourse
           * @property {number} attrWay FightCourse attrWay
           * @property {number|null} [life] FightCourse life
           * @property {number} who FightCourse who
           * @property {number} playerLife FightCourse playerLife
           * @property {number} targetLife FightCourse targetLife
           * @property {number} isDodge FightCourse isDodge
           * @property {number|null} [counterLife] FightCourse counterLife
           * @property {number|null} [attrReply] FightCourse attrReply
           * @property {number|null} [byAttrReply] FightCourse byAttrReply
           * @property {number|null} [crit] FightCourse crit
           * @property {number} active FightCourse active
           * @property {number|null} [playerLifeReply] FightCourse playerLifeReply
           * @property {number|null} [targetLifeReply] FightCourse targetLifeReply
           * @property {number|null} [playerBlueReply] FightCourse playerBlueReply
           * @property {number|null} [targetBlueReply] FightCourse targetBlueReply
           * @property {number} consumerType FightCourse consumerType
           * @property {number} consumerParam FightCourse consumerParam
           */

          /**
           * Constructs a new FightCourse.
           * @memberof gameproto
           * @classdesc Represents a FightCourse.
           * @implements IFightCourse
           * @constructor
           * @param {gameproto.IFightCourse=} [properties] Properties to set
           */
          function FightCourse(properties) {
            if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
          }
          /**
           * FightCourse attrWay.
           * @member {number} attrWay
           * @memberof gameproto.FightCourse
           * @instance
           */


          FightCourse.prototype.attrWay = 0;
          /**
           * FightCourse life.
           * @member {number} life
           * @memberof gameproto.FightCourse
           * @instance
           */

          FightCourse.prototype.life = 0;
          /**
           * FightCourse who.
           * @member {number} who
           * @memberof gameproto.FightCourse
           * @instance
           */

          FightCourse.prototype.who = 0;
          /**
           * FightCourse playerLife.
           * @member {number} playerLife
           * @memberof gameproto.FightCourse
           * @instance
           */

          FightCourse.prototype.playerLife = 0;
          /**
           * FightCourse targetLife.
           * @member {number} targetLife
           * @memberof gameproto.FightCourse
           * @instance
           */

          FightCourse.prototype.targetLife = 0;
          /**
           * FightCourse isDodge.
           * @member {number} isDodge
           * @memberof gameproto.FightCourse
           * @instance
           */

          FightCourse.prototype.isDodge = 0;
          /**
           * FightCourse counterLife.
           * @member {number} counterLife
           * @memberof gameproto.FightCourse
           * @instance
           */

          FightCourse.prototype.counterLife = 0;
          /**
           * FightCourse attrReply.
           * @member {number} attrReply
           * @memberof gameproto.FightCourse
           * @instance
           */

          FightCourse.prototype.attrReply = 0;
          /**
           * FightCourse byAttrReply.
           * @member {number} byAttrReply
           * @memberof gameproto.FightCourse
           * @instance
           */

          FightCourse.prototype.byAttrReply = 0;
          /**
           * FightCourse crit.
           * @member {number} crit
           * @memberof gameproto.FightCourse
           * @instance
           */

          FightCourse.prototype.crit = 0;
          /**
           * FightCourse active.
           * @member {number} active
           * @memberof gameproto.FightCourse
           * @instance
           */

          FightCourse.prototype.active = 0;
          /**
           * FightCourse playerLifeReply.
           * @member {number} playerLifeReply
           * @memberof gameproto.FightCourse
           * @instance
           */

          FightCourse.prototype.playerLifeReply = 0;
          /**
           * FightCourse targetLifeReply.
           * @member {number} targetLifeReply
           * @memberof gameproto.FightCourse
           * @instance
           */

          FightCourse.prototype.targetLifeReply = 0;
          /**
           * FightCourse playerBlueReply.
           * @member {number} playerBlueReply
           * @memberof gameproto.FightCourse
           * @instance
           */

          FightCourse.prototype.playerBlueReply = 0;
          /**
           * FightCourse targetBlueReply.
           * @member {number} targetBlueReply
           * @memberof gameproto.FightCourse
           * @instance
           */

          FightCourse.prototype.targetBlueReply = 0;
          /**
           * FightCourse consumerType.
           * @member {number} consumerType
           * @memberof gameproto.FightCourse
           * @instance
           */

          FightCourse.prototype.consumerType = 0;
          /**
           * FightCourse consumerParam.
           * @member {number} consumerParam
           * @memberof gameproto.FightCourse
           * @instance
           */

          FightCourse.prototype.consumerParam = 0;
          /**
           * Creates a new FightCourse instance using the specified properties.
           * @function create
           * @memberof gameproto.FightCourse
           * @static
           * @param {gameproto.IFightCourse=} [properties] Properties to set
           * @returns {gameproto.FightCourse} FightCourse instance
           */

          FightCourse.create = function create(properties) {
            return new FightCourse(properties);
          };
          /**
           * Encodes the specified FightCourse message. Does not implicitly {@link gameproto.FightCourse.verify|verify} messages.
           * @function encode
           * @memberof gameproto.FightCourse
           * @static
           * @param {gameproto.IFightCourse} message FightCourse message or plain object to encode
           * @param {$protobuf.Writer} [writer] Writer to encode to
           * @returns {$protobuf.Writer} Writer
           */


          FightCourse.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            writer.uint32(
            /* id 1, wireType 0 =*/
            8).int32(message.attrWay);
            if (message.life != null && message.hasOwnProperty("life")) writer.uint32(
            /* id 2, wireType 0 =*/
            16).int32(message.life);
            writer.uint32(
            /* id 3, wireType 0 =*/
            24).int32(message.who);
            writer.uint32(
            /* id 4, wireType 0 =*/
            32).int32(message.playerLife);
            writer.uint32(
            /* id 5, wireType 0 =*/
            40).int32(message.targetLife);
            writer.uint32(
            /* id 6, wireType 0 =*/
            48).int32(message.isDodge);
            if (message.counterLife != null && message.hasOwnProperty("counterLife")) writer.uint32(
            /* id 7, wireType 0 =*/
            56).int32(message.counterLife);
            if (message.attrReply != null && message.hasOwnProperty("attrReply")) writer.uint32(
            /* id 8, wireType 0 =*/
            64).int32(message.attrReply);
            if (message.byAttrReply != null && message.hasOwnProperty("byAttrReply")) writer.uint32(
            /* id 9, wireType 0 =*/
            72).int32(message.byAttrReply);
            if (message.crit != null && message.hasOwnProperty("crit")) writer.uint32(
            /* id 10, wireType 0 =*/
            80).int32(message.crit);
            writer.uint32(
            /* id 11, wireType 0 =*/
            88).int32(message.active);
            if (message.playerLifeReply != null && message.hasOwnProperty("playerLifeReply")) writer.uint32(
            /* id 12, wireType 0 =*/
            96).int32(message.playerLifeReply);
            if (message.targetLifeReply != null && message.hasOwnProperty("targetLifeReply")) writer.uint32(
            /* id 13, wireType 0 =*/
            104).int32(message.targetLifeReply);
            if (message.playerBlueReply != null && message.hasOwnProperty("playerBlueReply")) writer.uint32(
            /* id 14, wireType 0 =*/
            112).int32(message.playerBlueReply);
            if (message.targetBlueReply != null && message.hasOwnProperty("targetBlueReply")) writer.uint32(
            /* id 15, wireType 0 =*/
            120).int32(message.targetBlueReply);
            writer.uint32(
            /* id 16, wireType 0 =*/
            128).int32(message.consumerType);
            writer.uint32(
            /* id 17, wireType 0 =*/
            136).int32(message.consumerParam);
            return writer;
          };
          /**
           * Encodes the specified FightCourse message, length delimited. Does not implicitly {@link gameproto.FightCourse.verify|verify} messages.
           * @function encodeDelimited
           * @memberof gameproto.FightCourse
           * @static
           * @param {gameproto.IFightCourse} message FightCourse message or plain object to encode
           * @param {$protobuf.Writer} [writer] Writer to encode to
           * @returns {$protobuf.Writer} Writer
           */


          FightCourse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
          };
          /**
           * Decodes a FightCourse message from the specified reader or buffer.
           * @function decode
           * @memberof gameproto.FightCourse
           * @static
           * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
           * @param {number} [length] Message length if known beforehand
           * @returns {gameproto.FightCourse} FightCourse
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */


          FightCourse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.gameproto.FightCourse();

            while (reader.pos < end) {
              var tag = reader.uint32();

              switch (tag >>> 3) {
                case 1:
                  message.attrWay = reader.int32();
                  break;

                case 2:
                  message.life = reader.int32();
                  break;

                case 3:
                  message.who = reader.int32();
                  break;

                case 4:
                  message.playerLife = reader.int32();
                  break;

                case 5:
                  message.targetLife = reader.int32();
                  break;

                case 6:
                  message.isDodge = reader.int32();
                  break;

                case 7:
                  message.counterLife = reader.int32();
                  break;

                case 8:
                  message.attrReply = reader.int32();
                  break;

                case 9:
                  message.byAttrReply = reader.int32();
                  break;

                case 10:
                  message.crit = reader.int32();
                  break;

                case 11:
                  message.active = reader.int32();
                  break;

                case 12:
                  message.playerLifeReply = reader.int32();
                  break;

                case 13:
                  message.targetLifeReply = reader.int32();
                  break;

                case 14:
                  message.playerBlueReply = reader.int32();
                  break;

                case 15:
                  message.targetBlueReply = reader.int32();
                  break;

                case 16:
                  message.consumerType = reader.int32();
                  break;

                case 17:
                  message.consumerParam = reader.int32();
                  break;

                default:
                  reader.skipType(tag & 7);
                  break;
              }
            }

            if (!message.hasOwnProperty("attrWay")) throw $util.ProtocolError("missing required 'attrWay'", {
              instance: message
            });
            if (!message.hasOwnProperty("who")) throw $util.ProtocolError("missing required 'who'", {
              instance: message
            });
            if (!message.hasOwnProperty("playerLife")) throw $util.ProtocolError("missing required 'playerLife'", {
              instance: message
            });
            if (!message.hasOwnProperty("targetLife")) throw $util.ProtocolError("missing required 'targetLife'", {
              instance: message
            });
            if (!message.hasOwnProperty("isDodge")) throw $util.ProtocolError("missing required 'isDodge'", {
              instance: message
            });
            if (!message.hasOwnProperty("active")) throw $util.ProtocolError("missing required 'active'", {
              instance: message
            });
            if (!message.hasOwnProperty("consumerType")) throw $util.ProtocolError("missing required 'consumerType'", {
              instance: message
            });
            if (!message.hasOwnProperty("consumerParam")) throw $util.ProtocolError("missing required 'consumerParam'", {
              instance: message
            });
            return message;
          };
          /**
           * Decodes a FightCourse message from the specified reader or buffer, length delimited.
           * @function decodeDelimited
           * @memberof gameproto.FightCourse
           * @static
           * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
           * @returns {gameproto.FightCourse} FightCourse
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */


          FightCourse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader)) reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
          };
          /**
           * Verifies a FightCourse message.
           * @function verify
           * @memberof gameproto.FightCourse
           * @static
           * @param {Object.<string,*>} message Plain object to verify
           * @returns {string|null} `null` if valid, otherwise the reason why it is not
           */


          FightCourse.verify = function verify(message) {
            if (typeof message !== "object" || message === null) return "object expected";
            if (!$util.isInteger(message.attrWay)) return "attrWay: integer expected";
            if (message.life != null && message.hasOwnProperty("life")) if (!$util.isInteger(message.life)) return "life: integer expected";
            if (!$util.isInteger(message.who)) return "who: integer expected";
            if (!$util.isInteger(message.playerLife)) return "playerLife: integer expected";
            if (!$util.isInteger(message.targetLife)) return "targetLife: integer expected";
            if (!$util.isInteger(message.isDodge)) return "isDodge: integer expected";
            if (message.counterLife != null && message.hasOwnProperty("counterLife")) if (!$util.isInteger(message.counterLife)) return "counterLife: integer expected";
            if (message.attrReply != null && message.hasOwnProperty("attrReply")) if (!$util.isInteger(message.attrReply)) return "attrReply: integer expected";
            if (message.byAttrReply != null && message.hasOwnProperty("byAttrReply")) if (!$util.isInteger(message.byAttrReply)) return "byAttrReply: integer expected";
            if (message.crit != null && message.hasOwnProperty("crit")) if (!$util.isInteger(message.crit)) return "crit: integer expected";
            if (!$util.isInteger(message.active)) return "active: integer expected";
            if (message.playerLifeReply != null && message.hasOwnProperty("playerLifeReply")) if (!$util.isInteger(message.playerLifeReply)) return "playerLifeReply: integer expected";
            if (message.targetLifeReply != null && message.hasOwnProperty("targetLifeReply")) if (!$util.isInteger(message.targetLifeReply)) return "targetLifeReply: integer expected";
            if (message.playerBlueReply != null && message.hasOwnProperty("playerBlueReply")) if (!$util.isInteger(message.playerBlueReply)) return "playerBlueReply: integer expected";
            if (message.targetBlueReply != null && message.hasOwnProperty("targetBlueReply")) if (!$util.isInteger(message.targetBlueReply)) return "targetBlueReply: integer expected";
            if (!$util.isInteger(message.consumerType)) return "consumerType: integer expected";
            if (!$util.isInteger(message.consumerParam)) return "consumerParam: integer expected";
            return null;
          };
          /**
           * Creates a FightCourse message from a plain object. Also converts values to their respective internal types.
           * @function fromObject
           * @memberof gameproto.FightCourse
           * @static
           * @param {Object.<string,*>} object Plain object
           * @returns {gameproto.FightCourse} FightCourse
           */


          FightCourse.fromObject = function fromObject(object) {
            if (object instanceof $root.gameproto.FightCourse) return object;
            var message = new $root.gameproto.FightCourse();
            if (object.attrWay != null) message.attrWay = object.attrWay | 0;
            if (object.life != null) message.life = object.life | 0;
            if (object.who != null) message.who = object.who | 0;
            if (object.playerLife != null) message.playerLife = object.playerLife | 0;
            if (object.targetLife != null) message.targetLife = object.targetLife | 0;
            if (object.isDodge != null) message.isDodge = object.isDodge | 0;
            if (object.counterLife != null) message.counterLife = object.counterLife | 0;
            if (object.attrReply != null) message.attrReply = object.attrReply | 0;
            if (object.byAttrReply != null) message.byAttrReply = object.byAttrReply | 0;
            if (object.crit != null) message.crit = object.crit | 0;
            if (object.active != null) message.active = object.active | 0;
            if (object.playerLifeReply != null) message.playerLifeReply = object.playerLifeReply | 0;
            if (object.targetLifeReply != null) message.targetLifeReply = object.targetLifeReply | 0;
            if (object.playerBlueReply != null) message.playerBlueReply = object.playerBlueReply | 0;
            if (object.targetBlueReply != null) message.targetBlueReply = object.targetBlueReply | 0;
            if (object.consumerType != null) message.consumerType = object.consumerType | 0;
            if (object.consumerParam != null) message.consumerParam = object.consumerParam | 0;
            return message;
          };
          /**
           * Creates a plain object from a FightCourse message. Also converts values to other types if specified.
           * @function toObject
           * @memberof gameproto.FightCourse
           * @static
           * @param {gameproto.FightCourse} message FightCourse
           * @param {$protobuf.IConversionOptions} [options] Conversion options
           * @returns {Object.<string,*>} Plain object
           */


          FightCourse.toObject = function toObject(message, options) {
            if (!options) options = {};
            var object = {};

            if (options.defaults) {
              object.attrWay = 0;
              object.life = 0;
              object.who = 0;
              object.playerLife = 0;
              object.targetLife = 0;
              object.isDodge = 0;
              object.counterLife = 0;
              object.attrReply = 0;
              object.byAttrReply = 0;
              object.crit = 0;
              object.active = 0;
              object.playerLifeReply = 0;
              object.targetLifeReply = 0;
              object.playerBlueReply = 0;
              object.targetBlueReply = 0;
              object.consumerType = 0;
              object.consumerParam = 0;
            }

            if (message.attrWay != null && message.hasOwnProperty("attrWay")) object.attrWay = message.attrWay;
            if (message.life != null && message.hasOwnProperty("life")) object.life = message.life;
            if (message.who != null && message.hasOwnProperty("who")) object.who = message.who;
            if (message.playerLife != null && message.hasOwnProperty("playerLife")) object.playerLife = message.playerLife;
            if (message.targetLife != null && message.hasOwnProperty("targetLife")) object.targetLife = message.targetLife;
            if (message.isDodge != null && message.hasOwnProperty("isDodge")) object.isDodge = message.isDodge;
            if (message.counterLife != null && message.hasOwnProperty("counterLife")) object.counterLife = message.counterLife;
            if (message.attrReply != null && message.hasOwnProperty("attrReply")) object.attrReply = message.attrReply;
            if (message.byAttrReply != null && message.hasOwnProperty("byAttrReply")) object.byAttrReply = message.byAttrReply;
            if (message.crit != null && message.hasOwnProperty("crit")) object.crit = message.crit;
            if (message.active != null && message.hasOwnProperty("active")) object.active = message.active;
            if (message.playerLifeReply != null && message.hasOwnProperty("playerLifeReply")) object.playerLifeReply = message.playerLifeReply;
            if (message.targetLifeReply != null && message.hasOwnProperty("targetLifeReply")) object.targetLifeReply = message.targetLifeReply;
            if (message.playerBlueReply != null && message.hasOwnProperty("playerBlueReply")) object.playerBlueReply = message.playerBlueReply;
            if (message.targetBlueReply != null && message.hasOwnProperty("targetBlueReply")) object.targetBlueReply = message.targetBlueReply;
            if (message.consumerType != null && message.hasOwnProperty("consumerType")) object.consumerType = message.consumerType;
            if (message.consumerParam != null && message.hasOwnProperty("consumerParam")) object.consumerParam = message.consumerParam;
            return object;
          };
          /**
           * Converts this FightCourse to JSON.
           * @function toJSON
           * @memberof gameproto.FightCourse
           * @instance
           * @returns {Object.<string,*>} JSON object
           */


          FightCourse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
          };

          return FightCourse;
        }();

        gameproto.SelectSkillRequest = function () {
          /**
           * Properties of a SelectSkillRequest.
           * @memberof gameproto
           * @interface ISelectSkillRequest
           * @property {number|Long} playerId SelectSkillRequest playerId
           * @property {number} index SelectSkillRequest index
           * @property {number} skillId SelectSkillRequest skillId
           */

          /**
           * Constructs a new SelectSkillRequest.
           * @memberof gameproto
           * @classdesc Represents a SelectSkillRequest.
           * @implements ISelectSkillRequest
           * @constructor
           * @param {gameproto.ISelectSkillRequest=} [properties] Properties to set
           */
          function SelectSkillRequest(properties) {
            if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
          }
          /**
           * SelectSkillRequest playerId.
           * @member {number|Long} playerId
           * @memberof gameproto.SelectSkillRequest
           * @instance
           */


          SelectSkillRequest.prototype.playerId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
          /**
           * SelectSkillRequest index.
           * @member {number} index
           * @memberof gameproto.SelectSkillRequest
           * @instance
           */

          SelectSkillRequest.prototype.index = 0;
          /**
           * SelectSkillRequest skillId.
           * @member {number} skillId
           * @memberof gameproto.SelectSkillRequest
           * @instance
           */

          SelectSkillRequest.prototype.skillId = 0;
          /**
           * Creates a new SelectSkillRequest instance using the specified properties.
           * @function create
           * @memberof gameproto.SelectSkillRequest
           * @static
           * @param {gameproto.ISelectSkillRequest=} [properties] Properties to set
           * @returns {gameproto.SelectSkillRequest} SelectSkillRequest instance
           */

          SelectSkillRequest.create = function create(properties) {
            return new SelectSkillRequest(properties);
          };
          /**
           * Encodes the specified SelectSkillRequest message. Does not implicitly {@link gameproto.SelectSkillRequest.verify|verify} messages.
           * @function encode
           * @memberof gameproto.SelectSkillRequest
           * @static
           * @param {gameproto.ISelectSkillRequest} message SelectSkillRequest message or plain object to encode
           * @param {$protobuf.Writer} [writer] Writer to encode to
           * @returns {$protobuf.Writer} Writer
           */


          SelectSkillRequest.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            writer.uint32(
            /* id 1, wireType 0 =*/
            8).int64(message.playerId);
            writer.uint32(
            /* id 2, wireType 0 =*/
            16).int32(message.index);
            writer.uint32(
            /* id 3, wireType 0 =*/
            24).int32(message.skillId);
            return writer;
          };
          /**
           * Encodes the specified SelectSkillRequest message, length delimited. Does not implicitly {@link gameproto.SelectSkillRequest.verify|verify} messages.
           * @function encodeDelimited
           * @memberof gameproto.SelectSkillRequest
           * @static
           * @param {gameproto.ISelectSkillRequest} message SelectSkillRequest message or plain object to encode
           * @param {$protobuf.Writer} [writer] Writer to encode to
           * @returns {$protobuf.Writer} Writer
           */


          SelectSkillRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
          };
          /**
           * Decodes a SelectSkillRequest message from the specified reader or buffer.
           * @function decode
           * @memberof gameproto.SelectSkillRequest
           * @static
           * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
           * @param {number} [length] Message length if known beforehand
           * @returns {gameproto.SelectSkillRequest} SelectSkillRequest
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */


          SelectSkillRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.gameproto.SelectSkillRequest();

            while (reader.pos < end) {
              var tag = reader.uint32();

              switch (tag >>> 3) {
                case 1:
                  message.playerId = reader.int64();
                  break;

                case 2:
                  message.index = reader.int32();
                  break;

                case 3:
                  message.skillId = reader.int32();
                  break;

                default:
                  reader.skipType(tag & 7);
                  break;
              }
            }

            if (!message.hasOwnProperty("playerId")) throw $util.ProtocolError("missing required 'playerId'", {
              instance: message
            });
            if (!message.hasOwnProperty("index")) throw $util.ProtocolError("missing required 'index'", {
              instance: message
            });
            if (!message.hasOwnProperty("skillId")) throw $util.ProtocolError("missing required 'skillId'", {
              instance: message
            });
            return message;
          };
          /**
           * Decodes a SelectSkillRequest message from the specified reader or buffer, length delimited.
           * @function decodeDelimited
           * @memberof gameproto.SelectSkillRequest
           * @static
           * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
           * @returns {gameproto.SelectSkillRequest} SelectSkillRequest
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */


          SelectSkillRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader)) reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
          };
          /**
           * Verifies a SelectSkillRequest message.
           * @function verify
           * @memberof gameproto.SelectSkillRequest
           * @static
           * @param {Object.<string,*>} message Plain object to verify
           * @returns {string|null} `null` if valid, otherwise the reason why it is not
           */


          SelectSkillRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null) return "object expected";
            if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high))) return "playerId: integer|Long expected";
            if (!$util.isInteger(message.index)) return "index: integer expected";
            if (!$util.isInteger(message.skillId)) return "skillId: integer expected";
            return null;
          };
          /**
           * Creates a SelectSkillRequest message from a plain object. Also converts values to their respective internal types.
           * @function fromObject
           * @memberof gameproto.SelectSkillRequest
           * @static
           * @param {Object.<string,*>} object Plain object
           * @returns {gameproto.SelectSkillRequest} SelectSkillRequest
           */


          SelectSkillRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.gameproto.SelectSkillRequest) return object;
            var message = new $root.gameproto.SelectSkillRequest();
            if (object.playerId != null) if ($util.Long) (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = false;else if (typeof object.playerId === "string") message.playerId = parseInt(object.playerId, 10);else if (typeof object.playerId === "number") message.playerId = object.playerId;else if (typeof object.playerId === "object") message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber();
            if (object.index != null) message.index = object.index | 0;
            if (object.skillId != null) message.skillId = object.skillId | 0;
            return message;
          };
          /**
           * Creates a plain object from a SelectSkillRequest message. Also converts values to other types if specified.
           * @function toObject
           * @memberof gameproto.SelectSkillRequest
           * @static
           * @param {gameproto.SelectSkillRequest} message SelectSkillRequest
           * @param {$protobuf.IConversionOptions} [options] Conversion options
           * @returns {Object.<string,*>} Plain object
           */


          SelectSkillRequest.toObject = function toObject(message, options) {
            if (!options) options = {};
            var object = {};

            if (options.defaults) {
              if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.playerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
              } else object.playerId = options.longs === String ? "0" : 0;

              object.index = 0;
              object.skillId = 0;
            }

            if (message.playerId != null && message.hasOwnProperty("playerId")) if (typeof message.playerId === "number") object.playerId = options.longs === String ? String(message.playerId) : message.playerId;else object.playerId = options.longs === String ? $util.Long.prototype.toString.call(message.playerId) : options.longs === Number ? new $util.LongBits(message.playerId.low >>> 0, message.playerId.high >>> 0).toNumber() : message.playerId;
            if (message.index != null && message.hasOwnProperty("index")) object.index = message.index;
            if (message.skillId != null && message.hasOwnProperty("skillId")) object.skillId = message.skillId;
            return object;
          };
          /**
           * Converts this SelectSkillRequest to JSON.
           * @function toJSON
           * @memberof gameproto.SelectSkillRequest
           * @instance
           * @returns {Object.<string,*>} JSON object
           */


          SelectSkillRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
          };

          return SelectSkillRequest;
        }();

        gameproto.SelectSkillResult = function () {
          /**
           * Properties of a SelectSkillResult.
           * @memberof gameproto
           * @interface ISelectSkillResult
           * @property {boolean} isOk SelectSkillResult isOk
           * @property {gameproto.IPlayer|null} [player] SelectSkillResult player
           */

          /**
           * Constructs a new SelectSkillResult.
           * @memberof gameproto
           * @classdesc Represents a SelectSkillResult.
           * @implements ISelectSkillResult
           * @constructor
           * @param {gameproto.ISelectSkillResult=} [properties] Properties to set
           */
          function SelectSkillResult(properties) {
            if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
          }
          /**
           * SelectSkillResult isOk.
           * @member {boolean} isOk
           * @memberof gameproto.SelectSkillResult
           * @instance
           */


          SelectSkillResult.prototype.isOk = false;
          /**
           * SelectSkillResult player.
           * @member {gameproto.IPlayer|null|undefined} player
           * @memberof gameproto.SelectSkillResult
           * @instance
           */

          SelectSkillResult.prototype.player = null;
          /**
           * Creates a new SelectSkillResult instance using the specified properties.
           * @function create
           * @memberof gameproto.SelectSkillResult
           * @static
           * @param {gameproto.ISelectSkillResult=} [properties] Properties to set
           * @returns {gameproto.SelectSkillResult} SelectSkillResult instance
           */

          SelectSkillResult.create = function create(properties) {
            return new SelectSkillResult(properties);
          };
          /**
           * Encodes the specified SelectSkillResult message. Does not implicitly {@link gameproto.SelectSkillResult.verify|verify} messages.
           * @function encode
           * @memberof gameproto.SelectSkillResult
           * @static
           * @param {gameproto.ISelectSkillResult} message SelectSkillResult message or plain object to encode
           * @param {$protobuf.Writer} [writer] Writer to encode to
           * @returns {$protobuf.Writer} Writer
           */


          SelectSkillResult.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            writer.uint32(
            /* id 1, wireType 0 =*/
            8).bool(message.isOk);
            if (message.player != null && message.hasOwnProperty("player")) $root.gameproto.Player.encode(message.player, writer.uint32(
            /* id 2, wireType 2 =*/
            18).fork()).ldelim();
            return writer;
          };
          /**
           * Encodes the specified SelectSkillResult message, length delimited. Does not implicitly {@link gameproto.SelectSkillResult.verify|verify} messages.
           * @function encodeDelimited
           * @memberof gameproto.SelectSkillResult
           * @static
           * @param {gameproto.ISelectSkillResult} message SelectSkillResult message or plain object to encode
           * @param {$protobuf.Writer} [writer] Writer to encode to
           * @returns {$protobuf.Writer} Writer
           */


          SelectSkillResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
          };
          /**
           * Decodes a SelectSkillResult message from the specified reader or buffer.
           * @function decode
           * @memberof gameproto.SelectSkillResult
           * @static
           * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
           * @param {number} [length] Message length if known beforehand
           * @returns {gameproto.SelectSkillResult} SelectSkillResult
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */


          SelectSkillResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.gameproto.SelectSkillResult();

            while (reader.pos < end) {
              var tag = reader.uint32();

              switch (tag >>> 3) {
                case 1:
                  message.isOk = reader.bool();
                  break;

                case 2:
                  message.player = $root.gameproto.Player.decode(reader, reader.uint32());
                  break;

                default:
                  reader.skipType(tag & 7);
                  break;
              }
            }

            if (!message.hasOwnProperty("isOk")) throw $util.ProtocolError("missing required 'isOk'", {
              instance: message
            });
            return message;
          };
          /**
           * Decodes a SelectSkillResult message from the specified reader or buffer, length delimited.
           * @function decodeDelimited
           * @memberof gameproto.SelectSkillResult
           * @static
           * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
           * @returns {gameproto.SelectSkillResult} SelectSkillResult
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */


          SelectSkillResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader)) reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
          };
          /**
           * Verifies a SelectSkillResult message.
           * @function verify
           * @memberof gameproto.SelectSkillResult
           * @static
           * @param {Object.<string,*>} message Plain object to verify
           * @returns {string|null} `null` if valid, otherwise the reason why it is not
           */


          SelectSkillResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null) return "object expected";
            if (typeof message.isOk !== "boolean") return "isOk: boolean expected";

            if (message.player != null && message.hasOwnProperty("player")) {
              var error = $root.gameproto.Player.verify(message.player);
              if (error) return "player." + error;
            }

            return null;
          };
          /**
           * Creates a SelectSkillResult message from a plain object. Also converts values to their respective internal types.
           * @function fromObject
           * @memberof gameproto.SelectSkillResult
           * @static
           * @param {Object.<string,*>} object Plain object
           * @returns {gameproto.SelectSkillResult} SelectSkillResult
           */


          SelectSkillResult.fromObject = function fromObject(object) {
            if (object instanceof $root.gameproto.SelectSkillResult) return object;
            var message = new $root.gameproto.SelectSkillResult();
            if (object.isOk != null) message.isOk = Boolean(object.isOk);

            if (object.player != null) {
              if (typeof object.player !== "object") throw TypeError(".gameproto.SelectSkillResult.player: object expected");
              message.player = $root.gameproto.Player.fromObject(object.player);
            }

            return message;
          };
          /**
           * Creates a plain object from a SelectSkillResult message. Also converts values to other types if specified.
           * @function toObject
           * @memberof gameproto.SelectSkillResult
           * @static
           * @param {gameproto.SelectSkillResult} message SelectSkillResult
           * @param {$protobuf.IConversionOptions} [options] Conversion options
           * @returns {Object.<string,*>} Plain object
           */


          SelectSkillResult.toObject = function toObject(message, options) {
            if (!options) options = {};
            var object = {};

            if (options.defaults) {
              object.isOk = false;
              object.player = null;
            }

            if (message.isOk != null && message.hasOwnProperty("isOk")) object.isOk = message.isOk;
            if (message.player != null && message.hasOwnProperty("player")) object.player = $root.gameproto.Player.toObject(message.player, options);
            return object;
          };
          /**
           * Converts this SelectSkillResult to JSON.
           * @function toJSON
           * @memberof gameproto.SelectSkillResult
           * @instance
           * @returns {Object.<string,*>} JSON object
           */


          SelectSkillResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
          };

          return SelectSkillResult;
        }();

        gameproto.RankingResult = function () {
          /**
           * Properties of a RankingResult.
           * @memberof gameproto
           * @interface IRankingResult
           * @property {Array.<gameproto.IRanking>|null} [ranking] RankingResult ranking
           */

          /**
           * Constructs a new RankingResult.
           * @memberof gameproto
           * @classdesc Represents a RankingResult.
           * @implements IRankingResult
           * @constructor
           * @param {gameproto.IRankingResult=} [properties] Properties to set
           */
          function RankingResult(properties) {
            this.ranking = [];
            if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
          }
          /**
           * RankingResult ranking.
           * @member {Array.<gameproto.IRanking>} ranking
           * @memberof gameproto.RankingResult
           * @instance
           */


          RankingResult.prototype.ranking = $util.emptyArray;
          /**
           * Creates a new RankingResult instance using the specified properties.
           * @function create
           * @memberof gameproto.RankingResult
           * @static
           * @param {gameproto.IRankingResult=} [properties] Properties to set
           * @returns {gameproto.RankingResult} RankingResult instance
           */

          RankingResult.create = function create(properties) {
            return new RankingResult(properties);
          };
          /**
           * Encodes the specified RankingResult message. Does not implicitly {@link gameproto.RankingResult.verify|verify} messages.
           * @function encode
           * @memberof gameproto.RankingResult
           * @static
           * @param {gameproto.IRankingResult} message RankingResult message or plain object to encode
           * @param {$protobuf.Writer} [writer] Writer to encode to
           * @returns {$protobuf.Writer} Writer
           */


          RankingResult.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            if (message.ranking != null && message.ranking.length) for (var i = 0; i < message.ranking.length; ++i) $root.gameproto.Ranking.encode(message.ranking[i], writer.uint32(
            /* id 1, wireType 2 =*/
            10).fork()).ldelim();
            return writer;
          };
          /**
           * Encodes the specified RankingResult message, length delimited. Does not implicitly {@link gameproto.RankingResult.verify|verify} messages.
           * @function encodeDelimited
           * @memberof gameproto.RankingResult
           * @static
           * @param {gameproto.IRankingResult} message RankingResult message or plain object to encode
           * @param {$protobuf.Writer} [writer] Writer to encode to
           * @returns {$protobuf.Writer} Writer
           */


          RankingResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
          };
          /**
           * Decodes a RankingResult message from the specified reader or buffer.
           * @function decode
           * @memberof gameproto.RankingResult
           * @static
           * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
           * @param {number} [length] Message length if known beforehand
           * @returns {gameproto.RankingResult} RankingResult
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */


          RankingResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.gameproto.RankingResult();

            while (reader.pos < end) {
              var tag = reader.uint32();

              switch (tag >>> 3) {
                case 1:
                  if (!(message.ranking && message.ranking.length)) message.ranking = [];
                  message.ranking.push($root.gameproto.Ranking.decode(reader, reader.uint32()));
                  break;

                default:
                  reader.skipType(tag & 7);
                  break;
              }
            }

            return message;
          };
          /**
           * Decodes a RankingResult message from the specified reader or buffer, length delimited.
           * @function decodeDelimited
           * @memberof gameproto.RankingResult
           * @static
           * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
           * @returns {gameproto.RankingResult} RankingResult
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */


          RankingResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader)) reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
          };
          /**
           * Verifies a RankingResult message.
           * @function verify
           * @memberof gameproto.RankingResult
           * @static
           * @param {Object.<string,*>} message Plain object to verify
           * @returns {string|null} `null` if valid, otherwise the reason why it is not
           */


          RankingResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null) return "object expected";

            if (message.ranking != null && message.hasOwnProperty("ranking")) {
              if (!Array.isArray(message.ranking)) return "ranking: array expected";

              for (var i = 0; i < message.ranking.length; ++i) {
                var error = $root.gameproto.Ranking.verify(message.ranking[i]);
                if (error) return "ranking." + error;
              }
            }

            return null;
          };
          /**
           * Creates a RankingResult message from a plain object. Also converts values to their respective internal types.
           * @function fromObject
           * @memberof gameproto.RankingResult
           * @static
           * @param {Object.<string,*>} object Plain object
           * @returns {gameproto.RankingResult} RankingResult
           */


          RankingResult.fromObject = function fromObject(object) {
            if (object instanceof $root.gameproto.RankingResult) return object;
            var message = new $root.gameproto.RankingResult();

            if (object.ranking) {
              if (!Array.isArray(object.ranking)) throw TypeError(".gameproto.RankingResult.ranking: array expected");
              message.ranking = [];

              for (var i = 0; i < object.ranking.length; ++i) {
                if (typeof object.ranking[i] !== "object") throw TypeError(".gameproto.RankingResult.ranking: object expected");
                message.ranking[i] = $root.gameproto.Ranking.fromObject(object.ranking[i]);
              }
            }

            return message;
          };
          /**
           * Creates a plain object from a RankingResult message. Also converts values to other types if specified.
           * @function toObject
           * @memberof gameproto.RankingResult
           * @static
           * @param {gameproto.RankingResult} message RankingResult
           * @param {$protobuf.IConversionOptions} [options] Conversion options
           * @returns {Object.<string,*>} Plain object
           */


          RankingResult.toObject = function toObject(message, options) {
            if (!options) options = {};
            var object = {};
            if (options.arrays || options.defaults) object.ranking = [];

            if (message.ranking && message.ranking.length) {
              object.ranking = [];

              for (var j = 0; j < message.ranking.length; ++j) object.ranking[j] = $root.gameproto.Ranking.toObject(message.ranking[j], options);
            }

            return object;
          };
          /**
           * Converts this RankingResult to JSON.
           * @function toJSON
           * @memberof gameproto.RankingResult
           * @instance
           * @returns {Object.<string,*>} JSON object
           */


          RankingResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
          };

          return RankingResult;
        }();

        gameproto.Ranking = function () {
          /**
           * Properties of a Ranking.
           * @memberof gameproto
           * @interface IRanking
           * @property {number} ranking Ranking ranking
           * @property {string} name Ranking name
           */

          /**
           * Constructs a new Ranking.
           * @memberof gameproto
           * @classdesc Represents a Ranking.
           * @implements IRanking
           * @constructor
           * @param {gameproto.IRanking=} [properties] Properties to set
           */
          function Ranking(properties) {
            if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
          }
          /**
           * Ranking ranking.
           * @member {number} ranking
           * @memberof gameproto.Ranking
           * @instance
           */


          Ranking.prototype.ranking = 0;
          /**
           * Ranking name.
           * @member {string} name
           * @memberof gameproto.Ranking
           * @instance
           */

          Ranking.prototype.name = "";
          /**
           * Creates a new Ranking instance using the specified properties.
           * @function create
           * @memberof gameproto.Ranking
           * @static
           * @param {gameproto.IRanking=} [properties] Properties to set
           * @returns {gameproto.Ranking} Ranking instance
           */

          Ranking.create = function create(properties) {
            return new Ranking(properties);
          };
          /**
           * Encodes the specified Ranking message. Does not implicitly {@link gameproto.Ranking.verify|verify} messages.
           * @function encode
           * @memberof gameproto.Ranking
           * @static
           * @param {gameproto.IRanking} message Ranking message or plain object to encode
           * @param {$protobuf.Writer} [writer] Writer to encode to
           * @returns {$protobuf.Writer} Writer
           */


          Ranking.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            writer.uint32(
            /* id 1, wireType 0 =*/
            8).int32(message.ranking);
            writer.uint32(
            /* id 2, wireType 2 =*/
            18).string(message.name);
            return writer;
          };
          /**
           * Encodes the specified Ranking message, length delimited. Does not implicitly {@link gameproto.Ranking.verify|verify} messages.
           * @function encodeDelimited
           * @memberof gameproto.Ranking
           * @static
           * @param {gameproto.IRanking} message Ranking message or plain object to encode
           * @param {$protobuf.Writer} [writer] Writer to encode to
           * @returns {$protobuf.Writer} Writer
           */


          Ranking.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
          };
          /**
           * Decodes a Ranking message from the specified reader or buffer.
           * @function decode
           * @memberof gameproto.Ranking
           * @static
           * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
           * @param {number} [length] Message length if known beforehand
           * @returns {gameproto.Ranking} Ranking
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */


          Ranking.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.gameproto.Ranking();

            while (reader.pos < end) {
              var tag = reader.uint32();

              switch (tag >>> 3) {
                case 1:
                  message.ranking = reader.int32();
                  break;

                case 2:
                  message.name = reader.string();
                  break;

                default:
                  reader.skipType(tag & 7);
                  break;
              }
            }

            if (!message.hasOwnProperty("ranking")) throw $util.ProtocolError("missing required 'ranking'", {
              instance: message
            });
            if (!message.hasOwnProperty("name")) throw $util.ProtocolError("missing required 'name'", {
              instance: message
            });
            return message;
          };
          /**
           * Decodes a Ranking message from the specified reader or buffer, length delimited.
           * @function decodeDelimited
           * @memberof gameproto.Ranking
           * @static
           * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
           * @returns {gameproto.Ranking} Ranking
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */


          Ranking.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader)) reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
          };
          /**
           * Verifies a Ranking message.
           * @function verify
           * @memberof gameproto.Ranking
           * @static
           * @param {Object.<string,*>} message Plain object to verify
           * @returns {string|null} `null` if valid, otherwise the reason why it is not
           */


          Ranking.verify = function verify(message) {
            if (typeof message !== "object" || message === null) return "object expected";
            if (!$util.isInteger(message.ranking)) return "ranking: integer expected";
            if (!$util.isString(message.name)) return "name: string expected";
            return null;
          };
          /**
           * Creates a Ranking message from a plain object. Also converts values to their respective internal types.
           * @function fromObject
           * @memberof gameproto.Ranking
           * @static
           * @param {Object.<string,*>} object Plain object
           * @returns {gameproto.Ranking} Ranking
           */


          Ranking.fromObject = function fromObject(object) {
            if (object instanceof $root.gameproto.Ranking) return object;
            var message = new $root.gameproto.Ranking();
            if (object.ranking != null) message.ranking = object.ranking | 0;
            if (object.name != null) message.name = String(object.name);
            return message;
          };
          /**
           * Creates a plain object from a Ranking message. Also converts values to other types if specified.
           * @function toObject
           * @memberof gameproto.Ranking
           * @static
           * @param {gameproto.Ranking} message Ranking
           * @param {$protobuf.IConversionOptions} [options] Conversion options
           * @returns {Object.<string,*>} Plain object
           */


          Ranking.toObject = function toObject(message, options) {
            if (!options) options = {};
            var object = {};

            if (options.defaults) {
              object.ranking = 0;
              object.name = "";
            }

            if (message.ranking != null && message.hasOwnProperty("ranking")) object.ranking = message.ranking;
            if (message.name != null && message.hasOwnProperty("name")) object.name = message.name;
            return object;
          };
          /**
           * Converts this Ranking to JSON.
           * @function toJSON
           * @memberof gameproto.Ranking
           * @instance
           * @returns {Object.<string,*>} JSON object
           */


          Ranking.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
          };

          return Ranking;
        }();

        gameproto.Player = function () {
          /**
           * Properties of a Player.
           * @memberof gameproto
           * @interface IPlayer
           * @property {number} life Player life
           * @property {number} blue Player blue
           * @property {number} attr Player attr
           * @property {number} def Player def
           * @property {number} speed Player speed
           * @property {number} fist Player fist
           * @property {number} leg Player leg
           * @property {number} sword Player sword
           * @property {number} knife Player knife
           * @property {number} special Player special
           * @property {number} hidden Player hidden
           * @property {number} poison Player poison
           * @property {number} medicine Player medicine
           * @property {number} activeLife Player activeLife
           * @property {number} activeBlue Player activeBlue
           * @property {number} sequenceLife Player sequenceLife
           * @property {number} sequenceBlue Player sequenceBlue
           * @property {number} again Player again
           * @property {number} lifeAddition Player lifeAddition
           * @property {number} blueAddition Player blueAddition
           * @property {number} harmAddition Player harmAddition
           * @property {number} harmReduce Player harmReduce
           * @property {number} crit Player crit
           * @property {number} critHarm Player critHarm
           * @property {number} continueAddition Player continueAddition
           * @property {number} dodge Player dodge
           * @property {number} fixedHarmAdd Player fixedHarmAdd
           * @property {number} fixedHarmReduce Player fixedHarmReduce
           * @property {number} hit Player hit
           * @property {number} fixedBack Player fixedBack
           * @property {number} back Player back
           * @property {number} byAttrLife Player byAttrLife
           * @property {number} fixedAttrLife Player fixedAttrLife
           * @property {number} attrLife Player attrLife
           * @property {number} defIgnore Player defIgnore
           * @property {number} defPenetrate Player defPenetrate
           * @property {number} endHarmAdd Player endHarmAdd
           * @property {number} endHarmReduce Player endHarmReduce
           * @property {number} critResistance Player critResistance
           * @property {number} gatherResistance Player gatherResistance
           * @property {number} attrAdd Player attrAdd
           * @property {number} defAdd Player defAdd
           * @property {number} speedAdd Player speedAdd
           * @property {number} fistAdd Player fistAdd
           * @property {number} legAdd Player legAdd
           * @property {number} swordAdd Player swordAdd
           * @property {number} knifeAdd Player knifeAdd
           * @property {number} specialAdd Player specialAdd
           * @property {number} hiddenAdd Player hiddenAdd
           * @property {number} poisonAdd Player poisonAdd
           * @property {number} medicineAdd Player medicineAdd
           * @property {number} roleId Player roleId
           */

          /**
           * Constructs a new Player.
           * @memberof gameproto
           * @classdesc Represents a Player.
           * @implements IPlayer
           * @constructor
           * @param {gameproto.IPlayer=} [properties] Properties to set
           */
          function Player(properties) {
            if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
          }
          /**
           * Player life.
           * @member {number} life
           * @memberof gameproto.Player
           * @instance
           */


          Player.prototype.life = 0;
          /**
           * Player blue.
           * @member {number} blue
           * @memberof gameproto.Player
           * @instance
           */

          Player.prototype.blue = 0;
          /**
           * Player attr.
           * @member {number} attr
           * @memberof gameproto.Player
           * @instance
           */

          Player.prototype.attr = 0;
          /**
           * Player def.
           * @member {number} def
           * @memberof gameproto.Player
           * @instance
           */

          Player.prototype.def = 0;
          /**
           * Player speed.
           * @member {number} speed
           * @memberof gameproto.Player
           * @instance
           */

          Player.prototype.speed = 0;
          /**
           * Player fist.
           * @member {number} fist
           * @memberof gameproto.Player
           * @instance
           */

          Player.prototype.fist = 0;
          /**
           * Player leg.
           * @member {number} leg
           * @memberof gameproto.Player
           * @instance
           */

          Player.prototype.leg = 0;
          /**
           * Player sword.
           * @member {number} sword
           * @memberof gameproto.Player
           * @instance
           */

          Player.prototype.sword = 0;
          /**
           * Player knife.
           * @member {number} knife
           * @memberof gameproto.Player
           * @instance
           */

          Player.prototype.knife = 0;
          /**
           * Player special.
           * @member {number} special
           * @memberof gameproto.Player
           * @instance
           */

          Player.prototype.special = 0;
          /**
           * Player hidden.
           * @member {number} hidden
           * @memberof gameproto.Player
           * @instance
           */

          Player.prototype.hidden = 0;
          /**
           * Player poison.
           * @member {number} poison
           * @memberof gameproto.Player
           * @instance
           */

          Player.prototype.poison = 0;
          /**
           * Player medicine.
           * @member {number} medicine
           * @memberof gameproto.Player
           * @instance
           */

          Player.prototype.medicine = 0;
          /**
           * Player activeLife.
           * @member {number} activeLife
           * @memberof gameproto.Player
           * @instance
           */

          Player.prototype.activeLife = 0;
          /**
           * Player activeBlue.
           * @member {number} activeBlue
           * @memberof gameproto.Player
           * @instance
           */

          Player.prototype.activeBlue = 0;
          /**
           * Player sequenceLife.
           * @member {number} sequenceLife
           * @memberof gameproto.Player
           * @instance
           */

          Player.prototype.sequenceLife = 0;
          /**
           * Player sequenceBlue.
           * @member {number} sequenceBlue
           * @memberof gameproto.Player
           * @instance
           */

          Player.prototype.sequenceBlue = 0;
          /**
           * Player again.
           * @member {number} again
           * @memberof gameproto.Player
           * @instance
           */

          Player.prototype.again = 0;
          /**
           * Player lifeAddition.
           * @member {number} lifeAddition
           * @memberof gameproto.Player
           * @instance
           */

          Player.prototype.lifeAddition = 0;
          /**
           * Player blueAddition.
           * @member {number} blueAddition
           * @memberof gameproto.Player
           * @instance
           */

          Player.prototype.blueAddition = 0;
          /**
           * Player harmAddition.
           * @member {number} harmAddition
           * @memberof gameproto.Player
           * @instance
           */

          Player.prototype.harmAddition = 0;
          /**
           * Player harmReduce.
           * @member {number} harmReduce
           * @memberof gameproto.Player
           * @instance
           */

          Player.prototype.harmReduce = 0;
          /**
           * Player crit.
           * @member {number} crit
           * @memberof gameproto.Player
           * @instance
           */

          Player.prototype.crit = 0;
          /**
           * Player critHarm.
           * @member {number} critHarm
           * @memberof gameproto.Player
           * @instance
           */

          Player.prototype.critHarm = 0;
          /**
           * Player continueAddition.
           * @member {number} continueAddition
           * @memberof gameproto.Player
           * @instance
           */

          Player.prototype.continueAddition = 0;
          /**
           * Player dodge.
           * @member {number} dodge
           * @memberof gameproto.Player
           * @instance
           */

          Player.prototype.dodge = 0;
          /**
           * Player fixedHarmAdd.
           * @member {number} fixedHarmAdd
           * @memberof gameproto.Player
           * @instance
           */

          Player.prototype.fixedHarmAdd = 0;
          /**
           * Player fixedHarmReduce.
           * @member {number} fixedHarmReduce
           * @memberof gameproto.Player
           * @instance
           */

          Player.prototype.fixedHarmReduce = 0;
          /**
           * Player hit.
           * @member {number} hit
           * @memberof gameproto.Player
           * @instance
           */

          Player.prototype.hit = 0;
          /**
           * Player fixedBack.
           * @member {number} fixedBack
           * @memberof gameproto.Player
           * @instance
           */

          Player.prototype.fixedBack = 0;
          /**
           * Player back.
           * @member {number} back
           * @memberof gameproto.Player
           * @instance
           */

          Player.prototype.back = 0;
          /**
           * Player byAttrLife.
           * @member {number} byAttrLife
           * @memberof gameproto.Player
           * @instance
           */

          Player.prototype.byAttrLife = 0;
          /**
           * Player fixedAttrLife.
           * @member {number} fixedAttrLife
           * @memberof gameproto.Player
           * @instance
           */

          Player.prototype.fixedAttrLife = 0;
          /**
           * Player attrLife.
           * @member {number} attrLife
           * @memberof gameproto.Player
           * @instance
           */

          Player.prototype.attrLife = 0;
          /**
           * Player defIgnore.
           * @member {number} defIgnore
           * @memberof gameproto.Player
           * @instance
           */

          Player.prototype.defIgnore = 0;
          /**
           * Player defPenetrate.
           * @member {number} defPenetrate
           * @memberof gameproto.Player
           * @instance
           */

          Player.prototype.defPenetrate = 0;
          /**
           * Player endHarmAdd.
           * @member {number} endHarmAdd
           * @memberof gameproto.Player
           * @instance
           */

          Player.prototype.endHarmAdd = 0;
          /**
           * Player endHarmReduce.
           * @member {number} endHarmReduce
           * @memberof gameproto.Player
           * @instance
           */

          Player.prototype.endHarmReduce = 0;
          /**
           * Player critResistance.
           * @member {number} critResistance
           * @memberof gameproto.Player
           * @instance
           */

          Player.prototype.critResistance = 0;
          /**
           * Player gatherResistance.
           * @member {number} gatherResistance
           * @memberof gameproto.Player
           * @instance
           */

          Player.prototype.gatherResistance = 0;
          /**
           * Player attrAdd.
           * @member {number} attrAdd
           * @memberof gameproto.Player
           * @instance
           */

          Player.prototype.attrAdd = 0;
          /**
           * Player defAdd.
           * @member {number} defAdd
           * @memberof gameproto.Player
           * @instance
           */

          Player.prototype.defAdd = 0;
          /**
           * Player speedAdd.
           * @member {number} speedAdd
           * @memberof gameproto.Player
           * @instance
           */

          Player.prototype.speedAdd = 0;
          /**
           * Player fistAdd.
           * @member {number} fistAdd
           * @memberof gameproto.Player
           * @instance
           */

          Player.prototype.fistAdd = 0;
          /**
           * Player legAdd.
           * @member {number} legAdd
           * @memberof gameproto.Player
           * @instance
           */

          Player.prototype.legAdd = 0;
          /**
           * Player swordAdd.
           * @member {number} swordAdd
           * @memberof gameproto.Player
           * @instance
           */

          Player.prototype.swordAdd = 0;
          /**
           * Player knifeAdd.
           * @member {number} knifeAdd
           * @memberof gameproto.Player
           * @instance
           */

          Player.prototype.knifeAdd = 0;
          /**
           * Player specialAdd.
           * @member {number} specialAdd
           * @memberof gameproto.Player
           * @instance
           */

          Player.prototype.specialAdd = 0;
          /**
           * Player hiddenAdd.
           * @member {number} hiddenAdd
           * @memberof gameproto.Player
           * @instance
           */

          Player.prototype.hiddenAdd = 0;
          /**
           * Player poisonAdd.
           * @member {number} poisonAdd
           * @memberof gameproto.Player
           * @instance
           */

          Player.prototype.poisonAdd = 0;
          /**
           * Player medicineAdd.
           * @member {number} medicineAdd
           * @memberof gameproto.Player
           * @instance
           */

          Player.prototype.medicineAdd = 0;
          /**
           * Player roleId.
           * @member {number} roleId
           * @memberof gameproto.Player
           * @instance
           */

          Player.prototype.roleId = 0;
          /**
           * Creates a new Player instance using the specified properties.
           * @function create
           * @memberof gameproto.Player
           * @static
           * @param {gameproto.IPlayer=} [properties] Properties to set
           * @returns {gameproto.Player} Player instance
           */

          Player.create = function create(properties) {
            return new Player(properties);
          };
          /**
           * Encodes the specified Player message. Does not implicitly {@link gameproto.Player.verify|verify} messages.
           * @function encode
           * @memberof gameproto.Player
           * @static
           * @param {gameproto.IPlayer} message Player message or plain object to encode
           * @param {$protobuf.Writer} [writer] Writer to encode to
           * @returns {$protobuf.Writer} Writer
           */


          Player.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            writer.uint32(
            /* id 1, wireType 0 =*/
            8).int32(message.life);
            writer.uint32(
            /* id 2, wireType 0 =*/
            16).int32(message.blue);
            writer.uint32(
            /* id 3, wireType 0 =*/
            24).int32(message.attr);
            writer.uint32(
            /* id 4, wireType 0 =*/
            32).int32(message.def);
            writer.uint32(
            /* id 5, wireType 0 =*/
            40).int32(message.speed);
            writer.uint32(
            /* id 6, wireType 0 =*/
            48).int32(message.fist);
            writer.uint32(
            /* id 7, wireType 0 =*/
            56).int32(message.leg);
            writer.uint32(
            /* id 8, wireType 0 =*/
            64).int32(message.sword);
            writer.uint32(
            /* id 9, wireType 0 =*/
            72).int32(message.knife);
            writer.uint32(
            /* id 10, wireType 0 =*/
            80).int32(message.special);
            writer.uint32(
            /* id 11, wireType 0 =*/
            88).int32(message.hidden);
            writer.uint32(
            /* id 12, wireType 0 =*/
            96).int32(message.poison);
            writer.uint32(
            /* id 13, wireType 0 =*/
            104).int32(message.medicine);
            writer.uint32(
            /* id 14, wireType 0 =*/
            112).int32(message.activeLife);
            writer.uint32(
            /* id 15, wireType 0 =*/
            120).int32(message.activeBlue);
            writer.uint32(
            /* id 16, wireType 0 =*/
            128).int32(message.sequenceLife);
            writer.uint32(
            /* id 17, wireType 0 =*/
            136).int32(message.sequenceBlue);
            writer.uint32(
            /* id 18, wireType 0 =*/
            144).int32(message.again);
            writer.uint32(
            /* id 19, wireType 0 =*/
            152).int32(message.lifeAddition);
            writer.uint32(
            /* id 20, wireType 0 =*/
            160).int32(message.blueAddition);
            writer.uint32(
            /* id 21, wireType 0 =*/
            168).int32(message.harmAddition);
            writer.uint32(
            /* id 22, wireType 0 =*/
            176).int32(message.harmReduce);
            writer.uint32(
            /* id 23, wireType 0 =*/
            184).int32(message.crit);
            writer.uint32(
            /* id 24, wireType 0 =*/
            192).int32(message.critHarm);
            writer.uint32(
            /* id 25, wireType 0 =*/
            200).int32(message.continueAddition);
            writer.uint32(
            /* id 26, wireType 0 =*/
            208).int32(message.dodge);
            writer.uint32(
            /* id 27, wireType 0 =*/
            216).int32(message.fixedHarmAdd);
            writer.uint32(
            /* id 28, wireType 0 =*/
            224).int32(message.fixedHarmReduce);
            writer.uint32(
            /* id 29, wireType 0 =*/
            232).int32(message.hit);
            writer.uint32(
            /* id 30, wireType 0 =*/
            240).int32(message.fixedBack);
            writer.uint32(
            /* id 31, wireType 0 =*/
            248).int32(message.back);
            writer.uint32(
            /* id 32, wireType 0 =*/
            256).int32(message.byAttrLife);
            writer.uint32(
            /* id 33, wireType 0 =*/
            264).int32(message.fixedAttrLife);
            writer.uint32(
            /* id 34, wireType 0 =*/
            272).int32(message.attrLife);
            writer.uint32(
            /* id 35, wireType 0 =*/
            280).int32(message.defIgnore);
            writer.uint32(
            /* id 36, wireType 0 =*/
            288).int32(message.defPenetrate);
            writer.uint32(
            /* id 37, wireType 0 =*/
            296).int32(message.endHarmAdd);
            writer.uint32(
            /* id 38, wireType 0 =*/
            304).int32(message.endHarmReduce);
            writer.uint32(
            /* id 39, wireType 0 =*/
            312).int32(message.critResistance);
            writer.uint32(
            /* id 40, wireType 0 =*/
            320).int32(message.gatherResistance);
            writer.uint32(
            /* id 41, wireType 0 =*/
            328).int32(message.attrAdd);
            writer.uint32(
            /* id 42, wireType 0 =*/
            336).int32(message.defAdd);
            writer.uint32(
            /* id 43, wireType 0 =*/
            344).int32(message.speedAdd);
            writer.uint32(
            /* id 44, wireType 0 =*/
            352).int32(message.fistAdd);
            writer.uint32(
            /* id 45, wireType 0 =*/
            360).int32(message.legAdd);
            writer.uint32(
            /* id 46, wireType 0 =*/
            368).int32(message.swordAdd);
            writer.uint32(
            /* id 47, wireType 0 =*/
            376).int32(message.knifeAdd);
            writer.uint32(
            /* id 48, wireType 0 =*/
            384).int32(message.specialAdd);
            writer.uint32(
            /* id 49, wireType 0 =*/
            392).int32(message.hiddenAdd);
            writer.uint32(
            /* id 50, wireType 0 =*/
            400).int32(message.poisonAdd);
            writer.uint32(
            /* id 51, wireType 0 =*/
            408).int32(message.medicineAdd);
            writer.uint32(
            /* id 52, wireType 0 =*/
            416).int32(message.roleId);
            return writer;
          };
          /**
           * Encodes the specified Player message, length delimited. Does not implicitly {@link gameproto.Player.verify|verify} messages.
           * @function encodeDelimited
           * @memberof gameproto.Player
           * @static
           * @param {gameproto.IPlayer} message Player message or plain object to encode
           * @param {$protobuf.Writer} [writer] Writer to encode to
           * @returns {$protobuf.Writer} Writer
           */


          Player.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
          };
          /**
           * Decodes a Player message from the specified reader or buffer.
           * @function decode
           * @memberof gameproto.Player
           * @static
           * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
           * @param {number} [length] Message length if known beforehand
           * @returns {gameproto.Player} Player
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */


          Player.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.gameproto.Player();

            while (reader.pos < end) {
              var tag = reader.uint32();

              switch (tag >>> 3) {
                case 1:
                  message.life = reader.int32();
                  break;

                case 2:
                  message.blue = reader.int32();
                  break;

                case 3:
                  message.attr = reader.int32();
                  break;

                case 4:
                  message.def = reader.int32();
                  break;

                case 5:
                  message.speed = reader.int32();
                  break;

                case 6:
                  message.fist = reader.int32();
                  break;

                case 7:
                  message.leg = reader.int32();
                  break;

                case 8:
                  message.sword = reader.int32();
                  break;

                case 9:
                  message.knife = reader.int32();
                  break;

                case 10:
                  message.special = reader.int32();
                  break;

                case 11:
                  message.hidden = reader.int32();
                  break;

                case 12:
                  message.poison = reader.int32();
                  break;

                case 13:
                  message.medicine = reader.int32();
                  break;

                case 14:
                  message.activeLife = reader.int32();
                  break;

                case 15:
                  message.activeBlue = reader.int32();
                  break;

                case 16:
                  message.sequenceLife = reader.int32();
                  break;

                case 17:
                  message.sequenceBlue = reader.int32();
                  break;

                case 18:
                  message.again = reader.int32();
                  break;

                case 19:
                  message.lifeAddition = reader.int32();
                  break;

                case 20:
                  message.blueAddition = reader.int32();
                  break;

                case 21:
                  message.harmAddition = reader.int32();
                  break;

                case 22:
                  message.harmReduce = reader.int32();
                  break;

                case 23:
                  message.crit = reader.int32();
                  break;

                case 24:
                  message.critHarm = reader.int32();
                  break;

                case 25:
                  message.continueAddition = reader.int32();
                  break;

                case 26:
                  message.dodge = reader.int32();
                  break;

                case 27:
                  message.fixedHarmAdd = reader.int32();
                  break;

                case 28:
                  message.fixedHarmReduce = reader.int32();
                  break;

                case 29:
                  message.hit = reader.int32();
                  break;

                case 30:
                  message.fixedBack = reader.int32();
                  break;

                case 31:
                  message.back = reader.int32();
                  break;

                case 32:
                  message.byAttrLife = reader.int32();
                  break;

                case 33:
                  message.fixedAttrLife = reader.int32();
                  break;

                case 34:
                  message.attrLife = reader.int32();
                  break;

                case 35:
                  message.defIgnore = reader.int32();
                  break;

                case 36:
                  message.defPenetrate = reader.int32();
                  break;

                case 37:
                  message.endHarmAdd = reader.int32();
                  break;

                case 38:
                  message.endHarmReduce = reader.int32();
                  break;

                case 39:
                  message.critResistance = reader.int32();
                  break;

                case 40:
                  message.gatherResistance = reader.int32();
                  break;

                case 41:
                  message.attrAdd = reader.int32();
                  break;

                case 42:
                  message.defAdd = reader.int32();
                  break;

                case 43:
                  message.speedAdd = reader.int32();
                  break;

                case 44:
                  message.fistAdd = reader.int32();
                  break;

                case 45:
                  message.legAdd = reader.int32();
                  break;

                case 46:
                  message.swordAdd = reader.int32();
                  break;

                case 47:
                  message.knifeAdd = reader.int32();
                  break;

                case 48:
                  message.specialAdd = reader.int32();
                  break;

                case 49:
                  message.hiddenAdd = reader.int32();
                  break;

                case 50:
                  message.poisonAdd = reader.int32();
                  break;

                case 51:
                  message.medicineAdd = reader.int32();
                  break;

                case 52:
                  message.roleId = reader.int32();
                  break;

                default:
                  reader.skipType(tag & 7);
                  break;
              }
            }

            if (!message.hasOwnProperty("life")) throw $util.ProtocolError("missing required 'life'", {
              instance: message
            });
            if (!message.hasOwnProperty("blue")) throw $util.ProtocolError("missing required 'blue'", {
              instance: message
            });
            if (!message.hasOwnProperty("attr")) throw $util.ProtocolError("missing required 'attr'", {
              instance: message
            });
            if (!message.hasOwnProperty("def")) throw $util.ProtocolError("missing required 'def'", {
              instance: message
            });
            if (!message.hasOwnProperty("speed")) throw $util.ProtocolError("missing required 'speed'", {
              instance: message
            });
            if (!message.hasOwnProperty("fist")) throw $util.ProtocolError("missing required 'fist'", {
              instance: message
            });
            if (!message.hasOwnProperty("leg")) throw $util.ProtocolError("missing required 'leg'", {
              instance: message
            });
            if (!message.hasOwnProperty("sword")) throw $util.ProtocolError("missing required 'sword'", {
              instance: message
            });
            if (!message.hasOwnProperty("knife")) throw $util.ProtocolError("missing required 'knife'", {
              instance: message
            });
            if (!message.hasOwnProperty("special")) throw $util.ProtocolError("missing required 'special'", {
              instance: message
            });
            if (!message.hasOwnProperty("hidden")) throw $util.ProtocolError("missing required 'hidden'", {
              instance: message
            });
            if (!message.hasOwnProperty("poison")) throw $util.ProtocolError("missing required 'poison'", {
              instance: message
            });
            if (!message.hasOwnProperty("medicine")) throw $util.ProtocolError("missing required 'medicine'", {
              instance: message
            });
            if (!message.hasOwnProperty("activeLife")) throw $util.ProtocolError("missing required 'activeLife'", {
              instance: message
            });
            if (!message.hasOwnProperty("activeBlue")) throw $util.ProtocolError("missing required 'activeBlue'", {
              instance: message
            });
            if (!message.hasOwnProperty("sequenceLife")) throw $util.ProtocolError("missing required 'sequenceLife'", {
              instance: message
            });
            if (!message.hasOwnProperty("sequenceBlue")) throw $util.ProtocolError("missing required 'sequenceBlue'", {
              instance: message
            });
            if (!message.hasOwnProperty("again")) throw $util.ProtocolError("missing required 'again'", {
              instance: message
            });
            if (!message.hasOwnProperty("lifeAddition")) throw $util.ProtocolError("missing required 'lifeAddition'", {
              instance: message
            });
            if (!message.hasOwnProperty("blueAddition")) throw $util.ProtocolError("missing required 'blueAddition'", {
              instance: message
            });
            if (!message.hasOwnProperty("harmAddition")) throw $util.ProtocolError("missing required 'harmAddition'", {
              instance: message
            });
            if (!message.hasOwnProperty("harmReduce")) throw $util.ProtocolError("missing required 'harmReduce'", {
              instance: message
            });
            if (!message.hasOwnProperty("crit")) throw $util.ProtocolError("missing required 'crit'", {
              instance: message
            });
            if (!message.hasOwnProperty("critHarm")) throw $util.ProtocolError("missing required 'critHarm'", {
              instance: message
            });
            if (!message.hasOwnProperty("continueAddition")) throw $util.ProtocolError("missing required 'continueAddition'", {
              instance: message
            });
            if (!message.hasOwnProperty("dodge")) throw $util.ProtocolError("missing required 'dodge'", {
              instance: message
            });
            if (!message.hasOwnProperty("fixedHarmAdd")) throw $util.ProtocolError("missing required 'fixedHarmAdd'", {
              instance: message
            });
            if (!message.hasOwnProperty("fixedHarmReduce")) throw $util.ProtocolError("missing required 'fixedHarmReduce'", {
              instance: message
            });
            if (!message.hasOwnProperty("hit")) throw $util.ProtocolError("missing required 'hit'", {
              instance: message
            });
            if (!message.hasOwnProperty("fixedBack")) throw $util.ProtocolError("missing required 'fixedBack'", {
              instance: message
            });
            if (!message.hasOwnProperty("back")) throw $util.ProtocolError("missing required 'back'", {
              instance: message
            });
            if (!message.hasOwnProperty("byAttrLife")) throw $util.ProtocolError("missing required 'byAttrLife'", {
              instance: message
            });
            if (!message.hasOwnProperty("fixedAttrLife")) throw $util.ProtocolError("missing required 'fixedAttrLife'", {
              instance: message
            });
            if (!message.hasOwnProperty("attrLife")) throw $util.ProtocolError("missing required 'attrLife'", {
              instance: message
            });
            if (!message.hasOwnProperty("defIgnore")) throw $util.ProtocolError("missing required 'defIgnore'", {
              instance: message
            });
            if (!message.hasOwnProperty("defPenetrate")) throw $util.ProtocolError("missing required 'defPenetrate'", {
              instance: message
            });
            if (!message.hasOwnProperty("endHarmAdd")) throw $util.ProtocolError("missing required 'endHarmAdd'", {
              instance: message
            });
            if (!message.hasOwnProperty("endHarmReduce")) throw $util.ProtocolError("missing required 'endHarmReduce'", {
              instance: message
            });
            if (!message.hasOwnProperty("critResistance")) throw $util.ProtocolError("missing required 'critResistance'", {
              instance: message
            });
            if (!message.hasOwnProperty("gatherResistance")) throw $util.ProtocolError("missing required 'gatherResistance'", {
              instance: message
            });
            if (!message.hasOwnProperty("attrAdd")) throw $util.ProtocolError("missing required 'attrAdd'", {
              instance: message
            });
            if (!message.hasOwnProperty("defAdd")) throw $util.ProtocolError("missing required 'defAdd'", {
              instance: message
            });
            if (!message.hasOwnProperty("speedAdd")) throw $util.ProtocolError("missing required 'speedAdd'", {
              instance: message
            });
            if (!message.hasOwnProperty("fistAdd")) throw $util.ProtocolError("missing required 'fistAdd'", {
              instance: message
            });
            if (!message.hasOwnProperty("legAdd")) throw $util.ProtocolError("missing required 'legAdd'", {
              instance: message
            });
            if (!message.hasOwnProperty("swordAdd")) throw $util.ProtocolError("missing required 'swordAdd'", {
              instance: message
            });
            if (!message.hasOwnProperty("knifeAdd")) throw $util.ProtocolError("missing required 'knifeAdd'", {
              instance: message
            });
            if (!message.hasOwnProperty("specialAdd")) throw $util.ProtocolError("missing required 'specialAdd'", {
              instance: message
            });
            if (!message.hasOwnProperty("hiddenAdd")) throw $util.ProtocolError("missing required 'hiddenAdd'", {
              instance: message
            });
            if (!message.hasOwnProperty("poisonAdd")) throw $util.ProtocolError("missing required 'poisonAdd'", {
              instance: message
            });
            if (!message.hasOwnProperty("medicineAdd")) throw $util.ProtocolError("missing required 'medicineAdd'", {
              instance: message
            });
            if (!message.hasOwnProperty("roleId")) throw $util.ProtocolError("missing required 'roleId'", {
              instance: message
            });
            return message;
          };
          /**
           * Decodes a Player message from the specified reader or buffer, length delimited.
           * @function decodeDelimited
           * @memberof gameproto.Player
           * @static
           * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
           * @returns {gameproto.Player} Player
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */


          Player.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader)) reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
          };
          /**
           * Verifies a Player message.
           * @function verify
           * @memberof gameproto.Player
           * @static
           * @param {Object.<string,*>} message Plain object to verify
           * @returns {string|null} `null` if valid, otherwise the reason why it is not
           */


          Player.verify = function verify(message) {
            if (typeof message !== "object" || message === null) return "object expected";
            if (!$util.isInteger(message.life)) return "life: integer expected";
            if (!$util.isInteger(message.blue)) return "blue: integer expected";
            if (!$util.isInteger(message.attr)) return "attr: integer expected";
            if (!$util.isInteger(message.def)) return "def: integer expected";
            if (!$util.isInteger(message.speed)) return "speed: integer expected";
            if (!$util.isInteger(message.fist)) return "fist: integer expected";
            if (!$util.isInteger(message.leg)) return "leg: integer expected";
            if (!$util.isInteger(message.sword)) return "sword: integer expected";
            if (!$util.isInteger(message.knife)) return "knife: integer expected";
            if (!$util.isInteger(message.special)) return "special: integer expected";
            if (!$util.isInteger(message.hidden)) return "hidden: integer expected";
            if (!$util.isInteger(message.poison)) return "poison: integer expected";
            if (!$util.isInteger(message.medicine)) return "medicine: integer expected";
            if (!$util.isInteger(message.activeLife)) return "activeLife: integer expected";
            if (!$util.isInteger(message.activeBlue)) return "activeBlue: integer expected";
            if (!$util.isInteger(message.sequenceLife)) return "sequenceLife: integer expected";
            if (!$util.isInteger(message.sequenceBlue)) return "sequenceBlue: integer expected";
            if (!$util.isInteger(message.again)) return "again: integer expected";
            if (!$util.isInteger(message.lifeAddition)) return "lifeAddition: integer expected";
            if (!$util.isInteger(message.blueAddition)) return "blueAddition: integer expected";
            if (!$util.isInteger(message.harmAddition)) return "harmAddition: integer expected";
            if (!$util.isInteger(message.harmReduce)) return "harmReduce: integer expected";
            if (!$util.isInteger(message.crit)) return "crit: integer expected";
            if (!$util.isInteger(message.critHarm)) return "critHarm: integer expected";
            if (!$util.isInteger(message.continueAddition)) return "continueAddition: integer expected";
            if (!$util.isInteger(message.dodge)) return "dodge: integer expected";
            if (!$util.isInteger(message.fixedHarmAdd)) return "fixedHarmAdd: integer expected";
            if (!$util.isInteger(message.fixedHarmReduce)) return "fixedHarmReduce: integer expected";
            if (!$util.isInteger(message.hit)) return "hit: integer expected";
            if (!$util.isInteger(message.fixedBack)) return "fixedBack: integer expected";
            if (!$util.isInteger(message.back)) return "back: integer expected";
            if (!$util.isInteger(message.byAttrLife)) return "byAttrLife: integer expected";
            if (!$util.isInteger(message.fixedAttrLife)) return "fixedAttrLife: integer expected";
            if (!$util.isInteger(message.attrLife)) return "attrLife: integer expected";
            if (!$util.isInteger(message.defIgnore)) return "defIgnore: integer expected";
            if (!$util.isInteger(message.defPenetrate)) return "defPenetrate: integer expected";
            if (!$util.isInteger(message.endHarmAdd)) return "endHarmAdd: integer expected";
            if (!$util.isInteger(message.endHarmReduce)) return "endHarmReduce: integer expected";
            if (!$util.isInteger(message.critResistance)) return "critResistance: integer expected";
            if (!$util.isInteger(message.gatherResistance)) return "gatherResistance: integer expected";
            if (!$util.isInteger(message.attrAdd)) return "attrAdd: integer expected";
            if (!$util.isInteger(message.defAdd)) return "defAdd: integer expected";
            if (!$util.isInteger(message.speedAdd)) return "speedAdd: integer expected";
            if (!$util.isInteger(message.fistAdd)) return "fistAdd: integer expected";
            if (!$util.isInteger(message.legAdd)) return "legAdd: integer expected";
            if (!$util.isInteger(message.swordAdd)) return "swordAdd: integer expected";
            if (!$util.isInteger(message.knifeAdd)) return "knifeAdd: integer expected";
            if (!$util.isInteger(message.specialAdd)) return "specialAdd: integer expected";
            if (!$util.isInteger(message.hiddenAdd)) return "hiddenAdd: integer expected";
            if (!$util.isInteger(message.poisonAdd)) return "poisonAdd: integer expected";
            if (!$util.isInteger(message.medicineAdd)) return "medicineAdd: integer expected";
            if (!$util.isInteger(message.roleId)) return "roleId: integer expected";
            return null;
          };
          /**
           * Creates a Player message from a plain object. Also converts values to their respective internal types.
           * @function fromObject
           * @memberof gameproto.Player
           * @static
           * @param {Object.<string,*>} object Plain object
           * @returns {gameproto.Player} Player
           */


          Player.fromObject = function fromObject(object) {
            if (object instanceof $root.gameproto.Player) return object;
            var message = new $root.gameproto.Player();
            if (object.life != null) message.life = object.life | 0;
            if (object.blue != null) message.blue = object.blue | 0;
            if (object.attr != null) message.attr = object.attr | 0;
            if (object.def != null) message.def = object.def | 0;
            if (object.speed != null) message.speed = object.speed | 0;
            if (object.fist != null) message.fist = object.fist | 0;
            if (object.leg != null) message.leg = object.leg | 0;
            if (object.sword != null) message.sword = object.sword | 0;
            if (object.knife != null) message.knife = object.knife | 0;
            if (object.special != null) message.special = object.special | 0;
            if (object.hidden != null) message.hidden = object.hidden | 0;
            if (object.poison != null) message.poison = object.poison | 0;
            if (object.medicine != null) message.medicine = object.medicine | 0;
            if (object.activeLife != null) message.activeLife = object.activeLife | 0;
            if (object.activeBlue != null) message.activeBlue = object.activeBlue | 0;
            if (object.sequenceLife != null) message.sequenceLife = object.sequenceLife | 0;
            if (object.sequenceBlue != null) message.sequenceBlue = object.sequenceBlue | 0;
            if (object.again != null) message.again = object.again | 0;
            if (object.lifeAddition != null) message.lifeAddition = object.lifeAddition | 0;
            if (object.blueAddition != null) message.blueAddition = object.blueAddition | 0;
            if (object.harmAddition != null) message.harmAddition = object.harmAddition | 0;
            if (object.harmReduce != null) message.harmReduce = object.harmReduce | 0;
            if (object.crit != null) message.crit = object.crit | 0;
            if (object.critHarm != null) message.critHarm = object.critHarm | 0;
            if (object.continueAddition != null) message.continueAddition = object.continueAddition | 0;
            if (object.dodge != null) message.dodge = object.dodge | 0;
            if (object.fixedHarmAdd != null) message.fixedHarmAdd = object.fixedHarmAdd | 0;
            if (object.fixedHarmReduce != null) message.fixedHarmReduce = object.fixedHarmReduce | 0;
            if (object.hit != null) message.hit = object.hit | 0;
            if (object.fixedBack != null) message.fixedBack = object.fixedBack | 0;
            if (object.back != null) message.back = object.back | 0;
            if (object.byAttrLife != null) message.byAttrLife = object.byAttrLife | 0;
            if (object.fixedAttrLife != null) message.fixedAttrLife = object.fixedAttrLife | 0;
            if (object.attrLife != null) message.attrLife = object.attrLife | 0;
            if (object.defIgnore != null) message.defIgnore = object.defIgnore | 0;
            if (object.defPenetrate != null) message.defPenetrate = object.defPenetrate | 0;
            if (object.endHarmAdd != null) message.endHarmAdd = object.endHarmAdd | 0;
            if (object.endHarmReduce != null) message.endHarmReduce = object.endHarmReduce | 0;
            if (object.critResistance != null) message.critResistance = object.critResistance | 0;
            if (object.gatherResistance != null) message.gatherResistance = object.gatherResistance | 0;
            if (object.attrAdd != null) message.attrAdd = object.attrAdd | 0;
            if (object.defAdd != null) message.defAdd = object.defAdd | 0;
            if (object.speedAdd != null) message.speedAdd = object.speedAdd | 0;
            if (object.fistAdd != null) message.fistAdd = object.fistAdd | 0;
            if (object.legAdd != null) message.legAdd = object.legAdd | 0;
            if (object.swordAdd != null) message.swordAdd = object.swordAdd | 0;
            if (object.knifeAdd != null) message.knifeAdd = object.knifeAdd | 0;
            if (object.specialAdd != null) message.specialAdd = object.specialAdd | 0;
            if (object.hiddenAdd != null) message.hiddenAdd = object.hiddenAdd | 0;
            if (object.poisonAdd != null) message.poisonAdd = object.poisonAdd | 0;
            if (object.medicineAdd != null) message.medicineAdd = object.medicineAdd | 0;
            if (object.roleId != null) message.roleId = object.roleId | 0;
            return message;
          };
          /**
           * Creates a plain object from a Player message. Also converts values to other types if specified.
           * @function toObject
           * @memberof gameproto.Player
           * @static
           * @param {gameproto.Player} message Player
           * @param {$protobuf.IConversionOptions} [options] Conversion options
           * @returns {Object.<string,*>} Plain object
           */


          Player.toObject = function toObject(message, options) {
            if (!options) options = {};
            var object = {};

            if (options.defaults) {
              object.life = 0;
              object.blue = 0;
              object.attr = 0;
              object.def = 0;
              object.speed = 0;
              object.fist = 0;
              object.leg = 0;
              object.sword = 0;
              object.knife = 0;
              object.special = 0;
              object.hidden = 0;
              object.poison = 0;
              object.medicine = 0;
              object.activeLife = 0;
              object.activeBlue = 0;
              object.sequenceLife = 0;
              object.sequenceBlue = 0;
              object.again = 0;
              object.lifeAddition = 0;
              object.blueAddition = 0;
              object.harmAddition = 0;
              object.harmReduce = 0;
              object.crit = 0;
              object.critHarm = 0;
              object.continueAddition = 0;
              object.dodge = 0;
              object.fixedHarmAdd = 0;
              object.fixedHarmReduce = 0;
              object.hit = 0;
              object.fixedBack = 0;
              object.back = 0;
              object.byAttrLife = 0;
              object.fixedAttrLife = 0;
              object.attrLife = 0;
              object.defIgnore = 0;
              object.defPenetrate = 0;
              object.endHarmAdd = 0;
              object.endHarmReduce = 0;
              object.critResistance = 0;
              object.gatherResistance = 0;
              object.attrAdd = 0;
              object.defAdd = 0;
              object.speedAdd = 0;
              object.fistAdd = 0;
              object.legAdd = 0;
              object.swordAdd = 0;
              object.knifeAdd = 0;
              object.specialAdd = 0;
              object.hiddenAdd = 0;
              object.poisonAdd = 0;
              object.medicineAdd = 0;
              object.roleId = 0;
            }

            if (message.life != null && message.hasOwnProperty("life")) object.life = message.life;
            if (message.blue != null && message.hasOwnProperty("blue")) object.blue = message.blue;
            if (message.attr != null && message.hasOwnProperty("attr")) object.attr = message.attr;
            if (message.def != null && message.hasOwnProperty("def")) object.def = message.def;
            if (message.speed != null && message.hasOwnProperty("speed")) object.speed = message.speed;
            if (message.fist != null && message.hasOwnProperty("fist")) object.fist = message.fist;
            if (message.leg != null && message.hasOwnProperty("leg")) object.leg = message.leg;
            if (message.sword != null && message.hasOwnProperty("sword")) object.sword = message.sword;
            if (message.knife != null && message.hasOwnProperty("knife")) object.knife = message.knife;
            if (message.special != null && message.hasOwnProperty("special")) object.special = message.special;
            if (message.hidden != null && message.hasOwnProperty("hidden")) object.hidden = message.hidden;
            if (message.poison != null && message.hasOwnProperty("poison")) object.poison = message.poison;
            if (message.medicine != null && message.hasOwnProperty("medicine")) object.medicine = message.medicine;
            if (message.activeLife != null && message.hasOwnProperty("activeLife")) object.activeLife = message.activeLife;
            if (message.activeBlue != null && message.hasOwnProperty("activeBlue")) object.activeBlue = message.activeBlue;
            if (message.sequenceLife != null && message.hasOwnProperty("sequenceLife")) object.sequenceLife = message.sequenceLife;
            if (message.sequenceBlue != null && message.hasOwnProperty("sequenceBlue")) object.sequenceBlue = message.sequenceBlue;
            if (message.again != null && message.hasOwnProperty("again")) object.again = message.again;
            if (message.lifeAddition != null && message.hasOwnProperty("lifeAddition")) object.lifeAddition = message.lifeAddition;
            if (message.blueAddition != null && message.hasOwnProperty("blueAddition")) object.blueAddition = message.blueAddition;
            if (message.harmAddition != null && message.hasOwnProperty("harmAddition")) object.harmAddition = message.harmAddition;
            if (message.harmReduce != null && message.hasOwnProperty("harmReduce")) object.harmReduce = message.harmReduce;
            if (message.crit != null && message.hasOwnProperty("crit")) object.crit = message.crit;
            if (message.critHarm != null && message.hasOwnProperty("critHarm")) object.critHarm = message.critHarm;
            if (message.continueAddition != null && message.hasOwnProperty("continueAddition")) object.continueAddition = message.continueAddition;
            if (message.dodge != null && message.hasOwnProperty("dodge")) object.dodge = message.dodge;
            if (message.fixedHarmAdd != null && message.hasOwnProperty("fixedHarmAdd")) object.fixedHarmAdd = message.fixedHarmAdd;
            if (message.fixedHarmReduce != null && message.hasOwnProperty("fixedHarmReduce")) object.fixedHarmReduce = message.fixedHarmReduce;
            if (message.hit != null && message.hasOwnProperty("hit")) object.hit = message.hit;
            if (message.fixedBack != null && message.hasOwnProperty("fixedBack")) object.fixedBack = message.fixedBack;
            if (message.back != null && message.hasOwnProperty("back")) object.back = message.back;
            if (message.byAttrLife != null && message.hasOwnProperty("byAttrLife")) object.byAttrLife = message.byAttrLife;
            if (message.fixedAttrLife != null && message.hasOwnProperty("fixedAttrLife")) object.fixedAttrLife = message.fixedAttrLife;
            if (message.attrLife != null && message.hasOwnProperty("attrLife")) object.attrLife = message.attrLife;
            if (message.defIgnore != null && message.hasOwnProperty("defIgnore")) object.defIgnore = message.defIgnore;
            if (message.defPenetrate != null && message.hasOwnProperty("defPenetrate")) object.defPenetrate = message.defPenetrate;
            if (message.endHarmAdd != null && message.hasOwnProperty("endHarmAdd")) object.endHarmAdd = message.endHarmAdd;
            if (message.endHarmReduce != null && message.hasOwnProperty("endHarmReduce")) object.endHarmReduce = message.endHarmReduce;
            if (message.critResistance != null && message.hasOwnProperty("critResistance")) object.critResistance = message.critResistance;
            if (message.gatherResistance != null && message.hasOwnProperty("gatherResistance")) object.gatherResistance = message.gatherResistance;
            if (message.attrAdd != null && message.hasOwnProperty("attrAdd")) object.attrAdd = message.attrAdd;
            if (message.defAdd != null && message.hasOwnProperty("defAdd")) object.defAdd = message.defAdd;
            if (message.speedAdd != null && message.hasOwnProperty("speedAdd")) object.speedAdd = message.speedAdd;
            if (message.fistAdd != null && message.hasOwnProperty("fistAdd")) object.fistAdd = message.fistAdd;
            if (message.legAdd != null && message.hasOwnProperty("legAdd")) object.legAdd = message.legAdd;
            if (message.swordAdd != null && message.hasOwnProperty("swordAdd")) object.swordAdd = message.swordAdd;
            if (message.knifeAdd != null && message.hasOwnProperty("knifeAdd")) object.knifeAdd = message.knifeAdd;
            if (message.specialAdd != null && message.hasOwnProperty("specialAdd")) object.specialAdd = message.specialAdd;
            if (message.hiddenAdd != null && message.hasOwnProperty("hiddenAdd")) object.hiddenAdd = message.hiddenAdd;
            if (message.poisonAdd != null && message.hasOwnProperty("poisonAdd")) object.poisonAdd = message.poisonAdd;
            if (message.medicineAdd != null && message.hasOwnProperty("medicineAdd")) object.medicineAdd = message.medicineAdd;
            if (message.roleId != null && message.hasOwnProperty("roleId")) object.roleId = message.roleId;
            return object;
          };
          /**
           * Converts this Player to JSON.
           * @function toJSON
           * @memberof gameproto.Player
           * @instance
           * @returns {Object.<string,*>} JSON object
           */


          Player.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
          };

          return Player;
        }();

        gameproto.Skill = function () {
          /**
           * Properties of a Skill.
           * @memberof gameproto
           * @interface ISkill
           * @property {number} skillId Skill skillId
           * @property {number} level Skill level
           */

          /**
           * Constructs a new Skill.
           * @memberof gameproto
           * @classdesc Represents a Skill.
           * @implements ISkill
           * @constructor
           * @param {gameproto.ISkill=} [properties] Properties to set
           */
          function Skill(properties) {
            if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
          }
          /**
           * Skill skillId.
           * @member {number} skillId
           * @memberof gameproto.Skill
           * @instance
           */


          Skill.prototype.skillId = 0;
          /**
           * Skill level.
           * @member {number} level
           * @memberof gameproto.Skill
           * @instance
           */

          Skill.prototype.level = 0;
          /**
           * Creates a new Skill instance using the specified properties.
           * @function create
           * @memberof gameproto.Skill
           * @static
           * @param {gameproto.ISkill=} [properties] Properties to set
           * @returns {gameproto.Skill} Skill instance
           */

          Skill.create = function create(properties) {
            return new Skill(properties);
          };
          /**
           * Encodes the specified Skill message. Does not implicitly {@link gameproto.Skill.verify|verify} messages.
           * @function encode
           * @memberof gameproto.Skill
           * @static
           * @param {gameproto.ISkill} message Skill message or plain object to encode
           * @param {$protobuf.Writer} [writer] Writer to encode to
           * @returns {$protobuf.Writer} Writer
           */


          Skill.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            writer.uint32(
            /* id 1, wireType 0 =*/
            8).int32(message.skillId);
            writer.uint32(
            /* id 2, wireType 0 =*/
            16).int32(message.level);
            return writer;
          };
          /**
           * Encodes the specified Skill message, length delimited. Does not implicitly {@link gameproto.Skill.verify|verify} messages.
           * @function encodeDelimited
           * @memberof gameproto.Skill
           * @static
           * @param {gameproto.ISkill} message Skill message or plain object to encode
           * @param {$protobuf.Writer} [writer] Writer to encode to
           * @returns {$protobuf.Writer} Writer
           */


          Skill.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
          };
          /**
           * Decodes a Skill message from the specified reader or buffer.
           * @function decode
           * @memberof gameproto.Skill
           * @static
           * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
           * @param {number} [length] Message length if known beforehand
           * @returns {gameproto.Skill} Skill
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */


          Skill.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.gameproto.Skill();

            while (reader.pos < end) {
              var tag = reader.uint32();

              switch (tag >>> 3) {
                case 1:
                  message.skillId = reader.int32();
                  break;

                case 2:
                  message.level = reader.int32();
                  break;

                default:
                  reader.skipType(tag & 7);
                  break;
              }
            }

            if (!message.hasOwnProperty("skillId")) throw $util.ProtocolError("missing required 'skillId'", {
              instance: message
            });
            if (!message.hasOwnProperty("level")) throw $util.ProtocolError("missing required 'level'", {
              instance: message
            });
            return message;
          };
          /**
           * Decodes a Skill message from the specified reader or buffer, length delimited.
           * @function decodeDelimited
           * @memberof gameproto.Skill
           * @static
           * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
           * @returns {gameproto.Skill} Skill
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */


          Skill.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader)) reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
          };
          /**
           * Verifies a Skill message.
           * @function verify
           * @memberof gameproto.Skill
           * @static
           * @param {Object.<string,*>} message Plain object to verify
           * @returns {string|null} `null` if valid, otherwise the reason why it is not
           */


          Skill.verify = function verify(message) {
            if (typeof message !== "object" || message === null) return "object expected";
            if (!$util.isInteger(message.skillId)) return "skillId: integer expected";
            if (!$util.isInteger(message.level)) return "level: integer expected";
            return null;
          };
          /**
           * Creates a Skill message from a plain object. Also converts values to their respective internal types.
           * @function fromObject
           * @memberof gameproto.Skill
           * @static
           * @param {Object.<string,*>} object Plain object
           * @returns {gameproto.Skill} Skill
           */


          Skill.fromObject = function fromObject(object) {
            if (object instanceof $root.gameproto.Skill) return object;
            var message = new $root.gameproto.Skill();
            if (object.skillId != null) message.skillId = object.skillId | 0;
            if (object.level != null) message.level = object.level | 0;
            return message;
          };
          /**
           * Creates a plain object from a Skill message. Also converts values to other types if specified.
           * @function toObject
           * @memberof gameproto.Skill
           * @static
           * @param {gameproto.Skill} message Skill
           * @param {$protobuf.IConversionOptions} [options] Conversion options
           * @returns {Object.<string,*>} Plain object
           */


          Skill.toObject = function toObject(message, options) {
            if (!options) options = {};
            var object = {};

            if (options.defaults) {
              object.skillId = 0;
              object.level = 0;
            }

            if (message.skillId != null && message.hasOwnProperty("skillId")) object.skillId = message.skillId;
            if (message.level != null && message.hasOwnProperty("level")) object.level = message.level;
            return object;
          };
          /**
           * Converts this Skill to JSON.
           * @function toJSON
           * @memberof gameproto.Skill
           * @instance
           * @returns {Object.<string,*>} JSON object
           */


          Skill.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
          };

          return Skill;
        }();

        gameproto.CreateRequest = function () {
          /**
           * Properties of a CreateRequest.
           * @memberof gameproto
           * @interface ICreateRequest
           * @property {number|Long} playerId CreateRequest playerId
           * @property {number} roleId CreateRequest roleId
           * @property {string} playerName CreateRequest playerName
           * @property {string|null} [picture] CreateRequest picture
           */

          /**
           * Constructs a new CreateRequest.
           * @memberof gameproto
           * @classdesc Represents a CreateRequest.
           * @implements ICreateRequest
           * @constructor
           * @param {gameproto.ICreateRequest=} [properties] Properties to set
           */
          function CreateRequest(properties) {
            if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
          }
          /**
           * CreateRequest playerId.
           * @member {number|Long} playerId
           * @memberof gameproto.CreateRequest
           * @instance
           */


          CreateRequest.prototype.playerId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
          /**
           * CreateRequest roleId.
           * @member {number} roleId
           * @memberof gameproto.CreateRequest
           * @instance
           */

          CreateRequest.prototype.roleId = 0;
          /**
           * CreateRequest playerName.
           * @member {string} playerName
           * @memberof gameproto.CreateRequest
           * @instance
           */

          CreateRequest.prototype.playerName = "";
          /**
           * CreateRequest picture.
           * @member {string} picture
           * @memberof gameproto.CreateRequest
           * @instance
           */

          CreateRequest.prototype.picture = "";
          /**
           * Creates a new CreateRequest instance using the specified properties.
           * @function create
           * @memberof gameproto.CreateRequest
           * @static
           * @param {gameproto.ICreateRequest=} [properties] Properties to set
           * @returns {gameproto.CreateRequest} CreateRequest instance
           */

          CreateRequest.create = function create(properties) {
            return new CreateRequest(properties);
          };
          /**
           * Encodes the specified CreateRequest message. Does not implicitly {@link gameproto.CreateRequest.verify|verify} messages.
           * @function encode
           * @memberof gameproto.CreateRequest
           * @static
           * @param {gameproto.ICreateRequest} message CreateRequest message or plain object to encode
           * @param {$protobuf.Writer} [writer] Writer to encode to
           * @returns {$protobuf.Writer} Writer
           */


          CreateRequest.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            writer.uint32(
            /* id 1, wireType 0 =*/
            8).int64(message.playerId);
            writer.uint32(
            /* id 2, wireType 0 =*/
            16).int32(message.roleId);
            writer.uint32(
            /* id 3, wireType 2 =*/
            26).string(message.playerName);
            if (message.picture != null && message.hasOwnProperty("picture")) writer.uint32(
            /* id 4, wireType 2 =*/
            34).string(message.picture);
            return writer;
          };
          /**
           * Encodes the specified CreateRequest message, length delimited. Does not implicitly {@link gameproto.CreateRequest.verify|verify} messages.
           * @function encodeDelimited
           * @memberof gameproto.CreateRequest
           * @static
           * @param {gameproto.ICreateRequest} message CreateRequest message or plain object to encode
           * @param {$protobuf.Writer} [writer] Writer to encode to
           * @returns {$protobuf.Writer} Writer
           */


          CreateRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
          };
          /**
           * Decodes a CreateRequest message from the specified reader or buffer.
           * @function decode
           * @memberof gameproto.CreateRequest
           * @static
           * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
           * @param {number} [length] Message length if known beforehand
           * @returns {gameproto.CreateRequest} CreateRequest
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */


          CreateRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.gameproto.CreateRequest();

            while (reader.pos < end) {
              var tag = reader.uint32();

              switch (tag >>> 3) {
                case 1:
                  message.playerId = reader.int64();
                  break;

                case 2:
                  message.roleId = reader.int32();
                  break;

                case 3:
                  message.playerName = reader.string();
                  break;

                case 4:
                  message.picture = reader.string();
                  break;

                default:
                  reader.skipType(tag & 7);
                  break;
              }
            }

            if (!message.hasOwnProperty("playerId")) throw $util.ProtocolError("missing required 'playerId'", {
              instance: message
            });
            if (!message.hasOwnProperty("roleId")) throw $util.ProtocolError("missing required 'roleId'", {
              instance: message
            });
            if (!message.hasOwnProperty("playerName")) throw $util.ProtocolError("missing required 'playerName'", {
              instance: message
            });
            return message;
          };
          /**
           * Decodes a CreateRequest message from the specified reader or buffer, length delimited.
           * @function decodeDelimited
           * @memberof gameproto.CreateRequest
           * @static
           * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
           * @returns {gameproto.CreateRequest} CreateRequest
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */


          CreateRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader)) reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
          };
          /**
           * Verifies a CreateRequest message.
           * @function verify
           * @memberof gameproto.CreateRequest
           * @static
           * @param {Object.<string,*>} message Plain object to verify
           * @returns {string|null} `null` if valid, otherwise the reason why it is not
           */


          CreateRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null) return "object expected";
            if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high))) return "playerId: integer|Long expected";
            if (!$util.isInteger(message.roleId)) return "roleId: integer expected";
            if (!$util.isString(message.playerName)) return "playerName: string expected";
            if (message.picture != null && message.hasOwnProperty("picture")) if (!$util.isString(message.picture)) return "picture: string expected";
            return null;
          };
          /**
           * Creates a CreateRequest message from a plain object. Also converts values to their respective internal types.
           * @function fromObject
           * @memberof gameproto.CreateRequest
           * @static
           * @param {Object.<string,*>} object Plain object
           * @returns {gameproto.CreateRequest} CreateRequest
           */


          CreateRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.gameproto.CreateRequest) return object;
            var message = new $root.gameproto.CreateRequest();
            if (object.playerId != null) if ($util.Long) (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = false;else if (typeof object.playerId === "string") message.playerId = parseInt(object.playerId, 10);else if (typeof object.playerId === "number") message.playerId = object.playerId;else if (typeof object.playerId === "object") message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber();
            if (object.roleId != null) message.roleId = object.roleId | 0;
            if (object.playerName != null) message.playerName = String(object.playerName);
            if (object.picture != null) message.picture = String(object.picture);
            return message;
          };
          /**
           * Creates a plain object from a CreateRequest message. Also converts values to other types if specified.
           * @function toObject
           * @memberof gameproto.CreateRequest
           * @static
           * @param {gameproto.CreateRequest} message CreateRequest
           * @param {$protobuf.IConversionOptions} [options] Conversion options
           * @returns {Object.<string,*>} Plain object
           */


          CreateRequest.toObject = function toObject(message, options) {
            if (!options) options = {};
            var object = {};

            if (options.defaults) {
              if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.playerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
              } else object.playerId = options.longs === String ? "0" : 0;

              object.roleId = 0;
              object.playerName = "";
              object.picture = "";
            }

            if (message.playerId != null && message.hasOwnProperty("playerId")) if (typeof message.playerId === "number") object.playerId = options.longs === String ? String(message.playerId) : message.playerId;else object.playerId = options.longs === String ? $util.Long.prototype.toString.call(message.playerId) : options.longs === Number ? new $util.LongBits(message.playerId.low >>> 0, message.playerId.high >>> 0).toNumber() : message.playerId;
            if (message.roleId != null && message.hasOwnProperty("roleId")) object.roleId = message.roleId;
            if (message.playerName != null && message.hasOwnProperty("playerName")) object.playerName = message.playerName;
            if (message.picture != null && message.hasOwnProperty("picture")) object.picture = message.picture;
            return object;
          };
          /**
           * Converts this CreateRequest to JSON.
           * @function toJSON
           * @memberof gameproto.CreateRequest
           * @instance
           * @returns {Object.<string,*>} JSON object
           */


          CreateRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
          };

          return CreateRequest;
        }();

        gameproto.CreateResult = function () {
          /**
           * Properties of a CreateResult.
           * @memberof gameproto
           * @interface ICreateResult
           * @property {Array.<number>|null} [skillId] CreateResult skillId
           * @property {Array.<number>|null} [activeSkillId] CreateResult activeSkillId
           * @property {number} skillFlushCount CreateResult skillFlushCount
           * @property {number} activeSkillFlushCount CreateResult activeSkillFlushCount
           * @property {Array.<number>|null} [entryId] CreateResult entryId
           * @property {number} isFirstCreate CreateResult isFirstCreate
           */

          /**
           * Constructs a new CreateResult.
           * @memberof gameproto
           * @classdesc Represents a CreateResult.
           * @implements ICreateResult
           * @constructor
           * @param {gameproto.ICreateResult=} [properties] Properties to set
           */
          function CreateResult(properties) {
            this.skillId = [];
            this.activeSkillId = [];
            this.entryId = [];
            if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
          }
          /**
           * CreateResult skillId.
           * @member {Array.<number>} skillId
           * @memberof gameproto.CreateResult
           * @instance
           */


          CreateResult.prototype.skillId = $util.emptyArray;
          /**
           * CreateResult activeSkillId.
           * @member {Array.<number>} activeSkillId
           * @memberof gameproto.CreateResult
           * @instance
           */

          CreateResult.prototype.activeSkillId = $util.emptyArray;
          /**
           * CreateResult skillFlushCount.
           * @member {number} skillFlushCount
           * @memberof gameproto.CreateResult
           * @instance
           */

          CreateResult.prototype.skillFlushCount = 0;
          /**
           * CreateResult activeSkillFlushCount.
           * @member {number} activeSkillFlushCount
           * @memberof gameproto.CreateResult
           * @instance
           */

          CreateResult.prototype.activeSkillFlushCount = 0;
          /**
           * CreateResult entryId.
           * @member {Array.<number>} entryId
           * @memberof gameproto.CreateResult
           * @instance
           */

          CreateResult.prototype.entryId = $util.emptyArray;
          /**
           * CreateResult isFirstCreate.
           * @member {number} isFirstCreate
           * @memberof gameproto.CreateResult
           * @instance
           */

          CreateResult.prototype.isFirstCreate = 0;
          /**
           * Creates a new CreateResult instance using the specified properties.
           * @function create
           * @memberof gameproto.CreateResult
           * @static
           * @param {gameproto.ICreateResult=} [properties] Properties to set
           * @returns {gameproto.CreateResult} CreateResult instance
           */

          CreateResult.create = function create(properties) {
            return new CreateResult(properties);
          };
          /**
           * Encodes the specified CreateResult message. Does not implicitly {@link gameproto.CreateResult.verify|verify} messages.
           * @function encode
           * @memberof gameproto.CreateResult
           * @static
           * @param {gameproto.ICreateResult} message CreateResult message or plain object to encode
           * @param {$protobuf.Writer} [writer] Writer to encode to
           * @returns {$protobuf.Writer} Writer
           */


          CreateResult.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            if (message.skillId != null && message.skillId.length) for (var i = 0; i < message.skillId.length; ++i) writer.uint32(
            /* id 1, wireType 0 =*/
            8).int32(message.skillId[i]);
            if (message.activeSkillId != null && message.activeSkillId.length) for (var i = 0; i < message.activeSkillId.length; ++i) writer.uint32(
            /* id 2, wireType 0 =*/
            16).int32(message.activeSkillId[i]);
            writer.uint32(
            /* id 3, wireType 0 =*/
            24).int32(message.skillFlushCount);
            writer.uint32(
            /* id 4, wireType 0 =*/
            32).int32(message.activeSkillFlushCount);
            if (message.entryId != null && message.entryId.length) for (var i = 0; i < message.entryId.length; ++i) writer.uint32(
            /* id 6, wireType 0 =*/
            48).int32(message.entryId[i]);
            writer.uint32(
            /* id 7, wireType 0 =*/
            56).int32(message.isFirstCreate);
            return writer;
          };
          /**
           * Encodes the specified CreateResult message, length delimited. Does not implicitly {@link gameproto.CreateResult.verify|verify} messages.
           * @function encodeDelimited
           * @memberof gameproto.CreateResult
           * @static
           * @param {gameproto.ICreateResult} message CreateResult message or plain object to encode
           * @param {$protobuf.Writer} [writer] Writer to encode to
           * @returns {$protobuf.Writer} Writer
           */


          CreateResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
          };
          /**
           * Decodes a CreateResult message from the specified reader or buffer.
           * @function decode
           * @memberof gameproto.CreateResult
           * @static
           * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
           * @param {number} [length] Message length if known beforehand
           * @returns {gameproto.CreateResult} CreateResult
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */


          CreateResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.gameproto.CreateResult();

            while (reader.pos < end) {
              var tag = reader.uint32();

              switch (tag >>> 3) {
                case 1:
                  if (!(message.skillId && message.skillId.length)) message.skillId = [];

                  if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;

                    while (reader.pos < end2) message.skillId.push(reader.int32());
                  } else message.skillId.push(reader.int32());

                  break;

                case 2:
                  if (!(message.activeSkillId && message.activeSkillId.length)) message.activeSkillId = [];

                  if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;

                    while (reader.pos < end2) message.activeSkillId.push(reader.int32());
                  } else message.activeSkillId.push(reader.int32());

                  break;

                case 3:
                  message.skillFlushCount = reader.int32();
                  break;

                case 4:
                  message.activeSkillFlushCount = reader.int32();
                  break;

                case 6:
                  if (!(message.entryId && message.entryId.length)) message.entryId = [];

                  if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;

                    while (reader.pos < end2) message.entryId.push(reader.int32());
                  } else message.entryId.push(reader.int32());

                  break;

                case 7:
                  message.isFirstCreate = reader.int32();
                  break;

                default:
                  reader.skipType(tag & 7);
                  break;
              }
            }

            if (!message.hasOwnProperty("skillFlushCount")) throw $util.ProtocolError("missing required 'skillFlushCount'", {
              instance: message
            });
            if (!message.hasOwnProperty("activeSkillFlushCount")) throw $util.ProtocolError("missing required 'activeSkillFlushCount'", {
              instance: message
            });
            if (!message.hasOwnProperty("isFirstCreate")) throw $util.ProtocolError("missing required 'isFirstCreate'", {
              instance: message
            });
            return message;
          };
          /**
           * Decodes a CreateResult message from the specified reader or buffer, length delimited.
           * @function decodeDelimited
           * @memberof gameproto.CreateResult
           * @static
           * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
           * @returns {gameproto.CreateResult} CreateResult
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */


          CreateResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader)) reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
          };
          /**
           * Verifies a CreateResult message.
           * @function verify
           * @memberof gameproto.CreateResult
           * @static
           * @param {Object.<string,*>} message Plain object to verify
           * @returns {string|null} `null` if valid, otherwise the reason why it is not
           */


          CreateResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null) return "object expected";

            if (message.skillId != null && message.hasOwnProperty("skillId")) {
              if (!Array.isArray(message.skillId)) return "skillId: array expected";

              for (var i = 0; i < message.skillId.length; ++i) if (!$util.isInteger(message.skillId[i])) return "skillId: integer[] expected";
            }

            if (message.activeSkillId != null && message.hasOwnProperty("activeSkillId")) {
              if (!Array.isArray(message.activeSkillId)) return "activeSkillId: array expected";

              for (var i = 0; i < message.activeSkillId.length; ++i) if (!$util.isInteger(message.activeSkillId[i])) return "activeSkillId: integer[] expected";
            }

            if (!$util.isInteger(message.skillFlushCount)) return "skillFlushCount: integer expected";
            if (!$util.isInteger(message.activeSkillFlushCount)) return "activeSkillFlushCount: integer expected";

            if (message.entryId != null && message.hasOwnProperty("entryId")) {
              if (!Array.isArray(message.entryId)) return "entryId: array expected";

              for (var i = 0; i < message.entryId.length; ++i) if (!$util.isInteger(message.entryId[i])) return "entryId: integer[] expected";
            }

            if (!$util.isInteger(message.isFirstCreate)) return "isFirstCreate: integer expected";
            return null;
          };
          /**
           * Creates a CreateResult message from a plain object. Also converts values to their respective internal types.
           * @function fromObject
           * @memberof gameproto.CreateResult
           * @static
           * @param {Object.<string,*>} object Plain object
           * @returns {gameproto.CreateResult} CreateResult
           */


          CreateResult.fromObject = function fromObject(object) {
            if (object instanceof $root.gameproto.CreateResult) return object;
            var message = new $root.gameproto.CreateResult();

            if (object.skillId) {
              if (!Array.isArray(object.skillId)) throw TypeError(".gameproto.CreateResult.skillId: array expected");
              message.skillId = [];

              for (var i = 0; i < object.skillId.length; ++i) message.skillId[i] = object.skillId[i] | 0;
            }

            if (object.activeSkillId) {
              if (!Array.isArray(object.activeSkillId)) throw TypeError(".gameproto.CreateResult.activeSkillId: array expected");
              message.activeSkillId = [];

              for (var i = 0; i < object.activeSkillId.length; ++i) message.activeSkillId[i] = object.activeSkillId[i] | 0;
            }

            if (object.skillFlushCount != null) message.skillFlushCount = object.skillFlushCount | 0;
            if (object.activeSkillFlushCount != null) message.activeSkillFlushCount = object.activeSkillFlushCount | 0;

            if (object.entryId) {
              if (!Array.isArray(object.entryId)) throw TypeError(".gameproto.CreateResult.entryId: array expected");
              message.entryId = [];

              for (var i = 0; i < object.entryId.length; ++i) message.entryId[i] = object.entryId[i] | 0;
            }

            if (object.isFirstCreate != null) message.isFirstCreate = object.isFirstCreate | 0;
            return message;
          };
          /**
           * Creates a plain object from a CreateResult message. Also converts values to other types if specified.
           * @function toObject
           * @memberof gameproto.CreateResult
           * @static
           * @param {gameproto.CreateResult} message CreateResult
           * @param {$protobuf.IConversionOptions} [options] Conversion options
           * @returns {Object.<string,*>} Plain object
           */


          CreateResult.toObject = function toObject(message, options) {
            if (!options) options = {};
            var object = {};

            if (options.arrays || options.defaults) {
              object.skillId = [];
              object.activeSkillId = [];
              object.entryId = [];
            }

            if (options.defaults) {
              object.skillFlushCount = 0;
              object.activeSkillFlushCount = 0;
              object.isFirstCreate = 0;
            }

            if (message.skillId && message.skillId.length) {
              object.skillId = [];

              for (var j = 0; j < message.skillId.length; ++j) object.skillId[j] = message.skillId[j];
            }

            if (message.activeSkillId && message.activeSkillId.length) {
              object.activeSkillId = [];

              for (var j = 0; j < message.activeSkillId.length; ++j) object.activeSkillId[j] = message.activeSkillId[j];
            }

            if (message.skillFlushCount != null && message.hasOwnProperty("skillFlushCount")) object.skillFlushCount = message.skillFlushCount;
            if (message.activeSkillFlushCount != null && message.hasOwnProperty("activeSkillFlushCount")) object.activeSkillFlushCount = message.activeSkillFlushCount;

            if (message.entryId && message.entryId.length) {
              object.entryId = [];

              for (var j = 0; j < message.entryId.length; ++j) object.entryId[j] = message.entryId[j];
            }

            if (message.isFirstCreate != null && message.hasOwnProperty("isFirstCreate")) object.isFirstCreate = message.isFirstCreate;
            return object;
          };
          /**
           * Converts this CreateResult to JSON.
           * @function toJSON
           * @memberof gameproto.CreateResult
           * @instance
           * @returns {Object.<string,*>} JSON object
           */


          CreateResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
          };

          return CreateResult;
        }();

        gameproto.FlushSkillRequest = function () {
          /**
           * Properties of a FlushSkillRequest.
           * @memberof gameproto
           * @interface IFlushSkillRequest
           * @property {number|Long} playerId FlushSkillRequest playerId
           * @property {number} type FlushSkillRequest type
           */

          /**
           * Constructs a new FlushSkillRequest.
           * @memberof gameproto
           * @classdesc Represents a FlushSkillRequest.
           * @implements IFlushSkillRequest
           * @constructor
           * @param {gameproto.IFlushSkillRequest=} [properties] Properties to set
           */
          function FlushSkillRequest(properties) {
            if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
          }
          /**
           * FlushSkillRequest playerId.
           * @member {number|Long} playerId
           * @memberof gameproto.FlushSkillRequest
           * @instance
           */


          FlushSkillRequest.prototype.playerId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
          /**
           * FlushSkillRequest type.
           * @member {number} type
           * @memberof gameproto.FlushSkillRequest
           * @instance
           */

          FlushSkillRequest.prototype.type = 0;
          /**
           * Creates a new FlushSkillRequest instance using the specified properties.
           * @function create
           * @memberof gameproto.FlushSkillRequest
           * @static
           * @param {gameproto.IFlushSkillRequest=} [properties] Properties to set
           * @returns {gameproto.FlushSkillRequest} FlushSkillRequest instance
           */

          FlushSkillRequest.create = function create(properties) {
            return new FlushSkillRequest(properties);
          };
          /**
           * Encodes the specified FlushSkillRequest message. Does not implicitly {@link gameproto.FlushSkillRequest.verify|verify} messages.
           * @function encode
           * @memberof gameproto.FlushSkillRequest
           * @static
           * @param {gameproto.IFlushSkillRequest} message FlushSkillRequest message or plain object to encode
           * @param {$protobuf.Writer} [writer] Writer to encode to
           * @returns {$protobuf.Writer} Writer
           */


          FlushSkillRequest.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            writer.uint32(
            /* id 1, wireType 0 =*/
            8).int64(message.playerId);
            writer.uint32(
            /* id 2, wireType 0 =*/
            16).int32(message.type);
            return writer;
          };
          /**
           * Encodes the specified FlushSkillRequest message, length delimited. Does not implicitly {@link gameproto.FlushSkillRequest.verify|verify} messages.
           * @function encodeDelimited
           * @memberof gameproto.FlushSkillRequest
           * @static
           * @param {gameproto.IFlushSkillRequest} message FlushSkillRequest message or plain object to encode
           * @param {$protobuf.Writer} [writer] Writer to encode to
           * @returns {$protobuf.Writer} Writer
           */


          FlushSkillRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
          };
          /**
           * Decodes a FlushSkillRequest message from the specified reader or buffer.
           * @function decode
           * @memberof gameproto.FlushSkillRequest
           * @static
           * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
           * @param {number} [length] Message length if known beforehand
           * @returns {gameproto.FlushSkillRequest} FlushSkillRequest
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */


          FlushSkillRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.gameproto.FlushSkillRequest();

            while (reader.pos < end) {
              var tag = reader.uint32();

              switch (tag >>> 3) {
                case 1:
                  message.playerId = reader.int64();
                  break;

                case 2:
                  message.type = reader.int32();
                  break;

                default:
                  reader.skipType(tag & 7);
                  break;
              }
            }

            if (!message.hasOwnProperty("playerId")) throw $util.ProtocolError("missing required 'playerId'", {
              instance: message
            });
            if (!message.hasOwnProperty("type")) throw $util.ProtocolError("missing required 'type'", {
              instance: message
            });
            return message;
          };
          /**
           * Decodes a FlushSkillRequest message from the specified reader or buffer, length delimited.
           * @function decodeDelimited
           * @memberof gameproto.FlushSkillRequest
           * @static
           * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
           * @returns {gameproto.FlushSkillRequest} FlushSkillRequest
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */


          FlushSkillRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader)) reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
          };
          /**
           * Verifies a FlushSkillRequest message.
           * @function verify
           * @memberof gameproto.FlushSkillRequest
           * @static
           * @param {Object.<string,*>} message Plain object to verify
           * @returns {string|null} `null` if valid, otherwise the reason why it is not
           */


          FlushSkillRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null) return "object expected";
            if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high))) return "playerId: integer|Long expected";
            if (!$util.isInteger(message.type)) return "type: integer expected";
            return null;
          };
          /**
           * Creates a FlushSkillRequest message from a plain object. Also converts values to their respective internal types.
           * @function fromObject
           * @memberof gameproto.FlushSkillRequest
           * @static
           * @param {Object.<string,*>} object Plain object
           * @returns {gameproto.FlushSkillRequest} FlushSkillRequest
           */


          FlushSkillRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.gameproto.FlushSkillRequest) return object;
            var message = new $root.gameproto.FlushSkillRequest();
            if (object.playerId != null) if ($util.Long) (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = false;else if (typeof object.playerId === "string") message.playerId = parseInt(object.playerId, 10);else if (typeof object.playerId === "number") message.playerId = object.playerId;else if (typeof object.playerId === "object") message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber();
            if (object.type != null) message.type = object.type | 0;
            return message;
          };
          /**
           * Creates a plain object from a FlushSkillRequest message. Also converts values to other types if specified.
           * @function toObject
           * @memberof gameproto.FlushSkillRequest
           * @static
           * @param {gameproto.FlushSkillRequest} message FlushSkillRequest
           * @param {$protobuf.IConversionOptions} [options] Conversion options
           * @returns {Object.<string,*>} Plain object
           */


          FlushSkillRequest.toObject = function toObject(message, options) {
            if (!options) options = {};
            var object = {};

            if (options.defaults) {
              if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.playerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
              } else object.playerId = options.longs === String ? "0" : 0;

              object.type = 0;
            }

            if (message.playerId != null && message.hasOwnProperty("playerId")) if (typeof message.playerId === "number") object.playerId = options.longs === String ? String(message.playerId) : message.playerId;else object.playerId = options.longs === String ? $util.Long.prototype.toString.call(message.playerId) : options.longs === Number ? new $util.LongBits(message.playerId.low >>> 0, message.playerId.high >>> 0).toNumber() : message.playerId;
            if (message.type != null && message.hasOwnProperty("type")) object.type = message.type;
            return object;
          };
          /**
           * Converts this FlushSkillRequest to JSON.
           * @function toJSON
           * @memberof gameproto.FlushSkillRequest
           * @instance
           * @returns {Object.<string,*>} JSON object
           */


          FlushSkillRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
          };

          return FlushSkillRequest;
        }();

        gameproto.FlushSkillResult = function () {
          /**
           * Properties of a FlushSkillResult.
           * @memberof gameproto
           * @interface IFlushSkillResult
           * @property {Array.<number>|null} [skillId] FlushSkillResult skillId
           * @property {number} flushSkillCount FlushSkillResult flushSkillCount
           */

          /**
           * Constructs a new FlushSkillResult.
           * @memberof gameproto
           * @classdesc Represents a FlushSkillResult.
           * @implements IFlushSkillResult
           * @constructor
           * @param {gameproto.IFlushSkillResult=} [properties] Properties to set
           */
          function FlushSkillResult(properties) {
            this.skillId = [];
            if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
          }
          /**
           * FlushSkillResult skillId.
           * @member {Array.<number>} skillId
           * @memberof gameproto.FlushSkillResult
           * @instance
           */


          FlushSkillResult.prototype.skillId = $util.emptyArray;
          /**
           * FlushSkillResult flushSkillCount.
           * @member {number} flushSkillCount
           * @memberof gameproto.FlushSkillResult
           * @instance
           */

          FlushSkillResult.prototype.flushSkillCount = 0;
          /**
           * Creates a new FlushSkillResult instance using the specified properties.
           * @function create
           * @memberof gameproto.FlushSkillResult
           * @static
           * @param {gameproto.IFlushSkillResult=} [properties] Properties to set
           * @returns {gameproto.FlushSkillResult} FlushSkillResult instance
           */

          FlushSkillResult.create = function create(properties) {
            return new FlushSkillResult(properties);
          };
          /**
           * Encodes the specified FlushSkillResult message. Does not implicitly {@link gameproto.FlushSkillResult.verify|verify} messages.
           * @function encode
           * @memberof gameproto.FlushSkillResult
           * @static
           * @param {gameproto.IFlushSkillResult} message FlushSkillResult message or plain object to encode
           * @param {$protobuf.Writer} [writer] Writer to encode to
           * @returns {$protobuf.Writer} Writer
           */


          FlushSkillResult.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            if (message.skillId != null && message.skillId.length) for (var i = 0; i < message.skillId.length; ++i) writer.uint32(
            /* id 1, wireType 0 =*/
            8).int32(message.skillId[i]);
            writer.uint32(
            /* id 2, wireType 0 =*/
            16).int32(message.flushSkillCount);
            return writer;
          };
          /**
           * Encodes the specified FlushSkillResult message, length delimited. Does not implicitly {@link gameproto.FlushSkillResult.verify|verify} messages.
           * @function encodeDelimited
           * @memberof gameproto.FlushSkillResult
           * @static
           * @param {gameproto.IFlushSkillResult} message FlushSkillResult message or plain object to encode
           * @param {$protobuf.Writer} [writer] Writer to encode to
           * @returns {$protobuf.Writer} Writer
           */


          FlushSkillResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
          };
          /**
           * Decodes a FlushSkillResult message from the specified reader or buffer.
           * @function decode
           * @memberof gameproto.FlushSkillResult
           * @static
           * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
           * @param {number} [length] Message length if known beforehand
           * @returns {gameproto.FlushSkillResult} FlushSkillResult
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */


          FlushSkillResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.gameproto.FlushSkillResult();

            while (reader.pos < end) {
              var tag = reader.uint32();

              switch (tag >>> 3) {
                case 1:
                  if (!(message.skillId && message.skillId.length)) message.skillId = [];

                  if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;

                    while (reader.pos < end2) message.skillId.push(reader.int32());
                  } else message.skillId.push(reader.int32());

                  break;

                case 2:
                  message.flushSkillCount = reader.int32();
                  break;

                default:
                  reader.skipType(tag & 7);
                  break;
              }
            }

            if (!message.hasOwnProperty("flushSkillCount")) throw $util.ProtocolError("missing required 'flushSkillCount'", {
              instance: message
            });
            return message;
          };
          /**
           * Decodes a FlushSkillResult message from the specified reader or buffer, length delimited.
           * @function decodeDelimited
           * @memberof gameproto.FlushSkillResult
           * @static
           * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
           * @returns {gameproto.FlushSkillResult} FlushSkillResult
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */


          FlushSkillResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader)) reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
          };
          /**
           * Verifies a FlushSkillResult message.
           * @function verify
           * @memberof gameproto.FlushSkillResult
           * @static
           * @param {Object.<string,*>} message Plain object to verify
           * @returns {string|null} `null` if valid, otherwise the reason why it is not
           */


          FlushSkillResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null) return "object expected";

            if (message.skillId != null && message.hasOwnProperty("skillId")) {
              if (!Array.isArray(message.skillId)) return "skillId: array expected";

              for (var i = 0; i < message.skillId.length; ++i) if (!$util.isInteger(message.skillId[i])) return "skillId: integer[] expected";
            }

            if (!$util.isInteger(message.flushSkillCount)) return "flushSkillCount: integer expected";
            return null;
          };
          /**
           * Creates a FlushSkillResult message from a plain object. Also converts values to their respective internal types.
           * @function fromObject
           * @memberof gameproto.FlushSkillResult
           * @static
           * @param {Object.<string,*>} object Plain object
           * @returns {gameproto.FlushSkillResult} FlushSkillResult
           */


          FlushSkillResult.fromObject = function fromObject(object) {
            if (object instanceof $root.gameproto.FlushSkillResult) return object;
            var message = new $root.gameproto.FlushSkillResult();

            if (object.skillId) {
              if (!Array.isArray(object.skillId)) throw TypeError(".gameproto.FlushSkillResult.skillId: array expected");
              message.skillId = [];

              for (var i = 0; i < object.skillId.length; ++i) message.skillId[i] = object.skillId[i] | 0;
            }

            if (object.flushSkillCount != null) message.flushSkillCount = object.flushSkillCount | 0;
            return message;
          };
          /**
           * Creates a plain object from a FlushSkillResult message. Also converts values to other types if specified.
           * @function toObject
           * @memberof gameproto.FlushSkillResult
           * @static
           * @param {gameproto.FlushSkillResult} message FlushSkillResult
           * @param {$protobuf.IConversionOptions} [options] Conversion options
           * @returns {Object.<string,*>} Plain object
           */


          FlushSkillResult.toObject = function toObject(message, options) {
            if (!options) options = {};
            var object = {};
            if (options.arrays || options.defaults) object.skillId = [];
            if (options.defaults) object.flushSkillCount = 0;

            if (message.skillId && message.skillId.length) {
              object.skillId = [];

              for (var j = 0; j < message.skillId.length; ++j) object.skillId[j] = message.skillId[j];
            }

            if (message.flushSkillCount != null && message.hasOwnProperty("flushSkillCount")) object.flushSkillCount = message.flushSkillCount;
            return object;
          };
          /**
           * Converts this FlushSkillResult to JSON.
           * @function toJSON
           * @memberof gameproto.FlushSkillResult
           * @instance
           * @returns {Object.<string,*>} JSON object
           */


          FlushSkillResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
          };

          return FlushSkillResult;
        }();

        gameproto.WinnerMessageRequest = function () {
          /**
           * Properties of a WinnerMessageRequest.
           * @memberof gameproto
           * @interface IWinnerMessageRequest
           * @property {number} customsPass WinnerMessageRequest customsPass
           */

          /**
           * Constructs a new WinnerMessageRequest.
           * @memberof gameproto
           * @classdesc Represents a WinnerMessageRequest.
           * @implements IWinnerMessageRequest
           * @constructor
           * @param {gameproto.IWinnerMessageRequest=} [properties] Properties to set
           */
          function WinnerMessageRequest(properties) {
            if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
          }
          /**
           * WinnerMessageRequest customsPass.
           * @member {number} customsPass
           * @memberof gameproto.WinnerMessageRequest
           * @instance
           */


          WinnerMessageRequest.prototype.customsPass = 0;
          /**
           * Creates a new WinnerMessageRequest instance using the specified properties.
           * @function create
           * @memberof gameproto.WinnerMessageRequest
           * @static
           * @param {gameproto.IWinnerMessageRequest=} [properties] Properties to set
           * @returns {gameproto.WinnerMessageRequest} WinnerMessageRequest instance
           */

          WinnerMessageRequest.create = function create(properties) {
            return new WinnerMessageRequest(properties);
          };
          /**
           * Encodes the specified WinnerMessageRequest message. Does not implicitly {@link gameproto.WinnerMessageRequest.verify|verify} messages.
           * @function encode
           * @memberof gameproto.WinnerMessageRequest
           * @static
           * @param {gameproto.IWinnerMessageRequest} message WinnerMessageRequest message or plain object to encode
           * @param {$protobuf.Writer} [writer] Writer to encode to
           * @returns {$protobuf.Writer} Writer
           */


          WinnerMessageRequest.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            writer.uint32(
            /* id 1, wireType 0 =*/
            8).int32(message.customsPass);
            return writer;
          };
          /**
           * Encodes the specified WinnerMessageRequest message, length delimited. Does not implicitly {@link gameproto.WinnerMessageRequest.verify|verify} messages.
           * @function encodeDelimited
           * @memberof gameproto.WinnerMessageRequest
           * @static
           * @param {gameproto.IWinnerMessageRequest} message WinnerMessageRequest message or plain object to encode
           * @param {$protobuf.Writer} [writer] Writer to encode to
           * @returns {$protobuf.Writer} Writer
           */


          WinnerMessageRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
          };
          /**
           * Decodes a WinnerMessageRequest message from the specified reader or buffer.
           * @function decode
           * @memberof gameproto.WinnerMessageRequest
           * @static
           * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
           * @param {number} [length] Message length if known beforehand
           * @returns {gameproto.WinnerMessageRequest} WinnerMessageRequest
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */


          WinnerMessageRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.gameproto.WinnerMessageRequest();

            while (reader.pos < end) {
              var tag = reader.uint32();

              switch (tag >>> 3) {
                case 1:
                  message.customsPass = reader.int32();
                  break;

                default:
                  reader.skipType(tag & 7);
                  break;
              }
            }

            if (!message.hasOwnProperty("customsPass")) throw $util.ProtocolError("missing required 'customsPass'", {
              instance: message
            });
            return message;
          };
          /**
           * Decodes a WinnerMessageRequest message from the specified reader or buffer, length delimited.
           * @function decodeDelimited
           * @memberof gameproto.WinnerMessageRequest
           * @static
           * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
           * @returns {gameproto.WinnerMessageRequest} WinnerMessageRequest
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */


          WinnerMessageRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader)) reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
          };
          /**
           * Verifies a WinnerMessageRequest message.
           * @function verify
           * @memberof gameproto.WinnerMessageRequest
           * @static
           * @param {Object.<string,*>} message Plain object to verify
           * @returns {string|null} `null` if valid, otherwise the reason why it is not
           */


          WinnerMessageRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null) return "object expected";
            if (!$util.isInteger(message.customsPass)) return "customsPass: integer expected";
            return null;
          };
          /**
           * Creates a WinnerMessageRequest message from a plain object. Also converts values to their respective internal types.
           * @function fromObject
           * @memberof gameproto.WinnerMessageRequest
           * @static
           * @param {Object.<string,*>} object Plain object
           * @returns {gameproto.WinnerMessageRequest} WinnerMessageRequest
           */


          WinnerMessageRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.gameproto.WinnerMessageRequest) return object;
            var message = new $root.gameproto.WinnerMessageRequest();
            if (object.customsPass != null) message.customsPass = object.customsPass | 0;
            return message;
          };
          /**
           * Creates a plain object from a WinnerMessageRequest message. Also converts values to other types if specified.
           * @function toObject
           * @memberof gameproto.WinnerMessageRequest
           * @static
           * @param {gameproto.WinnerMessageRequest} message WinnerMessageRequest
           * @param {$protobuf.IConversionOptions} [options] Conversion options
           * @returns {Object.<string,*>} Plain object
           */


          WinnerMessageRequest.toObject = function toObject(message, options) {
            if (!options) options = {};
            var object = {};
            if (options.defaults) object.customsPass = 0;
            if (message.customsPass != null && message.hasOwnProperty("customsPass")) object.customsPass = message.customsPass;
            return object;
          };
          /**
           * Converts this WinnerMessageRequest to JSON.
           * @function toJSON
           * @memberof gameproto.WinnerMessageRequest
           * @instance
           * @returns {Object.<string,*>} JSON object
           */


          WinnerMessageRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
          };

          return WinnerMessageRequest;
        }();

        gameproto.WinnerMessageResult = function () {
          /**
           * Properties of a WinnerMessageResult.
           * @memberof gameproto
           * @interface IWinnerMessageResult
           * @property {gameproto.IPlayer} player WinnerMessageResult player
           */

          /**
           * Constructs a new WinnerMessageResult.
           * @memberof gameproto
           * @classdesc Represents a WinnerMessageResult.
           * @implements IWinnerMessageResult
           * @constructor
           * @param {gameproto.IWinnerMessageResult=} [properties] Properties to set
           */
          function WinnerMessageResult(properties) {
            if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
          }
          /**
           * WinnerMessageResult player.
           * @member {gameproto.IPlayer} player
           * @memberof gameproto.WinnerMessageResult
           * @instance
           */


          WinnerMessageResult.prototype.player = null;
          /**
           * Creates a new WinnerMessageResult instance using the specified properties.
           * @function create
           * @memberof gameproto.WinnerMessageResult
           * @static
           * @param {gameproto.IWinnerMessageResult=} [properties] Properties to set
           * @returns {gameproto.WinnerMessageResult} WinnerMessageResult instance
           */

          WinnerMessageResult.create = function create(properties) {
            return new WinnerMessageResult(properties);
          };
          /**
           * Encodes the specified WinnerMessageResult message. Does not implicitly {@link gameproto.WinnerMessageResult.verify|verify} messages.
           * @function encode
           * @memberof gameproto.WinnerMessageResult
           * @static
           * @param {gameproto.IWinnerMessageResult} message WinnerMessageResult message or plain object to encode
           * @param {$protobuf.Writer} [writer] Writer to encode to
           * @returns {$protobuf.Writer} Writer
           */


          WinnerMessageResult.encode = function encode(message, writer) {
            if (!writer) writer = $Writer.create();
            $root.gameproto.Player.encode(message.player, writer.uint32(
            /* id 2, wireType 2 =*/
            18).fork()).ldelim();
            return writer;
          };
          /**
           * Encodes the specified WinnerMessageResult message, length delimited. Does not implicitly {@link gameproto.WinnerMessageResult.verify|verify} messages.
           * @function encodeDelimited
           * @memberof gameproto.WinnerMessageResult
           * @static
           * @param {gameproto.IWinnerMessageResult} message WinnerMessageResult message or plain object to encode
           * @param {$protobuf.Writer} [writer] Writer to encode to
           * @returns {$protobuf.Writer} Writer
           */


          WinnerMessageResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
          };
          /**
           * Decodes a WinnerMessageResult message from the specified reader or buffer.
           * @function decode
           * @memberof gameproto.WinnerMessageResult
           * @static
           * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
           * @param {number} [length] Message length if known beforehand
           * @returns {gameproto.WinnerMessageResult} WinnerMessageResult
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */


          WinnerMessageResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length,
                message = new $root.gameproto.WinnerMessageResult();

            while (reader.pos < end) {
              var tag = reader.uint32();

              switch (tag >>> 3) {
                case 2:
                  message.player = $root.gameproto.Player.decode(reader, reader.uint32());
                  break;

                default:
                  reader.skipType(tag & 7);
                  break;
              }
            }

            if (!message.hasOwnProperty("player")) throw $util.ProtocolError("missing required 'player'", {
              instance: message
            });
            return message;
          };
          /**
           * Decodes a WinnerMessageResult message from the specified reader or buffer, length delimited.
           * @function decodeDelimited
           * @memberof gameproto.WinnerMessageResult
           * @static
           * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
           * @returns {gameproto.WinnerMessageResult} WinnerMessageResult
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */


          WinnerMessageResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader)) reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
          };
          /**
           * Verifies a WinnerMessageResult message.
           * @function verify
           * @memberof gameproto.WinnerMessageResult
           * @static
           * @param {Object.<string,*>} message Plain object to verify
           * @returns {string|null} `null` if valid, otherwise the reason why it is not
           */


          WinnerMessageResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null) return "object expected";
            {
              var error = $root.gameproto.Player.verify(message.player);
              if (error) return "player." + error;
            }
            return null;
          };
          /**
           * Creates a WinnerMessageResult message from a plain object. Also converts values to their respective internal types.
           * @function fromObject
           * @memberof gameproto.WinnerMessageResult
           * @static
           * @param {Object.<string,*>} object Plain object
           * @returns {gameproto.WinnerMessageResult} WinnerMessageResult
           */


          WinnerMessageResult.fromObject = function fromObject(object) {
            if (object instanceof $root.gameproto.WinnerMessageResult) return object;
            var message = new $root.gameproto.WinnerMessageResult();

            if (object.player != null) {
              if (typeof object.player !== "object") throw TypeError(".gameproto.WinnerMessageResult.player: object expected");
              message.player = $root.gameproto.Player.fromObject(object.player);
            }

            return message;
          };
          /**
           * Creates a plain object from a WinnerMessageResult message. Also converts values to other types if specified.
           * @function toObject
           * @memberof gameproto.WinnerMessageResult
           * @static
           * @param {gameproto.WinnerMessageResult} message WinnerMessageResult
           * @param {$protobuf.IConversionOptions} [options] Conversion options
           * @returns {Object.<string,*>} Plain object
           */


          WinnerMessageResult.toObject = function toObject(message, options) {
            if (!options) options = {};
            var object = {};
            if (options.defaults) object.player = null;
            if (message.player != null && message.hasOwnProperty("player")) object.player = $root.gameproto.Player.toObject(message.player, options);
            return object;
          };
          /**
           * Converts this WinnerMessageResult to JSON.
           * @function toJSON
           * @memberof gameproto.WinnerMessageResult
           * @instance
           * @returns {Object.<string,*>} JSON object
           */


          WinnerMessageResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
          };

          return WinnerMessageResult;
        }();

        return gameproto;
      }();

      return $root;
    }(protobuf).gameproto;
  }).call(root);
})( // The environment-specific global.
function () {
  if (typeof globalThis !== 'undefined') return globalThis;
  if (typeof self !== 'undefined') return self;
  if (typeof window !== 'undefined') return window;
  if (typeof global !== 'undefined') return global;
  if (typeof this !== 'undefined') return this;
  return {};
}.call(this));