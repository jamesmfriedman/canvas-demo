angular.module('App.common').service('canvasApi', function(CANVAS_API_TOKEN, $resource){
    const API_URL =  'http://canvas-api.herokuapp.com';
    console.log(CANVAS_API_TOKEN);
    const RESOURCE_DEFAULT_ACTIONS = {
        get: {
            method: 'GET',
            headers: {
                'Authorization': `Token ${CANVAS_API_TOKEN}`
            }
        },
        query: {
            method: 'GET',
            isArray: true,
            headers: {
                'Authorization': `Token ${CANVAS_API_TOKEN}`
            }
        }
    };

    console.log(RESOURCE_DEFAULT_ACTIONS)

    const Course = $resource(`${API_URL}/api/v1/courses/:id`, {id:'@id'}, RESOURCE_DEFAULT_ACTIONS);
    const Enrollment = $resource(`${API_URL}/api/v1/courses/:id/enrollments`, {id:'@id'}, RESOURCE_DEFAULT_ACTIONS);

    return {
        Course,
        Enrollment
    };
});