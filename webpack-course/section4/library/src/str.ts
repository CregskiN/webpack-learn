import _ from 'lodash';

export function join(a: string, b: string) {
    return _.join([a, b], '-');
}