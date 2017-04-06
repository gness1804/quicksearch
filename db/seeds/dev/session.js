exports.seed = function(knex, Promise) {
  return knex('session').del()
    .then(function () {
      return Promise.all([
        knex('session').insert(
          {
            id: 1,
            user_email: 'fake@notreal.edu',
            user_first_name: 'Graham',
            user_last_name: 'Nessler',
            screen_width: 34,
            screen_height: 20,
            visits: 3,
            page_response: 300,
            domain: 'foo',
            path: 'bar',
          }),
        knex('session').insert(
          {
            id: 2,
            user_email: 'garfield@ihatemondays.com',
            user_first_name: 'Graham',
            user_last_name: 'Nessler',
            screen_width: 78,
            screen_height: 44,
            visits: 7,
            page_response: 600,
            domain: 'big',
            path: 'dog',
          }
        ),
        knex('session').insert(
          {
            id: 3,
            user_email: 'yours@mine.com',
            user_first_name: 'Hello',
            user_last_name: 'World',
            screen_width: 78,
            screen_height: 40,
            visits: 4,
            page_response: 800,
            domain: 'foo',
            path: 'bill',
          }
        ),
        knex('session').insert(
          {
            id: 4,
            user_email: 'hello@world.com',
            user_first_name: 'Bill',
            user_last_name: 'Ashley',
            screen_width: 66,
            screen_height: 22,
            visits: 8,
            page_response: 300,
            domain: 'hi',
            path: 'hello',
          }
        ),
        knex('session').insert(
          {
            id: 5,
            user_email: 'example@test.com',
            user_first_name: 'AllMy',
            user_last_name: 'Children',
            screen_width: 8,
            screen_height: 12,
            visits: 7,
            page_response: 500,
            domain: 'big',
            path: 'dog',
          }
        ),
        knex('session').insert(
          {
            id: 6,
            user_email: 'another@one.com',
            user_first_name: 'MoreFake',
            user_last_name: 'Data',
            screen_width: 23,
            screen_height: 24,
            visits: 9,
            page_response: 500,
            domain: 'foo',
            path: 'bar',
          }
        ),
        knex('session').insert(
          {
            id: 7,
            user_email: 'milk@man.com',
            user_first_name: 'Matt',
            user_last_name: 'Kallman',
            screen_width: 34,
            screen_height: 22,
            visits: 8,
            page_response: 600,
            domain: 'my',
            path: 'path',
          }
        ),
        knex('session').insert(
          {
            id: 8,
            user_email: 'hey@hello.com',
            user_first_name: 'Albion',
            user_last_name: 'Hatch',
            screen_width: 79,
            screen_height: 45,
            visits: 5,
            page_response: 400,
            domain: 'big',
            path: 'dog',
          }
        ),
      ]);
    });
};
