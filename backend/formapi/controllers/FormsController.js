var Forms = require('../models/Forms')

exports.createForm = function(req, res) {
    var newForm = new Forms({sections: req.body.sections})
    newForm.save(function(err, form) {
        if (!err) {
            res.json({error: false, data: form})
        } else {
            res.json({error: true, err: err})
        }
    })
}

exports.getForm = function(req, res) {
    Forms.find(function(err, form) {
        if (!err) {
            res.json({error: false, data: form})
        } else {
            res.json({error: true, err: err})
        }
    })
}

exports.updateForm = function(req, res) {
    Forms.findOne({_id: req.params.id}, function(err, form) {
        if (!err) {
            form.sections = req.body.sections;
            form.save(function(err, resForm) {
                if (!err) {
                    res.json({error: false, data: resForm})
                } else {
                    res.json({error: true, err: err})
                }
            })
        } else {
            res.json({error: true,message: 'Not Found', err: err})
        }
    })
    
}