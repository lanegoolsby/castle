import { InMemoryDbService/*, createErrorResponse, HttpMethodInterceptorArgs, createObservableResponse*/ } from 'angular-in-memory-web-api';


export class InMemoryThingTypeService implements InMemoryDbService {
    // uncomment this function to force an error
    // protected get(interceptorArgs: HttpMethodInterceptorArgs) {
    //   let resp = createErrorResponse(500, 'this is a forced error from the in-memory api');
    //   return createObservableResponse(resp);
    // }

    createDb() {
        let thingTypes = [{
            id: 1,
            name: 'Light',
            loading: false
        }, {
            id: 2,
            name: 'Temperature',
            loading: false
        }, {
            id: 3,
            name: 'Window',
            loading: false
        }, {
            id: 4,
            name: 'Lock',
            loading: false
        }, {
            id: 5,
            name: 'PIR',
            loading: false
        }, {
            id: 6,
            name: 'Hall',
            loading: false
        }];

        return { thingTypes };
    }
}
