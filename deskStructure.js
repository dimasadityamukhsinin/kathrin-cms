import S from '@sanity/desk-tool/structure-builder'
import React from 'react'
import { FiSettings, FiFile, FiStar } from 'react-icons/fi'
import { GrProjects } from 'react-icons/gr'

export default () =>
  S.list()
    .title('Content')
    .items([
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !['project_list', 'settings', 'about', 'projects', 'home'].includes(
            listItem.getId(),
          ),
      ),
      S.listItem()
        .title('Project List')
        .icon(() => <GrProjects />)
        .child(
          S.documentTypeList('project_list').title('Project List').child(),
        ),
      S.listItem()
        .title('Pages')
        .icon(() => <FiFile />)
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Home')
                .icon(() => <FiStar />)
                .child(S.document().schemaType('home').documentId('home')),
              S.listItem()
                .title('Info')
                .icon(() => <FiStar />)
                .child(S.document().schemaType('about').documentId('about')),
              S.listItem()
                .title('Projects')
                .icon(() => <FiStar />)
                .child(
                  S.document().schemaType('projects').documentId('projects'),
                ),
            ]),
        ),
      S.listItem()
        .title('Settings')
        .icon(() => <FiSettings />)
        .child(S.document().schemaType('settings').documentId('settings')),
    ])
