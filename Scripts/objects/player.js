var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    /**
     * This is the Player object used in the game
     *
     * @export
     * @class Player
     * @extends {objects.GameObject}
     */
    var Player = (function (_super) {
        __extends(Player, _super);
        // PUBLIC PROPERTIES +++++++++++++++++++++++++++++++++++++++
        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Island.
         *
         * @constructor
         * @param {string} imageString
         */
        function Player(imageString) {
            _super.call(this, imageString);
            this.start();
        }
        /**
        * This method checks if the object has reached its boundaries
        *
        * @private
        * @method _checkBounds
        * @returns {void}
        */
        Player.prototype._checkBounds = function () {
            // checkbounds to stop player from going outside
            // check right bounds
            if (this.x >= (340 - (this.width * 0.5))) {
                this.x = (340 - (this.width * 0.5));
            }
            // check left bounds
            if (this.x <= (0 + (this.width * 0.5))) {
                this.x = (0 + (this.width * 0.5));
            }
            // check tob bounds
            if (this.y <= (375 - (this.height * 0.5))) {
                this.y = (605 - (this.height * 0.5));
            }
            // check bottm bounds
            if (this.y >= (605 - (this.height * 0.5))) {
                this.y = (605 - (this.height * 0.5));
            }
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This method is used to initialize public properties
         * and private instance variables
         *
         * @public
         * @method start
         * @returns {void}
         */
        Player.prototype.start = function () {
            this.x = 50;
            this.y = 575;
        };
        /**
         * This method updates the object's properties
         * every time it's called
         *
         * @public
         * @method update
         * @returns {void}
         */
        Player.prototype.update = function () {
            // player to follow mouse
            this.position = new objects.Vector2(this.x, this.y);
            if (objects.Player.isActivate) {
                this.y = core.stage.mouseY;
                this.x = core.stage.mouseX;
            }
            this._checkBounds();
        };
        // PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++++++
        Player.isActivate = false;
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map