const isNumber = val => typeof val === 'number';
const isString = val => typeof val === 'string'; 
const isBoolean = val => typeof val === 'boolean'; 
const isArray = val => Array.isArray(val); 
const isObject = val => val instanceof Object;
const isFunction = val => val instanceof Function; 

const castToNumber = val => {
  if(isNumber(val)) return val;
  const number = Number(val);
  if(isNaN(number)) throw new CastError(Number, val);
  return number;
};
const castToString = val => {
  if(isString(val)) return val;
  const string = String(val);
  if(string) return string;
};
//const castToBoolean 
//(BONUS) const castToArray



class CastError extends Error {
  constructor(Type, value) {
    const type = Type.name;
    super(`Cannot cast >>${value}<< to ${type}`);
    this.type = type;
    this.value = value;
  }
}

const casters = {
  Number: castToNumber,
  String: castToString,
};

const getCaster = Type => {  
  return casters[Type.name] || null;
};

module.exports = {
  isNumber,
  isString,
  isBoolean, 
  isArray,
  isObject,
  isFunction,
  CastError,
  getCaster,
  castToNumber,
  castToString
};
