from lxml import etree


xml_tree = etree.parse("dogs.xml")


xsl_transform = etree.XSLT(etree.parse("dogs_data.xsl"))


html_tree = xsl_transform(xml_tree)


xmlschema = etree.XMLSchema(etree.parse("dogs_schema.xsd"))
if xmlschema.validate(xml_tree):
    print("XML is not valid against XSD.")
else:
    print("XML is  valid against XSD.")
    exit(1)


with open("dogs_data1.html", "wb") as output_file:
    output_file.write(etree.tostring(html_tree, pretty_print=True))