import http from '../http-common'

const getAll = () => {
  return http.get("/actors");
};

const get = id => {
  return http.get(`/actors/${id}`);
};

const create = data => {
  return http.post("/actors", data);
};

const update = (id, data) => {
  return http.put(`/actors/${id}`, data);
};

const remove = id => {
  return http.delete(`/actors/${id}`);
};

const removeAll = () => {
  return http.delete(`/actors`);
};

const findByTitle = title => {
  return http.get(`/actors?title=${title}`);
};

const ActorService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default ActorService;