export default interface TaskInterface {
  _roommateId: [{
    _id?: string,
    name?: string,
    nickname?: string,
    title?: string
  }]
  _id?: string,
  description?: string,
  date?: string,
}