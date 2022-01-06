import http from '../http-common'

const getAll = () => {
  return http.get("/producers");
};

const get = id => {
  return http.get(`/producers/${id}`);
};

const create = data => {
  return http.post("/producers", data);
};

const update = (id, data) => {
  return http.put(`/producers/${id}`, data);
};

const remove = id => {
  return http.delete(`/producers/${id}`);
};

const removeAll = () => {
  return http.delete(`/producers`);
};

const findByTitle = title => {
  return http.get(`/producers?title=${title}`);
};

const ProducerService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default ProducerService;