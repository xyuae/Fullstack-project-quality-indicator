var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*
The permitted schemaTypes are
- String, Number, Date, Buffer, Boolean, Mixed, ObjectId, Array
*/

const dotProdcut = (array1, array2) => {
  var n = array1.length;
  var sum = 0;
  for (let i = 0; i < n; i++) {
    sum += array1[i] * array2[i];
  }
  return sum;
};

var ProjectSchema = new Schema({
  name: {type: String, required: true, index: {unique: true}},	// name is index and unique
  createdAt: {type: Date, default: Date.now},
  updateAt: {type: Date, default: Date.now},
  people: [{type: String}],
  do: {type: Boolean, default: false},
  endIt: {type: Boolean, default: false},
  safety_require: {type: Boolean, default: false},
  cyber_require: {type: Boolean, default: false},
  /*
  Technical mastery status
  Componnets are: specification, architecture&global design
  The following props doesn't affect the score:
  Detailed Design, Code, Integration test, Pre-validation test and was not modeled
  */
  technical_mastery_status: {
    //it is composed of two parts: specificaiton and architecture&Global Design
    score: {type: Number, min: 0, max: 1, required: true},
    // Specification includes
    // functional specification document completeness
    // and review done
    specification: {
      score: {type: Number, min: 0, max: 1, required: true},
      completeness: {
        type: Number,
        min: 1,
        max: 4,
        default: 4
      },
      review_done: {
        type: Number,
        min: 1,
        max: 2,
        default: 2
      }
    },
    // Architecture&Global Design includes
    // architecture and global design comument completeness
    // bricks used (GAIA),
    // design FMEA(robustness oriented) done
    // review done
    archi_global: {
      score: {type: Number, min: 0, max: 1, required: true},
      completeness: {
        type: Number,
        min: 1,
        max: 4,
        default: 4
      },
      bricks_used: {
        type: Number,
        min: 1,
        max: 2,
        default: 2
      },
      fmea_done: {
        type: Number,
        min: 1,
        max: 2,
        default: 2
      },
      review_done: {
        type: Number,
        min: 1,
        max: 2,
        default: 2
      }
    }
  },
  /*
  Safety Status is composed of
  safety functions well identified,
  design FMEA,
  requirement from hw,
  and traceability
  */
  safety_status: {
    score: {type: Number, min: 0, max: 1, required: true},
    well_identified: {
      type: Number,
      min: 1,
      max: 2,
      default: 2
    },
    design_fmea: {
      type: Number,
      min: 1,
      max: 2,
      default: 2
    },
    requirement_from_hw: {
      type: Number,
      min: 1,
      max: 2,
      default: 2
    },
    traceability: {
      type: Number,
      min: 1,
      max: 2,
      default: 2
    }
  },
  /*
  Cyber Security Status is composed of
  cyber security functions well identified,
  and secure code rules verification report
  */
  cyber_status: {
    score: {type: Number, min: 0, max: 1, required: true},
    well_identified: {
      type: Number,
      min: 1,
      max: 2,
      default: 2
    },
    verification_report: {
      type: Number,
      min: 1,
      max: 2,
      default: 2
    }
  },
  /*
  Development Management mastery status is composed of
  quality,
  requirement organization,
  development organization, configuration management,
  and design test strategy.
  */
  development_mastery_status: {
    score: {type: Number, min: 0, max: 1, required: true},
    // quality includes embedded software quality plan,
    //and embedded software activity regularly monitored
    quality: {
      score: {type: Number, min: 0, max: 1, required: true},
      quality_plan: {type: Number, min: 1, max: 2, default: 2},
      regularly_monitored: {type: Number, min: 1, max: 3, default: 3},

    },
    // Requirement organization includes
    // requirement management tool,
    // traceability --> source code
    requirement_org: {
      score: {type: Number, min: 0, max: 1, required: true},
      management_tool: {type: Number, min: 1, max: 2, default: 2},
      traceability: {type: Number, min: 1, max: 2, default: 2},
    },
    // develpment organization includes
    // develpment plan,
    // embedded software planning is exisitng
    // Embedded software planning is monitored
    // Review development plan report
    development_org: {
      score: {type: Number, min: 0, max: 1, required: true},
      plan: {type: Number, min: 1, max: 4 , default: 4},
      plan_exist: {type: Number, min: 1, max: 2, default: 2},
      plan_monitored: {type: Number, min: 1, max: 2, default: 2},
      review_report: {type: Number, min: 1, max: 2, default: 2},
    },
    /*
      Configuration management includes
      Configuration & Changement management plan,
      Configuration management tool,
      change management tool,
      version file report,
      release code generation plan,
      Configuration management audit,
      review Configuration management plan report
    */
    config_management: {
      score: {type: Number, min: 0, max: 1, required: true},
      management_plan: {type: Number, min: 1, max: 4, default: 4},
      config_tool: {type: Number, min: 1, max: 2, default: 2},
      change_tool: {type: Number, min: 1, max: 2, default: 2},
      version_report: {type: Number, min: 1, max: 2, default: 2},
      release_plan: {type: Number, min: 1, max: 2, default: 2},
      config_audit: {type: Number, min: 1, max: 2, default: 2},
      review_report: {type: Number, min: 1, max: 2, default: 2},
    },
    /*
      Design test strategy includes
      stategy verification plan,
      stategy verification plan report
    */
    design_test_strategy: {
      score: {type: Number, min: 0, max: 1, required: true},
      verif_plan: {type: Number, min: 1, max: 2, default: 2},
      verif_report: {type: Number, min: 1, max: 2, default: 2},
    }
  },
  // array of ids from the owners
  owners: [{type: Schema.Types.ObjectId, ref: 'user'}],
  // array of ids from the categories
  categories: [{type: Schema.Types.ObjectId, ref: 'category'}],
  // array of project status history
  history: [{
    updateAt: {type: Date, required: true},
    technical_mastery_status: {type: Number, max: 1, min: 0},
    safety_status: {type: Number, max: 1, min: 0},
    cyber_status: {type: Number, max: 1, min: 0},
    development_mastery_status: {type: Number, max: 1, min: 0},
  }],
});

