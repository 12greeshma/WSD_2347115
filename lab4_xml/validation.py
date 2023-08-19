import xmlschema

xml_file = "employees.xml"
xsd_file = "employees_schema.xsd"

validator = xmlschema.XMLSchema(xsd_file)

try:
    validator.validate(xml_file)
    print("XML file is valid against the XSD schema.")
except xmlschema.XMLSchemaValidationError as e:
    print("XML file is not valid against the XSD schema.")
    print(e)


