import '../stylesheets/ui.scss';
import React, { PropTypes } from 'react';

export const ProjectCount = ({total, cyber_require,
							safety_require}) => (
		<div className='project-count'>
			<ul>
				<li>
					<div className='total-projects'>
						<span>Total: {total} projects</span>
					</div>
				</li>

				<li>
					<div className='cyber-projects'>
						<span>Cyber Security Requirement: {cyber_require} projects</span>
					</div>
				</li>

				<li>
					<div className='safety-projects'>
						<span>Safety Certification Requirement: {safety_require} projects</span>
					</div>
				</li>
			</ul>
		</div>
);

ProjectCount.propTypes = {
  total: PropTypes.number,
  cyber_require: PropTypes.number,
  safety_require: PropTypes.number,
};
