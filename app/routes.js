//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.post('/exports-answer', function(request, response) {

    var exports = request.session.data['exports']
    if (exports.includes("Fruit")){
        response.redirect("/map")
    } 
    
    if (exports.includes("Vegetables")){
        response.redirect("/high-risk-rework")
    } 

    if (exports.includes("Meat")){
        response.redirect("/libraries-two-radios")
    } 
})


