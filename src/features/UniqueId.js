let uuid = 0

export default function UniqueId () {
  console.log('in UniqueId')
  const getId = () => {
    return ++uuid
  }

  return {
    getId
  }
}
