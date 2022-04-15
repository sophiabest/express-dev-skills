const skills = [
	{ id: 5368, skill: 'JavaScipt', learned: true },
	{ id: 4658, skill: 'CSS', learned: true },
	{ id: 7326, skill: 'HTML', learned: true }
];

module.exports = {
	getAll,
	getOne,
	create,
	deleteOne,
	update,
};

function update(id, skill) {
	id = parseInt(id);
	const updatedSkill = skills.find((skill) => skill.id === id);
	Object.assign(updatedSkill, skill);
};

function deleteOne(id) {
	id = parseInt(id);
	const idx = skills.find((skill) => skill.id === id);
	skills.splice(idx, 1);
};

function create(skill) {
	skill.id = 1;
	skill.quality = false;
	skills.push(skill);
};

function getOne(id) {
	id = parseInt(id);
	return skills.find((skill) => skill.id === id);
};

function getAll() {
	return skills;
};