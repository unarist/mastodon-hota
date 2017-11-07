import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import ImmutablePureComponent from 'react-immutable-pure-component';
import Permalink from '../../../components/permalink';

export default class MediaItem extends ImmutablePureComponent {

  static propTypes = {
    media: ImmutablePropTypes.map.isRequired,
  };

  render () {
    const { media } = this.props;
    const status = media.get('status');

    let content, style;

    if (media.get('type') === 'gifv') {
      content = <span className='media-gallery__gifv__label'>GIF</span>;
    }

    if (!status.get('sensitive')) {
      style = { backgroundImage: `url(${media.get('preview_url')})` };
    } else {
      style = { backgroundImage: `url(${media.get('preview_url')})` ,filter: `blur(4px)` };
    }

    return (
      <div className='account-gallery__item'>
        <Permalink
          to={`/statuses/${status.get('id')}`}
          href={status.get('url')}
          style={style}
        >
          {content}
        </Permalink>
      </div>
    );
  }

}
