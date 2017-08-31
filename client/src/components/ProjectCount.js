import '../stylesheets/ui.scss';
import { PropTypes } from 'react';

export const ProjectCount = ({total, cyber_require,
							safety_require}) => (
		<div className='project-count'>
			<div className='total-projects'>
				<span>Total: {total} projects</span>
			</div>
			<div className='cyber-projects'>
				<span>Cyber Security Requirement: {cyber_require} projects</span>
			</div>
			<div className='safety-projects'>
				<span>Safety Certification Requirement: {safety_require} projects</span>
			</div>
		</div>
);

ProjectCount.propTypes = {
  total: PropTypes.number,
  cyber_require: PropTypes.number,
  safety_require: PropTypes.number,
};
