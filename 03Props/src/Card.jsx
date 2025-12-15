function Card(props) {
    console.log(props);
    const {username,about,pic,hashtags} = props.obj;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-5">
      <img className="w-full" src={pic} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{username}</div>
        <p className="text-gray-700 text-base">{about}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {hashtags}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {hashtags[1]}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {hashtags[2]}
        </span>
      </div>
    </div>
  );
}

export default Card;
