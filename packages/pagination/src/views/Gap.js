/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import styled from 'styled-components';
import PaginationStyles from '@zendeskgarden/css-pagination';
import { retrieveTheme } from '@zendeskgarden/react-theming';

import { version } from '../../package.json';
import Page from './Page';
const COMPONENT_ID = 'pagination.gap';

/**
 * Accepts all `<li>` props
 */
const Gap = styled(Page).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version,
  className: PaginationStyles['c-pagination__page--gap']
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

Gap.propTypes = {
  current: PropTypes.bool,
  focused: PropTypes.bool,
  hovered: PropTypes.bool,
  hidden: PropTypes.bool
};

/** @component */
export default Gap;
