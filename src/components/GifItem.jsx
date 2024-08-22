import PropTypes from 'prop-types';

export const GifItem = ({ title, url, id }) => {
   return (
      <div
         key={id}
         className="card"
      >
         <img
            src={url}
            alt={title}
         />
         <p>{title}</p>
      </div>
   );
};

GifItem.propTypes = {
   title: PropTypes.string.isRequired,
   url: PropTypes.string.isRequired,
   id: PropTypes.string,
};
