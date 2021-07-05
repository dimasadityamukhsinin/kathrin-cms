// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import seo from './seo'
import thumbnail from './thumbnail'
import img from './img'
import select_image from './select_image'
import press from './press'
import contact from './contact'
import seo_image from './seo_image'
import projects from './projects'
import general from './general'
import home from './home'
import about from './about'
import project_list from './project_list'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    project_list,
    projects,
    general,
    home,
    about,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    seo,
    thumbnail,
    img,
    select_image,
    press,
    contact,
    seo_image
  ]),
})
