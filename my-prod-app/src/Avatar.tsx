const user = {
  name: 'Marius Skjellerud',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
}

function Profile() {
  return (
    <>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={`Photo of ${user.name}`}
        style={{ width: user.imageSize, height: user.imageSize, borderRadius: 50 }}
      />
    </>
  )
}
export default Profile
