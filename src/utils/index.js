import _ from 'lodash'
var lastId = Date.now();

export function newId() {
    return (lastId ++).toString(36);
}