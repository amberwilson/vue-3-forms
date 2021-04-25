let uuid = 0

export default function UniqueId () {
  const getId = () => {
    return ++uuid
  }

  return {
    getId
  }
}
