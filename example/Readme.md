get /boards

{
  path: '/boards',
  type: 'dir',
  size: '1111',
  children: [ 
    { path: '/boards/parts', type: 'directory' },
    { path: '/boards/skateboard', type: 'file' } 
  ]
}

get /boards/skateboard

{
  path: '/boards/skateboard',
  type: 'file',
  size: '1111',
}

post /boards/gear

{
  200 ok
}

post /boards/gear/hat.js

data: file

{
  200 ok
}

put /boards/gear

data: { name: 'whatever' }

{
  200 ok
}

 = '/'
/ = '/'

/projects = /projects
/projects/ = /projects
