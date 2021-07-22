import S from '@sanity/desk-tool/structure-builder';

export default () =>
  S.list()
    .title('Content')
    .items([
      ...S.documentTypeListItems().filter(
        (listItem) => !['general', 'about', 'projects'].includes(listItem.getId())
      ),
      S.listItem()
        .title('Settings')
        .child(
          S.list()
            .title('Settings')
            .items([
              S.listItem()
                .title('General')
                .child(
                  S.document().schemaType('general').documentId('general')
                ),
              S.listItem()
                .title('About')
                .child(S.document().schemaType('about').documentId('about')),
              S.listItem()
                .title('Projects')
                .child(S.document().schemaType('projects').documentId('projects')),
            ])
        ),
    ]);
