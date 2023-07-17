
  /*  <script>
        const charactersContainer = document.getElementById('characters-container')
        const statusFilter = document.getElementById('status-filter')

				statusFilter.addEventListener('change',()=>{
					const selectedStatus=statusFilter.value
					fetchCharacters(selectedStatus)
				})
				async function fetchCharacters(status) {
					charactersContainer.innerHTML='Cargando...'
						try {
							const response=await fetch(`https://rickandmortyapi.com/api/character/?status=${status}`)
							const data=await response.json()
							displayCharacters(data.results)
						} catch (error) {
								charactersContainer.innerHTML='Error al cargar los personajes'
								console.log('Error: ', error);							
						}
				}
				function displayCharacters(characters) {
					charactersContainer.innerHTML=''
					characters.forEach(character => {
						const card=document.createElement('div')
						card.className='character-card'

						const image=document.createElement('img')
						image.src=character.image

						const name=document.createElement('h3')
						name.textContent=character.name
						
						const status=document.createElement('p')
						status.textContent=`Status: ${character.status}`
						
						const species=document.createElement('p')
						species.textContent=`Species: ${character.species}`
						
						card.appendChild(image)
						card.appendChild(name)
						card.appendChild(status)
						card.appendChild(species)

						charactersContainer.appendChild(card)	

					});
					
				}
				fetchCharacters('alive')

    </script>*/
<script>
        
        const charactersContainer = document.getElementById('characters-container');
        const buttons = document.querySelectorAll('#boton button');

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const selectedStatus = button.value;
                fetchCharacters(selectedStatus);
            });
        });

        async function fetchCharacters(status) {
            charactersContainer.innerHTML = 'Cargando...';
            try {
                const response = await fetch(`https://rickandmortyapi.com/api/character/?status=${status}`);
                const data = await response.json();
                displayCharacters(data.results);
            } catch (error) {
                charactersContainer.innerHTML = 'Error al cargar los personajes';
                console.log('Error: ', error);
            }
        }

        function displayCharacters(characters) {
            charactersContainer.innerHTML = '';
            characters.forEach(character => {
                const card = document.createElement('div');
                card.className = 'character-card';

                const image = document.createElement('img');
                image.src = character.image;

                const name = document.createElement('h3');
                name.textContent = character.name;

                const status = document.createElement('p');
                status.textContent = `Status: ${character.status}`;

                const species = document.createElement('p');
                species.textContent = `Species: ${character.species}`;

                card.appendChild(image);
                card.appendChild(name);
                card.appendChild(status);
                card.appendChild(species);

                charactersContainer.appendChild(card);
            });
        }

        fetchCharacters('alive');
    </script>
