/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Contact.css';

const title = 'Follow Me';

function Contact(props, context) {
  context.setTitle(title);
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1>{title}</h1>
        <ul>
          <li>
            <a href="https://twitter.com/joonho_cho" target="_blank">Twitter</a>
          </li>
          <li>
            <a href="https://medium.com/@joonhocho" target="_blank">Medium</a>
          </li>
          <li>
            <a href="https://github.com/joonhocho" target="_blank">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/joonhocho" target="_blank">LinkedIn</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

Contact.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Contact);
