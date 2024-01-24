window.filtering = function() {
	return {
		jobs: Alpine.$persist([
			{
				id: 1,
				company: 'Photosnap',
				logo: './images/photosnap.svg',
				new: true,
				featured: true,
				position: 'Senior Frontend Developer',
				role: 'Frontend',
				level: 'Senior',
				postedAt: '1d ago',
				contract: 'Full Time',
				location: 'USA Only',
				languages: ['HTML', 'CSS', 'JavaScript'],
				tools: []
			},
			{
				id: 2,
				company: 'Manage',
				logo: './images/manage.svg',
				new: true,
				featured: true,
				position: 'Fullstack Developer',
				role: 'Fullstack',
				level: 'Midweight',
				postedAt: '1d ago',
				contract: 'Part Time',
				location: 'Remote',
				languages: ['Python'],
				tools: ['React']
			},
			{
				id: 3,
				company: 'Account',
				logo: './images/account.svg',
				new: true,
				featured: false,
				position: 'Junior Frontend Developer',
				role: 'Frontend',
				level: 'Junior',
				postedAt: '2d ago',
				contract: 'Part Time',
				location: 'USA Only',
				languages: ['JavaScript'],
				tools: ['React', 'Sass']
			},
			{
				id: 4,
				company: 'MyHome',
				logo: './images/myhome.svg',
				new: false,
				featured: false,
				position: 'Junior Frontend Developer',
				role: 'Frontend',
				level: 'Junior',
				postedAt: '5d ago',
				contract: 'Contract',
				location: 'USA Only',
				languages: ['CSS', 'JavaScript'],
				tools: []
			},
			{
				id: 5,
				company: 'Loop Studios',
				logo: './images/loop-studios.svg',
				new: false,
				featured: false,
				position: 'Software Engineer',
				role: 'Fullstack',
				level: 'Midweight',
				postedAt: '1w ago',
				contract: 'Full Time',
				location: 'Worldwide',
				languages: ['JavaScript', 'Ruby'],
				tools: ['Sass']
			},
			{
				id: 6,
				company: 'FaceIt',
				logo: './images/faceit.svg',
				new: false,
				featured: false,
				position: 'Junior Backend Developer',
				role: 'Backend',
				level: 'Junior',
				postedAt: '2w ago',
				contract: 'Full Time',
				location: 'UK Only',
				languages: ['Ruby'],
				tools: ['RoR']
			},
			{
				id: 7,
				company: 'Shortly',
				logo: './images/shortly.svg',
				new: false,
				featured: false,
				position: 'Junior Developer',
				role: 'Frontend',
				level: 'Junior',
				postedAt: '2w ago',
				contract: 'Full Time',
				location: 'Worldwide',
				languages: ['HTML', 'JavaScript'],
				tools: ['Sass']
			},
			{
				id: 8,
				company: 'Insure',
				logo: './images/insure.svg',
				new: false,
				featured: false,
				position: 'Junior Frontend Developer',
				role: 'Frontend',
				level: 'Junior',
				postedAt: '2w ago',
				contract: 'Full Time',
				location: 'USA Only',
				languages: ['JavaScript'],
				tools: ['Vue', 'Sass']
			},
			{
				id: 9,
				company: 'Eyecam Co.',
				logo: './images/eyecam-co.svg',
				new: false,
				featured: false,
				position: 'Full Stack Engineer',
				role: 'Fullstack',
				level: 'Midweight',
				postedAt: '3w ago',
				contract: 'Full Time',
				location: 'Worldwide',
				languages: ['JavaScript', 'Python'],
				tools: ['Django']
			},
			{
				id: 10,
				company: 'The Air Filter Company',
				logo: './images/the-air-filter-company.svg',
				new: false,
				featured: false,
				position: 'Front-end Dev',
				role: 'Frontend',
				level: 'Junior',
				postedAt: '1mo ago',
				contract: 'Part Time',
				location: 'Worldwide',
				languages: ['JavaScript'],
				tools: ['React', 'Sass']
			}
		]),
		filteredJobs: [],
		activeFilters: Alpine.$persist([]),

		get filteredByCat() {
			return this.activeFilters.forEach((item) => this.jobs.filter(job => job.item))
		},
		get filteredByRole() {
			return this.jobs.filter(job => job.role);
		},
		get filteredByLevel() {
			return this.jobs.filter(job => job.level);
		},
		get filteredByLanguages() {
			return this.jobs.filter(job => job.languages);
		},
		get filteredByTools() {
			return this.jobs.filter(job => job.tools);
		},

		get filteredJobs() {
			if(this.activeFilters.length) {
				let filteredJobsArray = this.jobs;
				this.activeFilters.forEach(filter => {
					filteredJobsArray = this.jobs.filter((job) => {
						return job.role === filter || job.level === filter || job.languages.includes(filter) || job.tools.includes(filter)
					})
				});
				return filteredJobsArray;
			}
			return this.jobs;
		},

		addFilter(filter) {
			if (!this.activeFilters.includes(filter)) {
				this.activeFilters.push(filter)
			}
			return this.activeFilters
		},

		removeFilter(filter) {
			if (this.activeFilters.includes(filter)) {
				this.activeFilters.splice(this.activeFilters.indexOf(filter), 1)
			}
			return this.activeFilters
		},

		clearFilters() {
			return this.activeFilters = []
		}
	}
}