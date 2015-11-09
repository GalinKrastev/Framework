Object.prototype.getType = Object.prototype.getType ||
    function getType(propertyOrFunction, isOwnProperty) {
        if (!propertyOrFunction && propertyOrFunction !== 0) {
            throw new SyntaxError([
                "Parameter propertyOrFunction is required ",
                "and cannot be null, undefined or false"
            ]);
        }

        if (this.type) {
            return this.type;
        }

        if (
            isOwnProperty === true &&
            this.prototype[propertyOrFunction]
        ) {
            return;
        }

        return typeof this[propertyOrFunction];
    };

Object.prototype.extend = Object.prototype.extend ||
    function extend(object) {
        for (var propName in object) {
            if (object.hasOwnProperty(propName)) {
                if (object[propName][getType]) {
                    this[propName] = {}.extend(object[propName]);
                } else {
                    this[propName] = object[propName];
                }
            }
        }

        if (object.prototype) {
            this.prototype.extend(object.prototype);
        }

        return this;
    };

Object.prototype.tryToSetProperties = Object.prototype.tryToSetProperties ||
    function tryToSetProperties(objWithProps) {
        for (var prop in objWithProps) {
            var addProps = true;
            if (
                objWithProps.hasOwnProperty(prop) &&
                !this[prop] === undefined
            ) {
                addProps = false;
            }
        }

        if (addProps) {
            this.extend(objWithProps);
        }

        return this;
    };