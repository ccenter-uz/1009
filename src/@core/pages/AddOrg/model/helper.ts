// CREATE-ORG-VALUES
export const createOrgValues=(values:any,phones:any,coordinates:any,photos:any)=>{
    const formData =new FormData();
    // PAYMENT TYPES
    formData.append(
      'payment_types',
      JSON.stringify({ cash: values.cash, terminal: values.terminal, transfer: values.transfer })
    )
    // PHONES
    formData.append(
      'phones',
      JSON.stringify({
        numbers: phones.map((phone: { id: number; value: string; type: string }) => ({
          number: phone.value,
          type_number: phone.type
        }))
      })
    )
    // TRANSPORT
    formData.append(
      'transport',
      JSON.stringify({
        bus: values.autobus,
        gazelle: values.marshrut,
        metro_station: values.metro_station,
        micro_bus: values['micro-autobus']
      })
    )
    // LOCATION
    formData.append('location', JSON.stringify({ coordinates: { lon: coordinates[0], lat: coordinates[1] } }))
    // SCHEDULER
    formData.append(
      'scheduler',
      JSON.stringify({
        worktime_from: values.worktime_from,
        worktime_to: values.worktime_to,
        breakfast_from: values.breakfast_from,
        breakfast_to: values.breakfast_to,
        dayoffs: values.dayoffs
      })
    )
    // SEGMENT
    formData.append('segment', values.segment)
    // ADDRESS
    formData.append(
      'address',
      `${values.index}, ${values.region}, ${values.city}, ${values.area}, ${values.house}, ${values.block}, ${values.apartment}`
    )
    // ORGANIZATION_NAME
    formData.append('organization_name', values.organization_name)
    // EMAIL
    formData.append('email', values.email)
    // INN
    formData.append('inn', values.inn)
    // BANK_ACCOUNT
    formData.append('bank_account', values.bank_account)
    // COMMENT
    formData.append('comment', values.comment)
    // MAIN_ORGANIZATION
    formData.append('main_organization', values.main_organization)
    // MANAGER
    formData.append('manager', values.manager)
    // SECTION
    formData.append('section', values.section)
    // SUB_CATEGORY
    formData.append('sub_category_id', values.sub_category_id)
    // ACCOUNT
    formData.append('account', values.account)
    // ADDED_BY
    formData.append('added_by', 'admin')
    // PICTURES
    for (let i = 0; i < photos.length; i++) {
      formData.append(`pictures${[i]}`, photos[i]?.file)
    }

    return formData
}

// EDIT-ORG-VALUES
export const editOrgValues=(values:any,phones:any,coordinates:any,pictures_delete:any,pictures_create:any)=>{
    const formData =new FormData();
    // PAYMENT TYPES
    formData.append(
      'payment_types',
      JSON.stringify({ cash: values.cash, terminal: values.terminal, transfer: values.transfer })
    )
    // PHONES
    formData.append(
      'phones',
      JSON.stringify({
        numbers: phones.map((phone: { id: number; value: string; type: string }) => ({
          number: phone.value,
          type_number: phone.type
        }))
      })
    )
    // TRANSPORT
    formData.append(
      'transport',
      JSON.stringify({
        bus: values.autobus,
        gazelle: values.marshrut,
        metro_station: values.metro_station,
        micro_bus: values['micro-autobus']
      })
    )
    // LOCATION
    formData.append('location', JSON.stringify({ coordinates: { lon: coordinates[0], lat: coordinates[1] } }))
    // SCHEDULER
    formData.append(
      'scheduler',
      JSON.stringify({
        worktime_from: values.worktime_from,
        worktime_to: values.worktime_to,
        breakfast_from: values.breakfast_from,
        breakfast_to: values.breakfast_to,
        dayoffs: values.dayoffs
      })
    )
    // SEGMENT
    formData.append('segment', values.segment)
    // ADDRESS
    formData.append(
      'address',
      `${values.index}, ${values.region}, ${values.city}, ${values.area}, ${values.house}, ${values.block}, ${values.apartment}`
    )
    // ORGANIZATION_NAME
    formData.append('organization_name', values.organization_name)
    // EMAIL
    formData.append('email', values.email)
    // INN
    formData.append('inn', values.inn)
    // BANK_ACCOUNT
    formData.append('bank_account', values.bank_account)
    // COMMENT
    formData.append('comment', values.comment)
    // MAIN_ORGANIZATION
    formData.append('main_organization', values.main_organization)
    // MANAGER
    formData.append('manager', values.manager)
    // SECTION
    formData.append('section', values.section)
    // SUB_CATEGORY
    formData.append('sub_category_id', values.sub_category_id)
    // ACCOUNT
    formData.append('account', values.account)
    // ADDED_BY
    formData.append('added_by', 'admin')
    // PICTURES_DELETE
    formData.append('pictures_delete', JSON.stringify(pictures_delete))

    // PICTURES_CREATE
    for (let i = 0; i < pictures_create.length; i++) {
      formData.append(`pictures_create`, pictures_create[i]?.file)
    }

    return formData
}