ProjectSchema.pre('validate', function(next) {
  // console.log(this);
  this.cal_technical_mastery_status(this.technical_mastery_status);
  //console.log(this);
  //console.log("This is: " , this);
  this.cal_safety_status(this.safety_status);
  //console.log(this);
  this.cal_cyber_status(this.cyber_status);
  //console.log(this);
  this.cal_development_mastery_status(this.development_mastery_status);

  //var {updateAt, technical_mastery_status, safety_status, cyber_status, development_mastery_status} = this;
  var object = new Object();
  object.updateAt = this.updateAt;
  object.cyber_status = this.cyber_status.score;
  object.technical_mastery_status = this.technical_mastery_status.score;
  //console.log(this.safety_status.score);
  object.safety_status = this.safety_status.score;
  //console.log(object.safety_status);
  object.development_mastery_status = this.development_mastery_status.score;
  var update_history = this.history;
  update_history.push(object);
  //console.log(update_history);
  this.set(
   {
    history: update_history
  }
  );
  //console.log(this);
  next();
});

ProjectSchema.methods = {
  boolean_05: function(index) {
    // for mock boolean entry where the index 1 corresponds to 0.2;
    // and index 2 corresponds to 0
    return [null, 0.5, 0][index];
  },
  boolean_03: function(index) {
    // for mock boolean entry where the index 1 corresponds to 0.2;
    // and index 2 corresponds to 0
    return [null, 0.3, 0][index];
  },
  boolean_02: function(index) {
    // for mock boolean entry where the index 1 corresponds to 0.2;
    // and index 2 corresponds to 0
    return [null, 0.2, 0][index];
  },
  boolean_015: function(index) {
    // for mock boolean entry where the index 1 corresponds to 0.2;
    // and index 2 corresponds to 0
    return [null, 0.15, 0][index];
  },
  technical_mastery_status_specification: function(specification) {
    //console.log(specification);
    var completeness = [null, 0.8, 0.6, 0.4, 0][specification.completeness];
    var review_done = this.boolean_02(specification.review_done);
    return completeness + review_done;
  },
  technical_mastery_status_archi_global: function(architecture) {
    var completeness = [null, 0.45, 0.35, 0.09, 0][architecture.completeness];
    var bricks_used = this.boolean_02(architecture.bricks_used);
    var fmea_done = this.boolean_02(architecture.fmea_done);
    var review_done = this.boolean_015(architecture.review_done);
    //console.log(architecture);
    return completeness + bricks_used + fmea_done + review_done;
  },
  cal_technical_mastery_status: function(technical_mastery_status) {
    var {specification, archi_global} = technical_mastery_status;
    // console.log(archi_global);
    var value1 = this.technical_mastery_status_specification(specification);

    var value2 = this.technical_mastery_status_archi_global(archi_global);
    //console.log(value2);
    this.set(
     {
      technical_mastery_status:
      {
        specification: {
          score: value1
        },
        archi_global: {
          score: value2
        }
      }
    }
    );
    this.set(
     {
      technical_mastery_status:
      {
        score: value1 + value2
      }
    }
    );
  },
  cal_safety_status: function(safety_status) {
    var {well_identified, design_fmea, requirement_from_hw, traceability} = safety_status;
    var score = this.boolean_03(well_identified) +
         this.boolean_03(design_fmea) +
         this.boolean_02(requirement_from_hw) +
         this.boolean_02(traceability);
    this.set(
     {
      safety_status: {
        score: score
      }
    }
    );
  },
  cal_cyber_status: function(cyber_status) {
    var {well_identified, verification_report} = cyber_status;
    var score = this.boolean_05(well_identified) + this.boolean_05(verification_report);
    this.set(
     {
      cyber_status: {
        score: score
      }
    }
    );
  },
  development_mastery_status_quality: function(quality) {
    var {quality_plan, regularly_monitored} = quality;
    return this.boolean_05(quality_plan) + [null, 0.5, 0.25, 0][regularly_monitored];
  },
  development_mastery_status_requirement_org: function(requirement_org) {
    var {management_tool, traceability} = requirement_org;
    return [null, 0.7, 0][management_tool] + [null, 0.3, 0][traceability];
  },
  development_mastery_status_development_org: function(development_org) {
    var {plan, plan_exist, plan_monitored, review_report} = development_org;
    return [null, 0.5, 0.45, 0.15, 0][plan] +
     this.boolean_02(plan_exist) +
     this.boolean_015(plan_monitored) +
     this.boolean_015(review_report);

  },
  development_mastery_status_config_management: function(config_management) {
    var {management_plan, config_tool, change_tool, version_report, release_plan, config_audit, review_report} = config_management;
    return [null, 0.35, 0.3, 0.1, 0][management_plan] +
     this.boolean_015(config_tool) +
     this.boolean_015(change_tool) +
     [null, 0.1, 0][version_report] +
     [null, 0.1, 0][release_plan] +
     [null, 0.05, 0][config_audit] +
     [null, 0.1, 0][review_report];
  },
  development_mastery_status_design_test_strategy: function(design_test_strategy) {
    var {verif_plan, verif_report} = design_test_strategy;
    return [null, 0.8, 0][verif_plan] + [null, 0.2, 0][verif_report];
  },
  cal_development_mastery_status: function(development_mastery_status) {
    var {quality, requirement_org, development_org, config_management, design_test_strategy} = development_mastery_status;
    var value1 = this.development_mastery_status_quality(quality);
    var value2 = this.development_mastery_status_requirement_org(requirement_org);
    var value3 = this.development_mastery_status_development_org(development_org);
    var value4 = this.development_mastery_status_config_management(config_management);
    var value5 = this.development_mastery_status_design_test_strategy(design_test_strategy);

    this.set(
     {
      development_mastery_status:
      {
        quality: {
          score: value1
        },
        requirement_org: {
          score: value2
        },
        development_org: {
          score: value3
        },
        config_management: {
          score: value4
        },
        design_test_strategy: {
          score: value5
        }
      }
    }
    );
    //console.log(value1, value2, value3, value4, value5)
    var score = dotProdcut([0.25, 0.1, 0.25, 0.3, 0.1], [value1, value2, value3, value4, value5]);
    //console.log(score);
    this.set(
     {
      development_mastery_status:
      {
        score: score
      }
    }
    );
  },

  updateScore: function() {
    //console.log(this);
    var {technical_mastery_status, safety_status, cyber_status, development_mastery_status} = this;
    //console.log(this);
    this.cal_technical_mastery_status(technical_mastery_status);
    this.cal_safety_status(safety_status);
    this.cal_cyber_status(cyber_status);
    this.cal_development_mastery_status(development_mastery_status);
  }
};

module.exports = mongoose.model('project', ProjectSchema);
