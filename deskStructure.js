import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Content')
    .items([
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            'project_list',
            'settings',
            'about',
            'projects',
            'home',
          ].includes(listItem.getId()),
      ),
      S.listItem()
        .title('Project List')
        .child(
          S.documentTypeList('project_list').title('Project List').child(),
        ),
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Home')
                .child(S.document().schemaType('home').documentId('home')),
              S.listItem()
                .title('Info')
                .child(S.document().schemaType('about').documentId('about')),
              S.listItem()
                .title('Projects')
                .child(
                  S.document().schemaType('projects').documentId('projects'),
                ),
            ]),
        ),
      S.listItem()
        .title('Settings')
        .child(S.document().schemaType('settings').documentId('settings')),
      // S.listItem()
      //   .title('Settings')
      //   .child(S.documentTypeList('settings').title('Settings').child()),
    ])
