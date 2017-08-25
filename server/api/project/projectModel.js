var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*
The permitted schemaTypes are
- String, Number, Date, Buffer, Boolean, Mixed, ObjectId, Array
*/
var ProjectSchema = new Schema({
	name: {	type: String, required: true, index: {unique: true}},	// name is index and unique
	createdAt : { type: Date, default: Date.now },
	updateAt: { type: Date, default: Date.now },
	people: [ {type: String} ], 	// an array of names
	do: { type: Boolean, default: false },
	endIt: { type: Boolean, default: false },
	safety_require: { type: Boolean, default: false },
	cyber_require: { type: Boolean, default: false },
	/*
	Technical mastery status
	Componnets are: specification, architecture&global design
	The following props doesn't affect the score:
	Detailed Design, Code, Integration test, Pre-validation test and was not modeled
	*/
	technical_mastery_status: {
		//it is composed of two parts: specificaiton and architecture&Global Design
		score: { type:Number, min: 0, max: 1 },
		// Specification includes
		// functional specification document completeness
		// and review done
		specification: {
			score: { type:Number, min: 0, max: 1 },
			completeness: {
				type: Number,
				min: 1,
				max: 4
			},
			review_done: {
				type: Number,
				min: 1,
				max: 2
			}
		},
		// Architecture&Global Design includes
		// architecture and global design comument completeness
		// bricks used (GAIA),
		// design FMEA(robustness oriented) done
		// review done
		archi_global: {
			score: { type:Number, min: 0, max: 1 },
			completeness: {
				type: Number,
				min: 1,
				max: 4
			},
			bricks_used: {
				type: Number,
				min: 1,
				max: 2
			},
			fmea_done: {
				type: Number,
				min: 1,
				max: 2
			},
			review_done: {
				type: Number,
				min: 1,
				max: 2
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
		score: { type:Number, min: 0, max: 1 },
		well_identified: {
			type: Number,
			min: 1,
			max: 2
		},
		design_fmea: {
			type: Number,
			min: 1,
			max: 2
		},
		requirement_from_hw: {
			type: Number,
			min: 1,
			max: 2
		},
		traceability: {
			type: Number,
			min: 1,
			max: 2
		}
	},
	/*
	Cyber Security Status is composed of
	cyber security functions well identified,
	and secure code rules verification report
	*/
	cyber_status: {
		score: { type:Number, min: 0, max: 1 },
		well_identified: {
			type: Number,
			min: 1,
			max: 2
		},
		verification_report: {
			type: Number,
			min: 1,
			max: 2
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
		score: { type:Number, min: 0, max: 1 },
		// quality includes embedded software quality plan,
		//and embedded software activity regularly monitored
		quality: {
			score: { type:Number, min: 0, max: 1 },
			quality_plan: { type:Number, min: 1, max: 2 },
			regularly_monitored: { type:Number, min: 1, max: 3 },

		},
		// Requirement organization includes
		// requirement management tool,
		// traceability --> source code
		requirement_org: {
			score: { type:Number, min: 0, max: 1 },
			management_tool: { type:Number, min: 1, max: 2 },
			traceability: { type:Number, min: 1, max: 2 },
		},
		// develpment organization includes
		// develpment plan,
		// embedded software planning is exisitng
		// Embedded software planning is monitored
		// Review development plan report
		development_org: {
			score: { type:Number, min: 0, max: 1 },
			plan: { type:Number, min: 1, max: 4 },
			plan_exist: { type:Number, min: 1, max: 2 },
			plan_monitored: { type:Number, min: 1, max: 2 },
			review_report: { type:Number, min: 1, max: 2 },
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
			score: { type:Number, min: 0, max: 1 },
			management_plan: { type:Number, min: 1, max: 4 },
			config_tool: { type:Number, min: 1, max: 2 },
			change_tool: { type:Number, min: 1, max: 2 },
			version_report: { type:Number, min: 1, max: 2 },
			release_plan: { type:Number, min: 1, max: 2 },
			config_audit: { type:Number, min: 1, max: 2 },
			review_reort: { type:Number, min: 1, max: 2 },
		},
		/*
		  Design test strategy includes
		  stategy verification plan,
		  stategy verification plan report
		*/
		design_test_strategy: {
			score: { type:Number, min: 0, max: 1 },
			verif_plan: { type:Number, min: 1, max: 2 },
			verif_report: { type:Number, min: 1, max: 2 },
		}
	},
	// array of ids from the owners
	owners: [{type: Schema.Types.ObjectId, ref: 'user'}],
	// array of ids from the categories
  	categories: [{type: Schema.Types.ObjectId, ref: 'category'}],
	// array of project status history
	history: [{
		updateAt: { type: Date, required: true },
		technical_mastery_status: { type:Number, max:1, min: 0 },
		satey_status: { type:Number, max:1, min: 0 },
		cyber_status: { type:Number, max:1, min: 0 },
		development_mastery_status: { type:Number, max:1, min: 0 },
	}],
});

module.exports = mongoose.model('project', ProjectSchema);
