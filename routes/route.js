app.get('/login', function (req, res) {
        res.render('form', {
            title: "Login", //page title
            action: "/login", //post action for the form
            fields: [
            {name:'email',type:'text',property:'required'},   //first field for the form
            {name:'password',type:'password',property:'required'}   //another field for the form
            ]
        });
    });